module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("_site/**");
  eleventyConfig.ignores.add("node_modules/**");
  eleventyConfig.ignores.add("MIGRATION_NOTES.md");
  eleventyConfig.ignores.add("src/index.njk");

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("IMG_1256.jpg");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: ".",
      includes: "src/_includes",
      output: "_site"
    },
    templateFormats: ["html", "md", "njk"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
