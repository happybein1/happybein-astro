---
title: "Introducing ShopTools: a home for stores, stock, links and budgets"
category: dev-update
date: 2026-10-01
description: "ShopTools has been quietly growing for months without ever getting its own introduction here. A high-level tour of what it does today, with detailed appendixes on each tab's behavior for anyone who wants the specifics."
---

**Verified against ShopTools v8.21.**

IntentFlow has had a whole series of posts here — why it exists, a walkthrough, a testing guide, a full living spec. ShopTools hasn't had any of that, despite being just as actively worked on. This is the overdue introduction: what it is, at a glance, with the detailed tab-by-tab behavior pushed down into appendixes for anyone who wants the specifics rather than the overview.

## What it is

ShopTools is a free, installable Progressive Web App for the small, recurring logistics of running a household: what's in stock, which stores you use and their loyalty cards, a short list of links you keep coming back to, and a simple monthly budget. Like the other apps here, it's local-first — everything lives on the device by default, no account required, no ads — with an optional, off-by-default sync if you want the same data to follow you across devices.

It started life simply as "Shop," a grocery-list app, and grew into something broader over time — inventories beyond just groceries, loyalty cards and store hours, saved links, a budget tracker — which is what prompted the rename to ShopTools partway through its life. The name changed; the local-first, no-account philosophy didn't.

## The five tabs, at a glance

Navigation lives in a bottom tab bar (icon over a short label), left to right **Inventory, Quick List, Stores, Budget, Links**, with the header showing whichever tab is currently open plus the version number:

- **📦 Inventory** — Groceries, plus any other lists you add (Clothes, Tools…), each tracked by category with a tap to bump quantity up or down, and a filter to show just the items that need attention.
- **🧰 Quick List** — a flat list for occasional buys, now also splittable into named, draggable sections if a plain flat list stops being enough.
- **💳 Stores** — loyalty cards and opening hours, all in one place.
- **💰 Budget** — as many budgets as you like, each tracking its own monthly income vs. expenses, with spending logged as it happens.
- **🔗 Links** — URLs you come back to, grouped into categories.

A gear icon in the header opens **Settings** — landing-tab preference, sync, data export/import, and privacy. A one-time welcome screen introduces the app the first time it's opened on a device, with a choice between an animated guided tour of the five tabs or skipping straight in (replayable later from Settings); both Inventory/Quick List/Stores/Budget/Links ship with a few example entries already in place on a brand-new install, so the app never opens to five genuinely empty tabs.

## How it's delivered

ShopTools runs as a regular installable web app first — "Add to Home Screen" or the browser's own install prompt gives it a real home-screen icon with no browser chrome, and it works offline once opened at least once, same as any PWA here. Beyond that, it also ships as two different flavors of native Android app, which is more than most apps in this family need, so it's worth explaining why.

The first was a TWA (Trusted Web Activity) built with PWABuilder, listed for closed testing on the Play Store — technically a native app, but one that renders through the real Chrome APK, so it deliberately shares Chrome's cookies and storage with the browser. The second, newer one — built this session, alongside an identical project for IntentFlow — uses Capacitor instead, which renders through Android's own WebView component and gets its own private, per-app storage container completely separate from Chrome. The reasoning for building a second native app rather than just keeping the first: before any real closed-testing users exist on the TWA, switching is nearly free; waiting until testers have real local-only data on the TWA would mean that data not carrying over to the new build's isolated storage (anyone using cloud sync is unaffected either way — they just sign in again). The Capacitor build is meant to replace the TWA going forward.

Both native builds work the same way under the hood: rather than bundling a copy of the app, they simply point at the live site and load whatever's currently deployed there, so a change to the web app reaches native users the same way it reaches browser users — no separate app-store release needed for anything except native-only changes like the app icon or permissions.

## Sync, briefly

Off by default. Sign in with Google, and the device backs itself up automatically in the background and checks for newer data from other devices on its own — manual "Back up now" / "Check now" buttons exist for when you want either done immediately. Backed by Back4App for storage, with a compare-and-swap check so a backup won't silently overwrite something newer that another device already saved — you're asked first.

## What's deliberately out of scope

No account required for the core app, and sync only ever touches data you've explicitly turned it on for. No ads. Currency is a single shared setting across every budget rather than a per-budget choice — simpler for what's meant to be a personal or single-household tool, not a multi-currency accounting system.

---

The appendixes below cover each tab and the platform/sync details in full — this is the part that'll actually go stale first, so if you're reading this a while after the version noted at the top, treat specifics as a starting point and check the app itself.

## Appendix A: Stores

