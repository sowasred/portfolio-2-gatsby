---
title: "Why our discount search kept bringing deleted discounts back"
date: 2025-10-31
description: "A deleted discount could show up in search again because an older update was saved after the delete."
tags: [aws, eventbridge, dynamodb, postgres]
collection: notes
draft: false
---

Our discount search index lived in its own database and was filled by events from the discount service. Automated tests kept leaving deleted discounts behind. A `deleteDiscount()` event could be saved first, and the `updateDiscount()` that had happened earlier could arrive later and quietly put the row back. The events were arriving out of order. The event bus only routes messages. It does not keep them in order. Switching to a queue that keeps order was a longer-term plan, so I changed the search updater instead. It compared the time on each event with the time already stored, dropped events that were older, and ignored updates for discounts that had already been deleted.

The same kind of bug showed up again. After a discount was published, its status sometimes flipped between "Live" and "ReadyToPublish". I stopped trusting the event stream for that copy of the data. I made the discount database the source of truth for the search tables and shipped scripts that repaired the search copy when the two drifted apart. The lesson: an older update could arrive after a delete, we missed that the event bus does not keep order, and we missed it because the search updater saved whichever event arrived last.
