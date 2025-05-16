---
date: 2025-05-12 20:02:47
tags: long
layout: layouts/post-standard.html
title: Resources that helped me build this website with 11ty/eleventy and publish it with GitHub Pages
excerpt: For those who come after.
---
I am finally happy with my website set-up. It’s not much — just some HTML, CSS, and a few templates — but it’s mine, I can configure it however I want, and I own it.

The journey to this point has been an enjoyable challenge. Learned a lot -- mostly through trial and error. And since this blog is about sharing my experiences, I want to share some of my learnings about setting up an independent personal website in 2025. 

There are some things that official 11ty documentation doesn’t tell you. Let me save you the frustration and AI tokens. In this post I will go through the roadblocks I encountered — and how I cleared them.

## First, principles
Let’s begin with how I wanted to design Metagame. It strongly influenced the solutions I used -- and it thrust me into peculiar problems.

**[File over app](https://stephango.com/file-over-app)**. This website is just a bunch of files in folders. There is no platform, no store-bought template with inscrutable code, there is no lock-in. I’m not totally independent (I still need to host this page somewhere), but as close as I could reasonably get.

**Fast & lightweight**. It’s static HTML, which should make it load quickly. There is no CMS, no database on someone’s platform that I need to query every time I want to navigate to a blog post.

**[POSSE](https://indieweb.org/POSSE)**. My content, my updates — they all start on my website and *then* get syndicated elsewhere. For me, Metagame is the center of my online presence. Not social media. But my posts will reach them eventually.

**Low complexity code**. I'm neither a programmer nor an app developer. I can work with simple code but don't talk to me about complex frameworks. Also, I don't mind vibe coding --- as long as it returns something I can understand.

**Privacy is not an afterthought**. You won’t see Google Analytics here. In the future, I may consider something like [Plausible](https://plausible.io/for-bloggers-creators). For now, I’ll settle for the numbers Cloudflare is showing me.

**Ability to develop the website locally and offline**. This is what primarily led me to 11ty.

I also wanted to **escape US big tech**, but unfortunately both VS Code and GitHub are owned by Microsoft.

And finally, a super-important disclaimer: even though I've developed a few websites before, I still consider myself a total beginner in this. I have not been keeping up with the current trends in web design at all. So please treat this as a record of a beginner stumbling his way through to solutions that are likely obvious to veterans. 

Anyway, if your a beginner like myself, there's a good chance you will find something useful here!

## Problems and solutions
### Permalink prefix
The official solution didn't work.

Had to use this.

### Setting up custom domain
I manage my domain DNS record on Cloudflare. When setting up the integration between GitHub Pages and Cloudflare, I wish two things were more obvious:

1. That you have to add and verify your domain first in your general account setting (and not the repository settings).
2. While the official documentation is helpful, I just wish someone showed me a screenshot of what a correct configuration looks like. So here it is:

### Publishing on GitHub Pages
Where are the codes?

### Eleventy-image causing super long build times
Turns out the plugin was processing every image from scratch on every GitHub Pages build. That led to 5+ minute deploy times, even for such a small site like mine.

Here's what no-one told me: you have to point the eleventy-image output directory to .cache. I did it like so:

```json
if(process.env.ELEVENTY_RUN_MODE === "build") {
	imageOptions.outputDir = ".cache/@11ty/img/";
	imageOptions.urlPath = "/img/built/";
	eleventyConfig.on("eleventy.after", () => {
		fs.cpSync(".cache/@11ty/img/", "_site/img/built/", { recursive: true });
	});
}
```

 
### Redirects
My new website has a different folder structure than what I had on Ghost -- meaning permalinks to my blog posts would change. Fortunately, a redirect template can take care of that. Leave no broken link behind.