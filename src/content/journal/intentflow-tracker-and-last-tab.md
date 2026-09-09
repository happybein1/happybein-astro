---
title: "Two small IntentFlow updates: value tracking and remembering your last tab"
category: dev-update
date: 2026-09-09
description: "Weekly Goals now supports tracking a value over time, and the app can reopen to whichever tab you were last on."
---

Two smaller additions to IntentFlow this week, both born out of just using the app myself.

**Weekly Goals now has two types.** The original version only handled one shape of goal well: tally toward a weekly target, like "Run 3×." That's fine for habits you're counting, but it never fit something like tracking my weight — there's no weekly target to hit, just a number that changes over time and that I want to see trend. So Weekly Goals now offers a **Counter** (the original behavior) and a **Tracker**: log a value on any day, no target, no weekly reset, just an accumulating history. Tap the trend icon on any tracker and you get a chart of the last 30 entries plus the full dated list. Existing goals didn't need any migration — anything without a type is just treated as a Counter, same as always.

**The app can now reopen to whichever tab you were last on.** Landing preference already let you pick a fixed tab to always open to, which is genuinely useful for a habit like always checking Today first. But I found myself wanting the opposite just as often — I'd be deep in Plans, close the app, and land back on Today needing to tap back over. Now there's a "Last tab used" option alongside the fixed choices, so both habits are supported rather than picking one at the expense of the other.

Neither of these needed a redesign — both slotted into decisions already made earlier (the Plans tab already remembers your last-selected list the same way; the sync work already required tracking "what tab were you on" for its own reload logic). Small compounding benefit of building things with reusable patterns instead of one-off logic.
