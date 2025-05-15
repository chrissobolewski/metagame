---
date: 2025-05-12 20:02:47
tags: long
layout: layouts/post-standard.html
title: Resources that helped me build this website with 11ty/eleventy and publish it with GitHub Pages
excerpt: And some lessons learned. Maybe they will help you too!
---
I am finally happy with my website set-up. It’s not much — just some HTML, CSS, and a few templates — but it’s mine, I can configure it however I want, and I own it.

The journey here has been an enjoyable challenge. Learned a lot throughout. Mostly through trial and error. And since this blog is about sharing my experiences, I want to share this one with you. In case you want to go on a similar journey — set up your own web page using 11ty and publish it through GitHub Pages —  anytime soon.

There are some things that official 11ty documentation doesn’t tell you. Let me save you the frustration and AI tokens. This post describes the roadblocks I encountered — and how I cleared them.

## First, principles
Here’s how I wanted to design Metagame. It strongly influenced the solutions I used.

**[File over app](https://stephango.com/file-over-app)**. This website is just a bunch of files in folders. There is no platform, no template with inscrutable code, there is no lock-in. I’m not totally independent (I still need to host this page somewhere), but as close as I could reasonably get.

**Fast & lightweight**. It’s static HTML, which should make it load quickly. There is no CMS, no database on someone’s platform I need to query every time I open a page with my blog post. 

**[POSSE](https://indieweb.org/POSSE)**. My content, my updates — they all start on my website and then get syndicated elsewhere. For me, Metagame is the center of my online presence. Not social media. But my posts will reach social media eventually — so if that’s where *you* are, there’s no problem.

**Low complexity code**. I'm neither a programmer nor an app developer. I can work with simple code but don't talk to me about complex frameworks. Also, I don't mind vibe coding.

**Privacy is not an afterthought**. You won’t see Google Analytics here. In the future, I may consider something like [Plausible](https://plausible.io/for-bloggers-creators). For now, I’ll settle for the numbers Cloudflare is showing me.

I also wanted to **escape US big tech**, but unfortunately both VS Code and GitHub are owned by Microsoft.

## Problems and solutions


 
