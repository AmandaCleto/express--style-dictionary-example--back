const StyleDictionary = require('style-dictionary').extend({
    source: ['src/tokens/*.json'],
    platforms: {
      scss: {
        transformGroup: 'scss',
        buildPath: 'src/build/scss/',
        files: [{
          destination: '_variables.scss',
          format: 'scss/variables'
        }]
      }
      // ...
    },
});

module.exports = StyleDictionary;