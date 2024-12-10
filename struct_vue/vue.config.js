const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    // 自定义路径
    resolve: {
      alias: {
        "utils": "@/utils"
      },
      extensions: ['vue', "jsx", "tsx", "ts", "js", "json"]
    },

    // 自定义webpack 服务器设置
    devServer: {
      open: true,
      hot: true,
      compress: true,
      port: 8080,
    },

    // 配置使用插件
    plugins: [],

    // 配置自定义解析模块
    module: {
      rules: [

      ]
    },

    // output: [],
  },
})
