module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.VUE_APP_PURGECSS === 'true' ? [
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.vue', './public/**/*.html'],
        extractors: [
          {
            extractor: class {
              static extract(content) {
                console.log('purging css...');
                return content.match(/[a-zA-Z0-9-:_/]+/g) || [];
              }
            },
            extensions: ['vue', 'html'],
          },
        ],
      })
    ] : [],
  ]
}