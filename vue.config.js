module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org/3',
        logLevel: 'debug',
        changeOrigin: true,
        ws: true,
        headers: {
          'Connection': 'keep-alive'
        },
        pathRewrite: {
          '^/api': ''
        },
      },
      '/image': {
        target: 'https://image.tmdb.org/t/p/w500',
        logLevel: 'debug',
        changeOrigin: true,
        ws: true,
        headers: {
          'Connection': 'keep-alive'
        },
        pathRewrite: {
          '^/image': ''
        },
      }
    }
  }
}
