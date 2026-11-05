---
title: "Why our loyalty rewards failed when the vendor said we had hit the limit"
date: 2026-09-30
description: "The rewards screen failed because we kept calling the loyalty provider after it said we had already hit the usage limit."
tags: [resilience, rate-limiting]
collection: notes
draft: false
---

When the loyalty provider hit its usage limit, it started refusing our calls, and the rewards screen failed with a server error. `loadRewardCampaigns()` did not store that failure or wait before trying again, so every request for rewards called the provider again. `getRewards()`, the API the screen called, retried each failure, and those retries multiplied the calls against a limit that was already used up.

I changed the rewards path so a usage-limit response skipped the provider. `serveCachedCampaigns()` returned the reward campaigns already in the cache instead of failing the screen. The part that needed care was what a slightly old copy meant for loyalty progress compared with failing the request. Showing campaigns that were a little out of date was better than an error screen, but that saved progress could not be mistaken for fresh data. The lesson: the provider had told us the limit was already hit, we missed the signal to stop, and we missed it because a limit response was treated like any other failure, so the rewards call and the retries in front of it kept going. After that, a usage-limit response served the saved campaigns and did not call the provider again.
