module.exports = {
  content: ["_site/**/*.html"],
  css: ["_site/**/*.css"],
  safelist: {
    standard: [/data-level/, /data-detail/, /cv-/, /slider/, /scrolled/, /data-theme/],
    greedy: [/data-level/, /data-detail/, /data-theme/],
  },
  output: "_site/assets/css/",
};
