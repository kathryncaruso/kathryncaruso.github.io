module.exports = {
  content: ["_site/**/*.html"],
  css: ["_site/**/*.css"],
  safelist: {
    standard: [/data-level/, /data-detail/, /cv-/, /slider/, /scrolled/],
    greedy: [/data-level/, /data-detail/]
  },
  output: "_site/assets/css/"
};
