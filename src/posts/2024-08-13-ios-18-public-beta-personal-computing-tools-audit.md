---
title: iOS 18 Public Beta — Personal Computing Tools Audit
date: 2024-08-13
tags: 
    - long
excerpt: Can I get away with using Apple's stock apps for my personal productivity stack?
layout: layouts/post-standard.html
redirect_from: /ios-18-public-beta-personal-computing-tools-audit/
---
![Personal productivity stack](/assets/images/ios18pb1.png)
*Ah, this time of year again.*

Public betas are out for Apple’s operating systems and I feel the magnetic pull of stock apps once more. Are the updates enough to make me switch from third party apps *this time*? Can I replace Things with Reminders? Fantastical with Calendar? Stop paying for 1Password subscription and use Passwords instead?

Time to find out!

I typically go through this *yearly productivity-stack audit* in private, in my own journal and just for my own reference. But there must be value in doing it in public, right? For anyone with similar use-cases to mine, anyone setting up their own productivity system now and considering what solutions to use, this write up can be helpful. Especially when most of third-party apps these days come with a hefty subscription (or a relatively high upfront one-time purchase, like Things).

![Considering making changes](/assets/images/ios18pb2.jpg)
*Been down this road before...*

I’ll go through this app by app, describing my use-case and context for each, what I’ve been using so far, any pain points, and what features I consider critical.

Some general caveats that are important: this is for my *personal computing* needs only, not anything work-related. This means personal reminders and appointments, chores, family stuff, hobbies, occasional travel, etc. In this world, the biggest “projects” to manage are trip planning or apartment move. I’m running errands, not a multi-billion corporation.

My primary *personal computing* devices are my iPad and my iPhone. I also have an Intel iMac and a Windows (gaming) laptop, but both of these are secondary and rarely used (for productivity). Cross-platform is nice-to-have but not essential.

With all that out of the way, let’s dive in!

## To-Dos

A to-do app is core to my system. I’d be lost without it — confused, unreliable, anxious, unorganized. **I find my life gets easier when I write things down.** So I *live* in my to-do app.

**It is *mission-critical*, but the mission itself is simple:** help me remember when to pay rent, when to feed the cat, when to book hotels for the trip, when to schedule my annual medical check-up, and things like that.

*— But Chris —* you might say *— do you really need an app for reminding you about your morning routine or feeding the cat? Aren’t those things you just simply remember?*

Yes, yes I *do* need it. I don’t want even simple, mundane stuff to rattle in my head. I’d rather swap them to an app. It’s just how I’m wired. I need a to-do app to manage my time and most importantly — to keep my anxiety in check.

And it doesn’t need to be complicated.

**OmniFocus** would be overkill for my situation. **Things** is nice and my default I return to every time. Been using it for years with good track record. But I sometimes miss being able to add attachments, completing repeat to-dos ahead of time (what a concept!), location-based reminders, or more seamless integration with the operating system (“Hey Siri, *in Things* remind me to…” is somehow so much more clunky than just “Hey Siri, remind me to…”)

So I’m giving **Reminders** another try. Aaaand I’m immediately confronted with its big drawbacks.

My big pain point with Reminders is how it handles sub-tasks. (I have SO MANY to-dos with subtasks!) iOS 18 beta has improved it, but only slightly — by surfacing a link to the subtasks in smart lists like Today or Scheduled. But you still can’t access/complete/edit subtasks from there. It’s just a link that directs you to the “parent” list of that to-do. It’s a minimal upgrade, if any.

![Subtasks in smart lists in iOS 18 Reminders - not much of an improvement](/assets/images/ios18pb3.png)
*Subtasks in smart lists in iOS 18 Reminders - not much of an improvement*

But that’s not even the worst thing about subtasks in Reminders. Let me tell you about repeat reminders!

In Things, it’s extremely easy to handle. You set up a repeat task (for example: *repeat daily*), add checklist items (subtasks) underneath and you’re done.  
On day *n* the repeat task pops up. You check off the checklist items and complete the top-level task. Then on day *n+1* it appears again, same format, same checklist and all. Works the same way with repeat *projects* and tasks attached to them.

Now in Reminders — you can’t do any of that. If you set up your reminder + subtasks like above on day *n*, then when the day *n+1* comes, the subtasks won’t be there anymore! They don’t “remember” they were attached to the repeat task in the first place! Whatever subtask you complete on day *n* will be lost on day *n+1* and later. That’s insane!

Thankfully, where Reminders can’t, **Shortcuts** can. There is a workaround — and I have set up automations to add repeat reminders along with their subtasks to my lists every day (or every repeat interval). It’s not ideal, but it works.

