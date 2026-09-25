---
title: "IntentFlow, fully specified: what every tab and setting actually does"
category: dev-update
date: 2026-09-19
description: "A complete, living functional reference for IntentFlow — every tab, every setting, every behavior, kept up to date as the app changes rather than written once and left to go stale."
---

*Part of a series on IntentFlow: [why it exists](/journal/intentflow-motivation-and-status) · [a first-timer walkthrough](/journal/intentflow-walkthrough) · [the testing guide](/journal/intentflow-testing-guide) · this post (the living reference).*

**Verified against IntentFlow v6.50.**

I've written about IntentFlow a few times now — why it exists, a walkthrough for someone seeing it the first time, monthly notes on what shipped. What's been missing is the boring but useful one: a single document that actually specifies what the app does, completely, in one place. Not a pitch, not a tour with anecdotes — a reference.

This is that document. Unlike the other posts here, I'm treating this one as living rather than a snapshot: when a feature changes, this gets updated in place rather than superseded by a new post. If you're reading this much later than the version noted above, treat any specific detail with a little skepticism and check the app itself for the current behavior.

## What it is

IntentFlow is a free, installable Progressive Web App covering four things: daily habits, a merged agenda of upcoming events/chores and a calendar view, freeform plans/priorities, and a small set of frequently-used links. Everything lives locally on the device by default — no account, no ads, nothing running in the background — with an optional, off-by-default cloud sync if you want the same data to follow you across devices.

It's built as a single-page app (one HTML file, inline styles and script, no build step) with a service worker for offline caching. Installing it — "Add to Home Screen" on iOS Safari, or the install prompt / "Install app" menu item on Android Chrome — gives it a real home-screen icon that opens full-screen with no browser chrome, and it keeps working with no network connection once it's been opened at least once.

The four tabs are **Today**, **Agenda**, **Plans**, and **Links**, plus a **Settings** panel reached from a gear icon in the header. A one-time full-screen welcome page introduces the app the very first time it's opened on a device; it never shows again after that. Navigation lives in a bottom tab bar (icon above a short label) rather than the top header, for easier one-handed reach — the header itself just shows the current tab's name, the version number, and the settings gear.

## Today — weekly goals, due items, and habits

The default landing tab, built from three stacked sections, in this order: **Weekly Goals / Trackers**, **Due today**, then your **daily routine** (habits). Weekly Goals and Due Today sit above the habit list specifically so both stay visible with no scrolling or collapsing needed, even on a day with a long habit list — habits used to lead the tab, but that meant they were the thing pushing everything else off-screen.

**Weekly Goals / Trackers.** Two goal types, both editable from the same add/edit modal:
- **Counter** — tallies toward a weekly target (e.g. "Run 3×"), resets every Monday.
- **Tracker** — logs a value on any day with no target and no weekly reset (e.g. weight); tapping the trend icon shows the last 30 logged entries as a chart plus the full dated history underneath.

Both types share an icon field (tap it to open the shared icon popup, described below) and a name. Each card has a **⠿** grip on its left edge for drag-to-reorder; the log/increment button sits at the right edge of the card (the frequent action, easiest to reach), with edit — and, for Trackers, the history button — just to its left.

**🔔 Due today.** A section that appears only when something is actually due — a recurring chore (like a weekly bins run with no `lastDone` yet today) or a one-off event dated today, pulled from the Agenda data. Tapping an item here checks it off and awards points exactly like a habit, so there's no separate trip to the Agenda tab required just to clear what's due right now; a silent item shows up here too, as a plain non-checkable note. It's absent entirely when nothing qualifies.

