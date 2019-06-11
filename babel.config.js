module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.symbol',
        'es6.object.assign',
        'es7.array.includes',
        'es6.string.includes'
      ]
    }]
  ]
}