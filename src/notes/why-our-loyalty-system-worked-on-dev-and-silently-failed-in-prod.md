---
title: "Why our loyalty system worked on dev and silently failed in prod"
date: 2026-07-29
description: "Two order paths, one flag, and a 1% rollout."
tags: [debugging, feature-flags]
collection: notes
draft: false
---

In prod, the loyalty system failed quietly. Customers at sites that had both a site discount and a loyalty campaign placed paid orders, but the points were not applied and their reward progress stayed at zero. It was not reproducible on dev. An order reaches the loyalty provider on one of two paths, and only one of them runs. When the cart has no discount, `sendOrderToVendor()` registers the order. When it does have a discount, that call is skipped on purpose so the order is not counted twice, and `applyDiscount()` is supposed to register it instead. The feature flag for this was on everywhere, so the flag was not the difference.

The difference was which service handled the order. Dev and staging sent every order to the new order service, which always calls `applyDiscount()`. Prod sent about 1% of orders there and the rest to the old order service, which skipped `applyDiscount()` when the flag was on. I turned the flag off in prod to stop the bleeding, changed the discount service so discounted orders are still sent to the loyalty provider, then made the new order service respect the flag and turned the flag back on so all three environments match. The lesson: "works on dev" has to include which code path served the request, not just which flags were set. Next is a system test that runs a discount-plus-loyalty order through both order services.
