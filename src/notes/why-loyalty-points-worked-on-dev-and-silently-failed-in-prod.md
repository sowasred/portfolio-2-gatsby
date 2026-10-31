---
title: "Why loyalty points worked on dev and silently failed in prod"
date: 2026-07-29
description: "Two order paths, one flag, and a 1% rollout."
tags: [debugging, feature-flags]
collection: notes
draft: false
---

In prod, customers at sites that had both a site discount and a loyalty campaign placed paid orders and their reward progress stayed at zero. It was not reproducible on dev. Orders reach the loyalty provider by one of two mutually exclusive paths: when a cart has no discount, an `OrderCreatedEvent` registers the order; when it does have one, that path is deliberately skipped to avoid double counting and the order service's `redeemStackable()` call is supposed to register it instead. The feature flag controlling this was on everywhere, so it wasn't the difference.

The difference was routing. Dev and staging sent 100% of orders to the V2 order service (which always calls `redeemStackable`), while prod sent about 1% to V2 and the rest to the legacy path (which skipped it when the flag was on). I turned the flag off in prod to stop the bleeding, changed the discount service so discounted orders are still sent to the loyalty provider for milestone tracking, then made the V2 order flow respect the flag and re-enabled it so all three environments match again. The lesson I took away: "works on dev" has to include which code path served the request, not just which flags were set. Next is a system test that runs the discount-plus-loyalty order through both order paths.
