---
date: 2025-05-20 19:58:47
tags: long
layout: layouts/post-standard.html
title: Here's What Helped Me Build This Blog With 11ty/Eleventy and GitHub Pages
excerpt: Beginner problems and solutions. For those who come after.
---
I am finally happy with my website set-up. It’s not much — just some HTML, CSS, and a few templates — but it’s mine, I can configure it however I want, and I own it.

It has been a journey, not gonna lie. Not everything worked out of the box, not for a website like this.

And there are some things that official 11ty documentation doesn’t tell you. Let me save you the frustration and AI tokens. In this post I will go through the roadblocks I encountered — and how I've cleared them.

## First, principles
Let’s begin with how I wanted to design Metagame. The choices here strongly influenced the solutions I used — and problems I faced. 

**[File over app](https://stephango.com/file-over-app)**. This website is just a bunch of files in folders. There is no platform, no store-bought template with inscrutable code, no Squarespace-like WYSIWYG. There is no lock-in. I’m not totally independent (I still need to host this page somewhere), but it's as close as I could reasonably get it.

**Fast & lightweight**. It’s all static HTML, which should make it load quickly. There is no CMS and no database on someone’s platform that I need to query every time I want to navigate to a blog post.

**[POSSE](https://www.citationneeded.news/posse/)**. My content and my updates — they all start on my website and *then* get syndicated elsewhere. For me, Metagame is the center of my online presence. Everything I post starts here.

**Simple code**. I'm neither a programmer nor an app developer. I can work with basic code but don't talk to me about complex frameworks. Also, I don't mind vibe coding — as long as it returns something I can remotely understand.

**Privacy is not an afterthought**. You won’t see Google Analytics here. In the future, I may consider something like [Plausible](https://plausible.io/for-bloggers-creators). 

**Ability to develop the website locally and offline**. This is what primarily led me to 11ty.

I also wanted to **escape US big tech**, but unfortunately both VS Code and GitHub are owned by Microsoft.

And finally, a super-important disclaimer: even though I've developed a few websites before, I still consider myself a total beginner in this. I have not been keeping up with the current trends in web design, like at all. So please treat this as a record of a beginner stumbling his way through to solutions that are likely obvious (and/or even suboptimal) to veterans. 

Anyway, if your a beginner like myself, there's a good chance you will find something useful here!

## Problems and solutions
### Permalink prefix for relative links
In the source code of my blog posts, all links are relative. Instead of pointing directly to a full URL (for example: <code>https://metagame.hk/posts/2025-05-11-a-different-relationship-with-tech/</code>), they link to a relative path (like so: <code>/posts/2025-05-11-a-different-relationship-with-tech/</code>).

This causes some issues.

When I build locally, all is fine. But the second I deploy to GitHub Pages, stuff breaks.

I figured it was this: before custom domain, the page is hosted at the following address: <code>https://my_account_name.github.io/metagame/</code>
But the relative link <code>/posts/2025-05-11-a-different-relationship-with-tech/</code> tries to resolve to <code>https://my_account_name.github.io/posts/2025-05-11-a-different-relationship-with-tech/</code> and not the correct one <code>https://my_account_name.github.io/metagame/posts/2025-05-11-a-different-relationship-with-tech/</code>

Apparently, here is a *native* solution for this: [--pathprefix](https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix). [This is how you're supposed to use it](https://www.11ty.dev/docs/deployment/#mini-tutorials) when building on GitHub Pages. But for some reason it did not work for me. In the build, all links had multiple <code>/metagame/metagame/metagame/…</code> folders inside them. For some reason.

But after some googling, I found [this script for relative links](https://github.com/11ty/eleventy/discussions/2516#discussioncomment-11999750). It worked!

### Setting up custom domain
I manage my domain DNS record on Cloudflare. When setting up the integration between GitHub Pages and Cloudflare, I wish two things were more obvious:

1. That you have to add and verify your domain first in your general account setting (and not the repository settings).
2. While the [official documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) is helpful, I just wish someone showed me a screenshot of what a correct configuration looks like. So here it is:

![DNS set up in Cloudflare](/assets/images/dns.png)

### Missing GitHub Pages Deploy Keys
The [mini-tutorial in 11ty docs](https://www.11ty.dev/docs/deployment/#mini-tutorials) had one crucial piece missing — it doesn't tell you that you need to generate GitHub security keys and where to put them. This gave me a lot of trouble as I did not know what was wrong. 

Eventually, [this guide from Lėa Tortay](https://lea-tortay.com/articles/github-pages-eleventy/) did mention keys and got me started. Phew!

### Eleventy-image causing super-long build times
I wanted to do images right this time. Serve optimized versions, save bandwidth, make the website faster. Enter [eleventy-image](https://www.11ty.dev/docs/plugins/image/) plugin. It would automatically optimize images while building the website. Just what I needed.

There was one hiccup, though. It was processing every image from scratch on every GitHub Pages build. That led to 5+ minute deploy times every time, even for such a small site like mine. Unacceptable. 

Here's what no-one told me: you have to point the eleventy-image output directory to .cache.

```
imageOptions.outputDir = ".cache/@11ty/img/";
```

Of course! That makes sense.
 
### Redirects
My new blog has a different folder structure than what I had on Ghost (here posts are stored in ,<code>/posts/</code>  folder; in Ghost they were all in the <code>root</code> folder) — meaning permalinks to my blog posts would  — an inbound links would break. Fortunately, a redirect template can take care of that. Leave no broken link behind!

If you have the same problem, just [follow these instructions](https://brianm.me/posts/eleventy-redirect-from/) and you should be good to go.

---

All in all, as far as I can remember, these were the biggest head-scratchers for me. Hope this saves you some time!

## Other helpful resources
The below have been hugely helpful in learning how all of this works:
- [Official Get Started Guide](https://www.11ty.dev/docs/)
- [6 Minutes to Build a Blog from Scratch with Eleventy](https://www.youtube.com/watch?v=kzf9A9tkkl4)
- [Eleventy Crash Course by Jaydan Urwin](https://www.youtube.com/playlist?list=PLtLXFsdHI8JTwScHvB924dY3PNwNJjjuW)
- [How to Make a Damn Website](https://lmnt.me/blog/how-to-make-a-damn-website.html) was a good refresher.
- [Robb Knight’s blog](https://rknight.me/) was an inspiration for using 11ty and many blogging principles.
- [GitHub AI Copilot in VS Code](https://github.com/features/copilot) deserves a shout-out too. Things like the default two-column view on the front page or dark mode in style.css were all vibe-coded with a few prompts. As much of an AI skeptic that I am, I have to admint that this is a great use-case for AI.