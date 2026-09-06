---
title: "Why IntentFlow exists, and where it stands today"
category: dev-update
date: 2026-09-06
description: "The thinking behind IntentFlow and a status update now that cloud sync is live."
---

IntentFlow started from a simple annoyance: my habits lived in one app, my plans in a notes file, my calendar somewhere else, and the odd link I wanted to keep for later scattered across bookmarks and messages to myself. None of it talked to the others. I wanted one place that covered a normal day end to end — what I'm trying to build as a habit, what's coming up, what I'm actively planning, and the handful of links worth keeping — without it turning into a bloated productivity suite I'd abandon in a month.

So IntentFlow is deliberately narrow: Today, Events, Calendar, Plans, and Links. Five tabs, each doing one job well, all reading from the same local data. No accounts required, no ads, nothing running in the background you didn't ask for — it's meant to feel like a tool, not a product trying to hold your attention.

That local-only design was also its biggest limitation. Everything lived in the browser's storage on whatever device you happened to be using, which meant switching phones — or just using it on both a phone and a laptop — meant your data didn't come with you. That's the gap I've spent the last stretch closing.

Cloud sync landed a few days ago: sign in with Google, and your data backs up to your own account. I built it as a manual Backup/Restore pair at first, deliberately simple and impossible to mess up by accident. Once that proved solid in real use, I made it automatic — changes back up on their own a few seconds after you stop editing, and each device quietly checks for newer data when you open the app or come back to it after a while. The one moment that genuinely needed care was a new device meeting an account that already has data elsewhere; that still asks before it overwrites anything, rather than assuming.

It's not a full multi-device sync engine — two devices both edited at the exact same moment can still have one overwrite the other, since there's no merging under the hood, just a single backup per account. For how I actually use it — one device at a time, switching occasionally — that's a fair trade for how much simpler and more reliable it keeps things.

Same foundation is now running in Shop, my grocery app, and it's what proved out the approach before I brought it here.

Next up: let both apps run for real for a while, then hand IntentFlow to a few friends to kick the tires before I think about app stores or anything resembling marketing. One step at a time.