Each store entry can have a name, opening hours (optional), and a loyalty/rewards card number (optional) — a store doesn't need a card to earn an entry; saving just its hours is a valid use on its own. Cards get an automatically assigned color, with a "Go back to automatic" option if you've manually overridden it and want to reset. A preview shows how the card will look before saving.

For typing in a loyalty card number, the add-card form includes a tip pointing at two easier options than manual entry: the phone's own camera or Google Lens for a direct barcode scan, or photographing the card and asking an AI assistant (ChatGPT, Claude, Gemini) to read the number off the photo — most reliable when the number is also printed as text under the barcode. This is scoped to loyalty/rewards cards specifically, not payment cards.

Tapping a saved store opens a small card view with Edit/Done. Stores can be reordered via a drag grip. Deleting a store goes through the same Undo-toast pattern used for other single-item deletes across the app (see Appendix F).

## Appendix B: Inventory

**Groceries** is a pinned, always-present inventory — it can be renamed but not deleted. Alongside it, you can create any number of other named inventories (Clothes, Tools, whatever recurring category of stuff you track stock of). Each inventory is organized into categories, and each item within a category tracks: current stock level, an optional recommended level, an optional unit, and a quantity, with low-stock items visually distinguished by color.

Both categories and individual items support drag-to-reorder via a **⠿** grip — a category's grip reorders whole sections, an item's grip reorders within its own section (dragging can also re-file an item into a different category). Tap **+ New inventory** to create one, **✎** to rename, **×** to delete (blocked for Groceries). The inventories list itself is also reorderable. A filter pill in the top-right of an open inventory toggles between showing everything and showing only items that need attention (out of stock or below their recommended level). The tab reopens whichever inventory you last had open, not always defaulting back to Groceries.

Adding or editing an item opens a form with: item name, category (existing or a new one typed inline), current inventory, recommended level, unit (optional), and quantity, plus Delete/Cancel/Save.

## Appendix C: Links

Deliberately simple: a title and a URL for the pages you reach for constantly. Links are grouped into categories the same way Inventory is — same collapse-per-category behavior, same drag-to-reorder for both categories and individual links within them (dragging a link can move it across categories). The add/edit form is just title, URL, and category (existing or new), with Delete/Cancel/Save. Unlike IntentFlow's own Links tab, ShopTools' links don't carry a per-item icon — just the title and category grouping.

## Appendix D: Budget