Another area where Shortcuts fill the gap of missing features is in replicating “mail to Things”. Things offers you an email address that you can forward messages to for the app to convert them into tasks in your inbox.

![Automating Reminders in Shortcuts](/assets/images/ios18pb4.png)
*Automating Reminders in Shortcuts*

Reminders doesn’t have “mail to Reminders”. But you can set up a Shortcut automation to add a Reminder when an email meeting specific conditions arrives. It’s even more powerful than an email rule. Above is an example of mailing my internet bill to **Reminders**, with the shortcut also pulling the amount due into the notes field of the task. And then sorting it into the appropriate list (while in Things, all tasks from email land in the inbox). Pretty neat!

I’ve migrated my to-dos from Things to Reminders with the release of the first iOS 18 public beta — and so far, so good. Workarounds work + I get all the benefits of Apple’s ecosystem integration.

It might stick this time!

## Calendar

Speaking of ecosystem integration, Reminders now show up in the **Calendar** app!

I’ve had that in Fantastical before — haven’t used it much (primarily because all my tasks were in Things) — but hey, I’ll take it.

The only remaining need I have for **Fantastical** now is for a Shortcut that I have for creating an event or reminder from natural language input. But with Apple Intelligence (should it become available outside of US) and even easier access to Type to Siri (unavailable yet, as of this writing) that comes with that, I may not even need that Shortcut any longer.

And even now, **Spotlight** already allows for *kind of* a natural language input for creating calendar events.

