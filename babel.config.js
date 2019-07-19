module.exports = {
  presets: [
    '@vue/app',
    ['env',      //添加 babel-preset-env 配置 
      {
        'modules': false
      }
    ]
  ],
  "plugins": [
      [
        "component", 
          {
      "libraryName": "mint-ui",
      "style": true
    }
  ]
]
}
