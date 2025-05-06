const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Including style.css in the final build
  eleventyConfig.addPassthroughCopy("src/style.css");

  // Adding RSS feed plugin
  eleventyConfig.addPlugin(pluginRss);

  // Defining the directory structure
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