---
title: "September 2026 — Development Updates"
category: dev-update
date: 2026-09-09
description: "IntentFlow gets value tracking and a smarter landing tab; Shop gets automatic sync and drag-to-reorder for its Others list."
---

Starting this month, I'm grouping these into one running post per month instead of a separate entry for every small change — easier to follow than a stream of one-liners, and less pressure to write something every time a feature ships. Here's what moved this September.

## IntentFlow

Two smaller additions, both born out of just using the app myself.

**Weekly Goals now has two types.** The original version only handled one shape of goal well: tally toward a weekly target, like "Run 3×." That's fine for habits you're counting, but it never fit something like tracking my weight — there's no weekly target to hit, just a number that changes over time and that I want to see trend. So Weekly Goals now offers a **Counter** (the original behavior) and a **Tracker**: log a value on any day, no target, no weekly reset, just an accumulating history. Tap the trend icon on any tracker and you get a chart of the last 30 entries plus the full dated list. Existing goals didn't need any migration — anything without a type is just treated as a Counter, same as always.

**The app can now reopen to whichever tab you were last on.** Landing preference already let you pick a fixed tab to always open to, which is genuinely useful for a habit like always checking Today first. But I found myself wanting the opposite just as often — I'd be deep in Plans, close the app, and land back on Today needing to tap back over. Now there's a "Last tab used" option alongside the fixed choices, so both habits are supported rather than picking one at the expense of the other.

Neither of these needed a redesign — both slotted into decisions already made earlier (the Plans tab already remembers your last-selected list the same way; the sync work already required tracking "what tab were you on" for its own reload logic).

## Shop

Shop — the grocery and household tracker — got two updates as well.

**Sync is now automatic**, carrying over the same approach IntentFlow got a few weeks back. Once signed in, a device backs itself up shortly after any change and quietly pulls in newer data whenever the app is opened — no more remembering to tap Backup or Restore. The one moment that still asks first: a device with its own local data signing in to an account that already has a backup somewhere else. Everything after that first decision happens silently in the background.

**Others list items can now be dragged to reorder**, using the same grip-handle pattern the Stores tab already had — so groceries stay grouped by category as before, but the miscellaneous Others list can finally be arranged however makes sense to you.

Small compounding benefit of building things with reusable patterns instead of one-off logic each time.