**Daily routine (habits).** Each habit has a name, an icon, a time of day, and a point value. Checking one off adds its points to a running daily score that resets at midnight (local time, not UTC). Missing a day resets that habit's individual streak counter back to zero, shown right on the habit row. On each row, edit (✎) sits between the name and the time, with the done-circle at the trailing right edge — same reachability logic as Weekly Goals' log button. A habit checked off today drops out of the list by default (a "Show completed" toggle above the list brings it back — useful for editing one you've already done); the whole section also has its own **▾** collapse toggle in its header, compressing down to a small progress badge. The score card at the top of the tab is deliberately minimal: just the running total next to a **📈** button that opens the full score history — no in-card breakdown text or chart, both of which used to sit here and were dropped as redundant with that history screen.

## Agenda — a calendar and a chronological list, in one tab

Originally two separate tabs (Events, later renamed Upcoming, and a separate Calendar), these were merged into one **Agenda** tab: a single-month calendar on top, the same data as a flat chronological list underneath. A one-off event can now optionally span multiple days (a real end date, not just text noting a range) and carry an optional time of day, shown wherever the event itself is shown; a chore repeats daily, weekly, monthly, or on a custom interval.

The calendar shows one month at a time, with **‹**/**›** arrows to step between months and a **▴** toggle that collapses the grid down to just the row of controls beneath it when you only want the list — the calendar (plus that control row) stays pinned in view as you scroll the list below it, so switching months or re-expanding never requires scrolling back up first. Tapping a day with something on it shows that day's items in a small popup.

Below the calendar, one row holds the **All / Events / Chores** filter, a **📋** button that copies a ready-made prompt for pasting a schedule (a screenshot, a school calendar, a shift roster) into an AI assistant and pasting its reply straight back in as a batch of new items, the collapse toggle, and **+ Add**. The Events/Chores filter applies to both the calendar's day-dots and popup and the list underneath, not just the list. The list itself also has a separate **Next / 6 mo** toggle for the time horizon — useful for something like a wedding four months away that you want on the radar without it cluttering the near-term view. Each row shows the item's name and its type/recurrence label together on one line, with the date (and, if set, a day abbreviation and the time) in a pill on the right. An item can optionally be marked **silent** (a pure FYI note, like "person X is away" — no checkbox, never counted as overdue) and given a color tag that shows as a left border on its row and as its dot's color on the calendar. Marking a normal (non-silent) item done also feeds the streak/point mechanics shared with Today.

## Plans — lists, in two modes

The most capable tab, and a full two-screen experience rather than a dropdown. An **all-plans screen** lists every plan as its own row — tap a name to open it, ✎ renames in place, drag the **⠿** grip to reorder, and plans can be grouped under optional **+ Section** headers (also draggable, carrying their plans with them). Tapping a plan opens its own **detail screen**; a back button (and, on Android, the phone's own system back button) returns to the all-plans list. Whichever of the two screens — and, if it was a specific plan, which one — you last had open is where the tab lands next time you return to it.

Each plan runs independently in one of two modes, switched per-plan from its own **⋯** menu.

**🗓 Plan mode** — general-purpose, from a flat checklist to a fully sequenced itinerary. Steps are grouped into **parts** (just headings — "Day 1"/"Day 2", "Setup"/"Main"/"Wrap-up", or a single part for a plain list). A part's heading line auto-shows progress and time span (e.g. *2 of 5 done · 09:00–14:30*): if a step's text begins with a time like `09:00 Arrive at hotel`, IntentFlow parses that for both the heading summary and for the **⏱ Sort by time** menu action, which reorders a part's steps chronologically and pushes untimed steps to the end.

**⚡ Priority mode** — for ranking more candidates than you can act on. Each item gets Impact, Urgency, and Effort sliders; IntentFlow scores it as `(Impact × Urgency) / (Effort + 1)` and can auto-sort the list by that score live. A **Priority Matrix** panel plots everything into four quadrants (impact × effort) so the "matters a lot, costs little" items visually separate from the busywork. Items can also carry a free-text note.

Shared across both modes:
- **Adding**: a floating **+** button opens a popup (title "New idea" in Priority mode, "New step" in Plan mode) with the input, an Add button, a Note toggle, and — in Priority mode — the same Impact/Urgency/Effort sliders shown immediately. In Plan mode the popup also offers "Add a part instead" as a secondary option, the same pattern used for the all-plans screen's own "New list" / "Add a section instead" choice. The popup stays open across repeated adds, so several items can go in without reopening it — a Done button dismisses it when you're finished.
- **Inserting mid-list**: a small **+** next to the drag grip on any row inserts a new blank item right after that row, opened straight into edit mode. In Priority/Checklist mode there's also a standalone **+ Insert at top** control, since there's no row to attach a "+" *before* the first item; Plan mode doesn't show this control, since inserting after the first part's own heading (via its row "+") already does the identical thing.
- **Reordering**: drag the **⠿** grip on the right of any row. Dragging a step under a different heading re-files it into that part; dragging a heading takes its steps with it.
- **Deleting**: **×** on the left of a row, with an Undo toast (see below) for single steps/items — deleting an entire list, a part that still has steps in it, or clearing a whole list stays behind an explicit confirmation, since those are rarer and more consequential.
- **The plan's own ⋯ menu**: mode switch (Plan/Priority), Sort by time (Plan), Priority matrix / Auto-sort / Scoring defaults (Priority), Copy list, Export CSV, Import items (bulk paste, one per line, bullet prefixes stripped), Clear done, Clear list, and Delete plan (renaming and reordering both happen directly on the all-plans screen now, not through this menu).
- **+ Part**: creates a new heading in Plan mode, lives in the sticky top bar (next to the plan-picker bar) rather than buried in the bottom Add box, so it's reachable without scrolling down a long list.

## Links — a short, reorderable list of URLs

Deliberately simple: title + URL pairs for the handful of pages you reach for constantly — a shared doc, your bank, a work dashboard. Links can be grouped under optional **+ Section** headers too, same drag-and-carry behavior as Plans' sections. Each row shows a small icon, then the title and domain on a single line (not the full URL — it truncates if it doesn't fit). Tapping a link opens it in a new tab; pressing and holding copies the URL to the clipboard, with a couple of fallbacks (a hidden-textarea copy, then a select-and-copy text sheet) since clipboard access is notoriously unreliable inside installed iOS PWAs. **✎** edits the title/URL, **×** deletes (with Undo), and the **⠿** grip drag-reorders (dragging can move a link across sections too).

Every link also has an icon — tap it to open a small picker with a set of common link-type glyphs (web page, document, spreadsheet, mail, calendar, video, folder, shopping, chat, photos, music, finance, location, and a couple of general-purpose ones). Links created before this existed just default to a plain link icon (or an envelope for `mailto:` links) until you pick something else — nothing needed to migrate.

## Settings

Reached via the gear icon in the header; opens as a panel with several sections:

- **Landing tab** — a dropdown choosing which of the four tabs the app opens to, including a "Last tab used" option that just reopens wherever you left off instead of a fixed choice. This is also the default for anyone who's never touched the setting.
- **Notifications** — an optional daily check-in reminder at a time you set, using the browser's Notification API (gracefully degrades with a toast if the browser doesn't support it).
- **Appearance** — a dark mode toggle.
- **Data** — Refresh app (forces a fresh fetch past any stale cache, useful if an update doesn't seem to have landed), Undo last change (a small history stack, separate from the per-delete Undo toasts — see below), Export all data (select-and-copy JSON, plus a file download), and Import data (paste or choose a file; a full, confirmed replace of local data).
- **Sync across devices (trial)** — off by default. Sign in with Google, and this device backs itself up automatically a few seconds after any change, and checks for newer data on its own every few hours while the app is open — the two large **Back up now** / **Check now** buttons are there for when you want either done immediately rather than waiting on the automatic timing. A backup checks first that nothing newer has been saved elsewhere since this device last synced, and offers to load that instead (or, if you're sure, overwrite it) rather than silently clobbering it — the one moment sync still asks before acting. Plus sign-out and delete-my-backup. Backed by Google sign-in (a real top-level OAuth redirect, not an embedded button — more reliable across browsers that block third-party cookies) and Back4App for storage.
- **Privacy Policy** — a link at the bottom of the panel to the app's own privacy page, covering what's stored locally by default and what Sync sends off-device.

## Small conventions that show up everywhere

A few patterns are deliberately shared across the whole app rather than reinvented per feature:

- **Icon pickers** are a single shared bottom-sheet popup, opened from a small icon button/field wherever an icon can be set (Habits, Events/Chores, Weekly Goals, Links) — tapping an icon in the popup both picks it and closes the popup immediately, rather than an inline grid that has to be manually collapsed.
- **Routine, single-item deletes** (a habit, a step, a link, a priority idea, a weekly goal) show an Undo action right on the toast instead of a confirm-before-you-act dialog — a dialog on every single delete stops being read after the first dozen times, while a few seconds to tap Undo actually gets noticed. Bulk or harder-to-reverse actions (deleting a whole list, clearing a list's contents, deleting a part that still has steps) keep an explicit "are you sure?" instead.
- **Add/edit modals** (Habit/Event/Chore, Weekly Goal) are scroll-safe and keyboard-safe: they cap their own height and scroll internally rather than growing off-screen, and their Save/Delete/Cancel row stays pinned to the bottom of that scrollable area — including accounting for the on-screen keyboard (and, on some Android browsers, the extra autofill suggestion strip above the keyboard) so Save is never hidden behind it.
- **Times as plain text.** Anywhere a step or item can start with a time (`09:00 Arrive at hotel`), IntentFlow parses it for sorting and for summary display — there's no separate "time" field to fill in beyond just typing it as part of the text.

## What's deliberately out of scope

No accounts required for the core app — Sync is opt-in and only ever touches data you've explicitly turned it on for. No ads, a small set of anonymous, generic usage events (which tab you're on, that a habit was checked off — never any of your actual habit/plan/event text) alongside standard analytics page views, both disclosed in the privacy policy, and no notifications beyond the one optional daily reminder you set yourself. Sync itself is a single backup per account, not a real-time multi-device merge — it refuses to overwrite a backup it hasn't seen yet rather than blindly clobbering it, but two devices genuinely edited at the exact same moment can still have one lose; for one-device-at-a-time use with occasional switching, that trade-off keeps the whole thing simpler and more reliable than trying to build real conflict resolution for a personal tool.

---

I'll come back and edit this in place as things change, rather than writing a new one from scratch each time — if you want the story of *why* a given feature exists, the monthly dev-update posts and the [original walkthrough](/journal/intentflow-walkthrough) are the better read; this one's just meant to be correct.
