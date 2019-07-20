
module.exports = {
  presets: ['@vue/app'],
  "plugins": [
      ["component", {
      "libraryName": "mint-ui",
      "style": true
    }
  ]
],
  "ignore":["./src/lib/mui/dist/js/*.js"]
}
