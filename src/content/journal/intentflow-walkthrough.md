---
title: A walkthrough of IntentFlow, for anyone seeing it for the first time
category: dev-update
date: 2026-09-13
description: What each tab in IntentFlow actually does, with real examples of
  how I use them.
---
IntentFlow's integrated, customizable lists and trackers help you brainstorm, plan, and prioritize your goals and habits, and keep your events and chores on track. Free, no account required, nothing running in the background you didn't ask for.

Here is the tour tab by tab, with the kind of everyday examples that make each one click.

## Installing it on your phone first

IntentFlow lives at [intentflow.yeahvibe.com](https://intentflow.yeahvibe.com) and works fine as just a page in your browser, but it's built as a Progressive Web App, which means you can install it as a real icon on your home screen that opens full-screen with no browser bar — and once it's been opened at least once, it keeps working offline, since the app itself is cached on your device rather than re-downloaded every time.

**On Android**, open the link in Chrome, tap the **⋮** menu in the top right, and tap **Install app** (sometimes worded "Add to Home screen"). Confirm, and the IntentFlow icon appears on your home screen like any other app.

**On iPhone**, this only works through **Safari** — Chrome on iOS can't install PWAs, since Apple doesn't let other browsers do this. Open the link in Safari, tap the **Share** button (the square with an arrow pointing up) along the bottom, scroll down the sheet that appears, and tap **Add to Home Screen**. Confirm the name and tap **Add**.

Either way, you now have a real app icon, not just a bookmark — and everything from here on works the same whether you're using it installed or straight from the browser.

## First open: the landing screen and the five tabs

The very first time you open IntentFlow, before any of your own data exists, you land on a full-screen welcome page rather than straight into the app — a teal gradient background, the app's icon, "IntentFlow" in big type under the tagline **"Your personal daily OS,"** and one line explaining the basics: habits, weekly goals and trackers, events, plans and links, all in one place, staying on your device unless you turn on sync. Tap **Get Started** and you're in — this screen only ever shows once per device.

From there, everything hangs off five tabs: **Today**, **Events**, **Calendar**, **Plans**, and **Links**. Today is your daily habit tracker and where the app opens by default. Events and Calendar are two views of the same underlying dates — a list and a month grid. Plans is where lists, itineraries, and prioritization live. Links is a small reorderable set of URLs you reach for often. Settings later lets you change which of these five the app opens to by default — including an option to just reopen wherever you last were — but "Today" is the sensible starting point, so that's where this tour starts too.

## Today — the habit tracker you open every morning

This is the tab IntentFlow opens to by default, and it's built around three things stacked top to bottom: **habits**, a **Due today** reminders section, and **Weekly Goals / Trackers**.

Habits are the things you want to do every day — say, 10 minutes of stretching, drinking a glass of water before coffee, or reading a few pages before bed. Each one gets a time and a point value, and checking it off adds to a daily score that resets overnight. Miss a day and the streak counter under that habit resets too, which turns out to be a surprisingly effective nudge — nobody wants to watch a 12-day streak drop back to zero over something as small as forgetting to check a box.

Right below the habit list, a **🔔 Due today** section quietly appears whenever something from Events or Plans is actually due — a recurring chore like taking the bins out, or a one-off event dated today — so you're not expected to go check the Events tab separately just to see what needs attention right now. It only shows up when there's something in it, and tapping an item checks it off and awards its points on the spot, exactly like a habit.

Weekly Goals sit at the bottom of Today, and they come in two shapes that solve different problems. A **Counter** is for anything with a weekly target: "Run 3×" ticks up every time you log a run and resets each Monday. A **Tracker** is for the opposite case — a number you want to watch trend over time with no target at all. Weight is the obvious example: you're not trying to hit "3 weigh-ins," you just want to log a value now and then and see the line move. Tap the little chart icon on any tracker and you get the last 30 entries plotted, plus the full dated history underneath.

## Events — what's coming up, in order

Events is a plain chronological list: appointments, weekly chores, a project deadline, anything with a date attached. A dentist appointment next Tuesday and a recurring "take the bins out" chore live side by side here, filterable by Events or Chores if you want to see just one kind. The **Next / 6 mo** toggle at the top is for switching between "what's immediately ahead" and "what's coming over a longer horizon" — useful for something like a friend's wedding four months out that you don't need cluttering your near-term view but still want on your radar.

Events can repeat daily, weekly, monthly, or on a custom interval you set, so a recurring chore only needs to be entered once.

## Calendar — the same data, laid out by month

If Events is the list view, Calendar is the grid view — the same underlying events and chores, spread across a six-month calendar so you can see at a glance whether a week is packed or empty. Tapping any day with something on it shows the details, and the same **+ Add** button from Events works here too. I reach for this one specifically when I'm trying to spot a genuinely free stretch to schedule something into, which a scrolling list doesn't make obvious the way a month grid does.

## Plans — the tab that does the most, in two modes

Plans is where lists live, and every list runs in one of two modes, switchable from its own **⋯** menu.

**Plan mode** is the general-purpose one — everything from a simple checklist to a full itinerary for something with real sequencing, like a weekend trip or a move. Steps are grouped into **parts**, which are really just headings you can name however suits the list: "Day 1" and "Day 2" for a trip, or "Before moving day," "Moving day," and "Settling in" for a move. A part's heading line quietly tracks progress and timing for you — something like *2 of 5 done · 09:00–14:30* — because if a step's text starts with a time (`09:00 Arrive at hotel`), IntentFlow reads that for sorting and for the span shown on the heading. The **⏱ Sort by time** option in that same ⋯ menu is genuinely useful here: type a wedding day's events into a part in whatever order you think of them, then sort, and the timeline straightens itself out.

**Priority mode** is for deciding what to actually do first when you have more options than time. You score each item on Impact, Urgency, and Effort, and IntentFlow ranks them and can auto-sort the list; a Priority Matrix underneath maps everything into quadrants, so "high impact, low effort" items visually separate themselves from the busywork. I use this for anything with more candidates than I can realistically act on at once — a list of house features to prioritize while apartment-hunting, for instance, where "matters a lot and costs nothing to check" should clearly outrank "nice to have but expensive."

Reordering is drag-and-drop via the **⠿** grip on the right of each row — drag a step under a different heading to re-file it, or drag a whole heading and its steps move with it.

## Links — the handful of URLs you actually reach for daily

This one's deliberately simple: a flat, reorderable list of saved title-and-URL pairs, for the pages you open constantly enough that a bookmarks folder never quite cuts it — a shared planning doc, your bank, a work dashboard. Tap a saved link to open it in a new tab, or press and hold it to copy the URL straight to your clipboard, which is the faster path when you actually want to paste that link into a text to someone rather than open it yourself.

## Settings, briefly

Everything above lives locally on your device by default — no account needed for any of it. Settings is where you'd turn on sync if you want that same data to follow you to a second device, pick which tab the app opens to (including "last tab used," if you'd rather it just remember where you left off), and find the privacy policy and export/backup tools. I've written about the sync work in more depth in an earlier post, so I won't repeat it here — this one was about the everyday shape of the app itself.
