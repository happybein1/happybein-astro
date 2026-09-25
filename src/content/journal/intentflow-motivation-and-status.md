---
title: "Why IntentFlow exists, and where it stands today"
category: dev-update
date: 2026-09-06
description: "The thinking behind IntentFlow and a status update now that cloud sync is live."
---

*Part of a series on IntentFlow: this post (why it exists) · [a walkthrough for first-time users](/journal/intentflow-walkthrough) · [the testing guide](/journal/intentflow-testing-guide) · [the full functional spec](/journal/intentflow-functional-specification).*

IntentFlow started from a simple annoyance: my habits lived in one app, my plans in a notes file, my calendar somewhere else, and the odd link I wanted to keep for later scattered across bookmarks and messages to myself. None of it talked to the others. I wanted one place that covered a normal day end to end — what I'm trying to build as a habit, what's coming up, what I'm actively planning, and the handful of links worth keeping — without it turning into a bloated productivity suite I'd abandon in a month.

So IntentFlow is deliberately narrow: Today, Events, Calendar, Plans, and Links. Five tabs, each doing one job well, all reading from the same local data. No accounts required, no ads, nothing running in the background you didn't ask for — it's meant to feel like a tool, not a product trying to hold your attention.

That local-only design was also its biggest limitation. Everything lived in the browser's storage on whatever device you happened to be using, which meant switching phones — or just using it on both a phone and a laptop — meant your data didn't come with you. That's the gap I set out to close with cloud sync, and the same approach now also runs in Shop, my grocery app. For exactly what sync does today, see the [full functional spec](/journal/intentflow-functional-specification#settings).

Next up: let both apps run for real for a while, then hand IntentFlow to a few friends to kick the tires before I think about app stores or anything resembling marketing. One step at a time.
