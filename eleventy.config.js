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

import pluginRss from "@11ty/eleventy-plugin-rss";

export default async function (eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);
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