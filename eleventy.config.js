/*
import pluginRss from "@11ty/eleventy-plugin-rss";

module.exports = function(eleventyConfig) {
  // Add the RSS plugin
  eleventyConfig.addPlugin(pluginRss);

  // Add passthrough copy for static files
  eleventyConfig.addPassthroughCopy("src/style.css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["html", "liquid", "njk", "md"],
  };
};

*/

import  { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginFilters from "./_config/filters.js";
import relativeLinks from "./_config/relative-links.js";


export default async function (eleventyConfig) {
	// eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy("src/style.css");
  // eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("CNAME");
	// Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
	
	
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// Output formats for each image.
		formats: ["avif", "webp", "auto"],
	//	urlPath: "/assets/images/", 
		widths: ["auto"],

		failOnError: false,
		htmlOptions: {
			imgAttributes: {
				// e.g. <img loading decoding> assigned on the HTML tag will override these values.
				loading: "lazy",
				decoding: "async",
			}
		},

		sharpOptions: {
			animated: true,
		},
	}); 

	eleventyConfig.addPlugin(pluginFilters);
	
	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // First feed 
		outputPath: "/feed/feed.xml",
		templateData: {
		  eleventyNavigation: {
			key: "Feed",
			order: 4,
		  },
		},
		collection: {
		  name: "posts",
		  limit: 10,
		},
		metadata: {
		  language: "en",
		  title: "Metagame | Full Feed",
		  subtitle: "Blog about photography, tech, gaming, coffee, travel, and personal productivity.",
		  base: "https://metagame.hk/",
		  author: {
			name: "Chris Sobolewski",
		  },
		},
	  });
	  
	  // Add a second feed
	  eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // Second feed (RSS)
		outputPath: "/feed/long.xml",
		templateData: {
		  eleventyNavigation: {
			key: "RSS Feed",
			order: 5,
		  },
		},
		collection: {
		  name: "long", // Use a different collection for this feed
		  limit: 5,
		},
		metadata: {
		  language: "en",
		  title: "Metagame | Articles",
		  subtitle: "Blog about photography, tech, gaming, coffee, travel, and personal productivity.",
		  base: "https://metagame.hk/",
		  author: {
			name: "Chris Sobolewski",
		  },
		},
	  });
	 // Add a third feed 
eleventyConfig.addPlugin(feedPlugin, {
	type: "rss", // Third feed (RSS)
	outputPath: "/feed/short.xml", // Output path for the "short" feed
	templateData: {
	  eleventyNavigation: {
		key: "Short Articles Feed",
		order: 6,
	  },
	},
	collection: {
	  name: "short", // Use the "short" collection for this feed
	  limit: 10, // Limit the number of items in the feed
	},
	metadata: {
	  language: "en",
		  title: "Metagame | Short Updates",
		  subtitle: "Blog about photography, tech, gaming, coffee, travel, and personal productivity.",
		  base: "https://metagame.hk/",
		  author: {
			name: "Chris Sobolewski",
	  },
	},
  });
  eleventyConfig.addPlugin(relativeLinks);
	
  return {
	dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["html", "liquid", "njk", "md"],
  };
};