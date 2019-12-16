const { GenerateSW } = require('workbox-webpack-plugin')

const dev = process.env.NODE_ENV === 'development'

module.exports = {
  publicPath: dev ? '/Ksitigarbhasutra/' : '',

  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
  },

  configureWebpack: {
    plugins: [
      new GenerateSW(dev ? { skipWaiting: true, clientsClaim: true } : {}),
    ],
  },
}