You can keep as many independent budgets as you like (Food, Pocket money, whatever split makes sense) — **+ New budget** creates one, and **✎**/**×** on the budgets list rename or delete them. Currency is a single setting shared across every budget, not set per-budget.

Inside a budget, you set up recurring income and recurring expenses, each with a name, an amount, and a frequency (weekly, monthly, etc.) — ShopTools converts whatever frequency you pick into a monthly figure to compute what's left over each month. That "extra" figure counts down in real time as you log spending against it through the day, and resets fresh on the 1st of the month.

**Expenses subsections.** Expenses (only — not Income, not the spending log) can optionally be grouped into named, collapsible subsections — either the inline dropdown from the expense form, or a standalone **+ Section** button if you want to declare one before adding anything to it. This is fully opt-in: a budget with no subsections defined just shows a flat expense list, no extra chrome. Each subsection can be renamed (typing an existing subsection's name merges into it rather than creating a duplicate) or deleted — deleting a subsection un-assigns its expenses into an "Other" bucket rather than deleting the expenses themselves, using the same Undo-toast pattern as other deletes. Each subsection displays its own monthly total, which reconciles exactly with the overall Expenses total for the budget. Items within a subsection, subsections themselves, and dragging an expense from one subsection straight into another, all work via the same drag grip.

**Spending log.** As you spend against a budget's leftover through the month, each entry is logged with a drag grip for manual reordering — this replaced an earlier always-newest-first date sort, since a manual order turned out to be more useful for a running daily log than a fixed chronological one.

A budget reopens wherever you last left it, same pattern as Inventory.

## Appendix E: Quick List

For one-off or occasional buys — DIY tools, electronics, gadgets, anything that doesn't need stock tracking. Tap **+** to add an item and start typing its name immediately; double-tap a name to rename it; **−**/**+** adjust quantity; **×** deletes. It can now also be split into named sections (same optional, draggable, cross-section-drag behavior as Budget's Expenses subsections) if a flat list stops being enough — still no current/recommended-level tracking, that's what keeps it distinct from Inventory.

## Appendix F: Settings

Reached via the header's gear icon (this used to be a "Home" landing tab before becoming a dedicated Settings sheet), and deliberately kept short — a five-paragraph "How ShopTools works" block that used to sit here was removed once the guided tour below covered the same ground interactively, rather than explaining the app twice in two different places:

- **Landing tab** — which of the five tabs opens by default, including a "Last tab used" option that reopens wherever you left off instead of a fixed choice.
- **🚶 Replay the tour** — reopens the same animated spotlight walkthrough shown on first install.
- **Sync across devices (trial)** — off by default; see Appendix G for the full mechanism. Sign in/out, Back up now, Check now, and Delete my synced backup all live here.
- **Data** — Export data (select-and-copy JSON plus a file download) and Import data (paste or choose a file, a full confirmed replace).
- **Refresh app** — forces a fresh fetch past any stale cache, useful if an update doesn't seem to have landed.
- **Get in touch** — a Contact & feedback mailto link.
- **Privacy Policy** — a link to the app's own privacy page.

The Android app's hardware/gesture back button now also works everywhere it reasonably should — closing an open sheet, modal, or drill-in view rather than falling straight through to exiting the app, the way it did before any screen in this single-page app pushed its own history entry.

## Appendix G: Platform delivery, in detail

ShopTools' web app (the actual source of truth for behavior — everything in the appendixes above) is served from `grocery.yeahvibe.com`. It used to also be reachable at a second custom domain, `grocery.happybein.com`, serving identical content from the same deployment; that second domain has since been decommissioned, with `yeahvibe.com` kept as the one going forward.

**PWA.** The baseline delivery — installable straight from the browser, works offline via a service worker, no app-store step required at all.

**TWA (`com.yeahvibe.grocery.twa`).** Built via PWABuilder for Play Store listing. Because a TWA renders through the actual installed Chrome APK, it shares Chrome's storage, cookies, and cache with the rest of the browser — convenient in that sign-in and session state can piggyback on Chrome's own, but it means the app isn't really isolated from the browser the way a "real" native app would be.

**Capacitor app (`com.yeahvibe.shoptools.app`).** Built to replace the TWA, using Capacitor's own WebView instead — this gives the app fully isolated, per-app storage with nothing shared with Chrome. `capacitor.config.json`'s `server.url` points at the live `grocery.yeahvibe.com` site rather than bundling a local copy, so — same as the PWA — a change to the deployed web app reaches native users automatically; only native-side changes (installed plugins, Android manifest entries, the launcher icon) need an actual rebuild in Android Studio.

The one piece of native-only complexity: Google refuses to render its sign-in page inside any embedded WebView, including Capacitor's, as an anti-phishing measure. So inside the Capacitor build specifically, starting Google sign-in opens the OAuth flow in a real Chrome Custom Tab instead of the app's own WebView, and getting back into the app afterward relies on a verified Android App Link — the app declares ownership of `grocery.yeahvibe.com` via a signed `.well-known/assetlinks.json` file published on that domain, which is what lets Android hand the OAuth redirect back to the app instead of leaving it open in the browser. This is now confirmed working end-to-end on both a debug build and a signed release build.

**Play Store submission is underway.** A Play Console app exists under package `com.yeahvibe.shoptools.app`, with Play App Signing accepted (Google holds and re-signs with its own key before distributing to real installs, on top of the debug and upload-key certificates already covered by `assetlinks.json`). A signed release build has been uploaded to an Internal testing release. What's left before Closed testing can open to real testers: on-device screenshots, the content-rating questionnaire, target-audience and Data Safety declarations, and the store listing copy itself — all account-holder steps rather than anything further to build in the app.

## Appendix H: Sync, in detail

Sync is opt-in and off by default — nothing leaves the device until you sign in. Sign-in uses Google OAuth via a real top-level redirect (or, inside the native Capacitor build, the Chrome Custom Tab flow described in Appendix G) rather than an embedded sign-in button, which holds up more reliably across browsers that restrict third-party cookies. Storage is Back4App.

Once signed in, a device backs itself up automatically a short while after any change, and checks for newer data from other devices on its own each time the app is opened. Manual **Back up now** / **Check now** buttons exist in Settings for when you want either to happen immediately rather than waiting on the automatic timing.

The one moment sync still explicitly asks rather than acting silently: a backup first checks whether something newer has already been saved elsewhere since this device last synced, and if so, offers to load that instead — or, if you're sure, to overwrite it — rather than blindly clobbering whatever's already there. This is a single backup per account, not a true real-time multi-device merge: for the common case of using ShopTools on one device at a time with occasional switching, that trade-off keeps the whole thing simpler than building real conflict resolution for what's meant to be a personal tool.

By signing in, your email address and app data are stored via Google and Back4App to make this work — covered in full in the app's own privacy policy, linked from Settings.