![Natural language event creation in iOS's default Calendar app](/assets/images/ios18pb5.png)
*Natural language event creation in iOS's default Calendar app*

Whenever I can streamline my process and remove a redundant app from my *productivity stack*, that’s a win for me. Even better if that app required a subscription (and Fantastical is not cheap!)

Yup, Fantastical is on its way out.

## Notes

I feel like my note-taking journey has been the longest. From the Evernote account set up in early 2011, through various third-party solutions like Bear, Simplenote, DEVONThink, OneNote (still using it for work), and Obsidian. But eventually, I always gravitate back to Apple notes. Yes, [the meme is real](https://madmaddox.medium.com/this-meme-perfectly-illustrates-the-road-to-mastery-c97314ff6ad2?ref=metagame.hk).

My use-cases have changed over time too — and app switching dance followed.

- **Evernote** initially served my as a place to keep stuff “for reference”. Going paperless, with all important documents and instruction manuals scanned into Evernote. Eventually, I conceded that the best place for files is in… the file system (a groundbreaking discovery!) It also helped me manage work projects at the time.
- Tried **DEVONThink**, primarily for the same purpose. Arrived at the same conclusion.
- **Bear** was an experiment with using tags instead of folders and keeping the same note in multiple places for easier discovery. It did not stick. But it helped me learn that I prefer folders.
- **OneNote** remains great for hand-written notes, drawing decision-trees, and quick sketches. I love the infinite canvas it provides. For everything else, though, it’s slow and bloated and no-thank-you.
- I tried giving **Obsidian** a chance. Had the whole set-up: with daily notes, Zettelkasten-style PKM, backlinking, atomic notes, graphs, multiple plugins, and all that stuff. But using it primarily on iOS and iPadOS it felt incredibly janky and brittle. And SO SLOW to open! Gave up after a few months.

I’ve been back to **Apple Notes** for a while. And it serves me well! I use it for many things:

- Stuff I need to remember, like the door code to my apartment building. Doesn’t mean I always refer to notes whenever I’m going back home, but it’s good to have it there just in case my mind goes blank one day for some reason.
- Information I know I will need later at some point, like the cost breakdown and summary of our recent apartment move (in case we consider moving again).
- My coffee library.
- [Book notes and highlights](/posts/2023-05-23-my-new-way-of-taking-book-notes/).
- Trip itineraries that I share with my wife.
- Quick, fleeting notes.
- Heavily-tagged archive of places of interest (restaurants, cafes) that I refer to when we’re looking for ideas where to go for dinner (I can search #restaurants tag in combination with specific district and rating tags).

![Coffee Library in Apple Notes](/assets/images/ios18pb6.png)
*Coffee Library in Apple Notes*

And it’s all working well. It’s easily accessible. **Quick Note** feature allows for quick entry from anywhere in the operating system — easy, seamless way capture thoughts is important (and that’s where Obsidian fails hardest)!

So, yeah, no changes here — sticking with **Notes**.

## Journaling

**Day One** user since… not *day one* but close. Of all apps and use-cases I mention in this article, the switch to Apple’s own app feels the most difficult in case of journaling.

Day One’s killer feature, for me, is the “On This Day” view — with easy access to journal entries from the same day across the years. Apple’s **Journal** is missing that and it’s a huge omission!

Part of the benefit of journaling is seeing my own growth over time. Remembering the person that I used to be. And being able to quickly go back to your own memories (just earlier today I was listening to a new album by an artist I like — and I was wondering when was the last time I saw them live — it was easy to find in Day One).

**If I don’t have an easy way to reflect on what I have written, then journaling loses the point to me.**

Apple’s app’s flaws don’t end there, unfortunately. Where is the iPad and Mac app? I don’t even dare to ask for a web app…

![Reflecting on moods and emotions in Apple Journal](/assets/images/ios18pb7.jpg)
*Reflecting on moods and emotions in Apple Journal*

That said, I do love the journaling suggestions. And assigning “moods” to your own entries (available in iOS 18) adds a whole new dimension to my diary, which — so far — I have found very useful.

All in all, I give it 50% chance of replacing Day One for me. That’s the lowest rating of all apps mentioned in this article.

## Mail

I don’t receive a lot of email. Not much fan mail as a result of writing this blog, I can tell you that for sure. It’s mostly booking confirmations, purchase receipts, and newsletters. Don’t need anything more fancy than the regular **Mail** app for that. **Spark** or **Mimestream** are all overkill.

That said, I am looking forward to the automatic email categorization, coming sometime later in iOS 18.x.

## Passwords

Password manager is definitely *mission-critical*. I have almost 400 passwords saved at this point. Each one of them unique and “strong” by Apple’s or 1Password’s definition. You need an app for managing all this data. And most importantly, an app you can trust. (For instance, [you can’t trust LastPass](https://www.theverge.com/2024/5/1/24146205/lastpass-independent-company-security-breaches?ref=metagame.hk).)

So I’ve been using **1Password** for almost a decade. It’s been my only password manager for most of that time. Also for most of that time, I’ve been paying the $35-ish yearly subscription.

![1Password first purchase](/assets/images/ios18pb8.png)
*1Password first purchase*

1Password is handy as a multi-platform solution. I can use it within my Apple device ecosystem, naturally. But I can also use it on my Windows laptop, and even my work laptop as a standalone (i.e., not requiring a separate app —IT would never let me install that) browser extension. It fulfills all my needs.

Apple’s own password manager is competent, but it doesn’t tick all the boxes for me. Two key missing features, for me, are:

1. Requiring iCloud app to work with Windows browsers. Won’t happen on my work laptop. But maybe that’s a good reminder that I shouldn’t be doing things that require my personal passwords on my work laptop?
2. No support for attachments. I like to have the ability to securely store copies of important documents in my password manager. Somehow, keeping them in a locked note in Apple Notes does not feel as secure.

Both are inconvenient but I can make 1. a non-issue with a mindset/behavior change. And 2., I guess I can live with.

## Summary & Savings

All in all, Apple’s productivity stack is competent! Definitely good enough for *personal computing* needs. Of course, I’ll miss some niceties of third-party apps (Things’s smooth UI, Fantastical’s layout on desktop, 1Password’s seamless cross-platform support, and a lot of things from Day One), and it kind of sucks that Apple updates its apps only once a year — but I want to challenge myself to live in Apple’s stock apps for a longer while.

I’m giving myself time until the end of the year. Will reassess my choices then — but until that time I’ll try to stick with Apple’s native apps and don’t switch back.

One last thing. So far I’ve discussed how specific apps fit my *workflow*. But how about fitting my *budget*? Let’s take a look at potential savings.

Had I been starting from scratch today, those savings would’ve been substantial. Here’s the breakdown (App Store prices in Hong Kong as of 11 August 2024):

- **Things**, one time cost separately for each platform (Mac, iOS, iPadOs): HK$624 total
- **Fantastical**, yearly subscription: HK$488
- **Evernote**, yearly subscription: HK$458
- **Spark**, yearly subscription: HK$473
- **Day One**, yearly subscription: HK$273
- **1Password**, yearly subscription: HK$278

That’s HK$1,970 (US$252) in yearly subscriptions plus HK$624 (US$80) one-time purchase. (Makes you feel the subscription fatigue, doesn’t it?) That’s the full cost if you started from scratch and wanted to go all-in on best-in-class third-party apps with all their features unlocked (and hadn’t been grandfathered into some cheaper, legacy plan). That’s a lot of money!

For someone who’s either switching from Android or just starting to set up their own productivity app stack, in my opinion, there is no need for jumping right into third-party, paid apps. You can make do with the stock defaults — and the compromises, if any, are less and less painful every year.

Hope this was helpful! If you enjoyed this article, please consider subscribing to the free newsletter!