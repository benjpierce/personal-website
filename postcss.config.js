module.exports = ctx => ({
    plugins: [
      require('postcss-import')(ctx.plugin),
      require('postcss-each')(ctx.plugin),
      require('postcss-simple-vars')(ctx.plugin),
      require('postcss-nested')(ctx.plugin),
      require('postcss-math')(ctx.plugin),
      require('postcss-color-function')(ctx.plugin),
      require('postcss-mixins')(ctx.plugin),
      require('postcss-inline-svg')(ctx.plugin),
      require('rucksack-css')(ctx.plugin),
      require('css-mqpacker')(ctx.plugin),
      require('autoprefixer'),
    ],
  })