const { defineConfig } = require('@vue/cli-service')
const target = 'http://127.0.0.1:3000'; // proxy 요청을 보낼 서버 주소
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch'); // prefetch 삭제
  },
  devServer: {
    port: 8081,
    proxy: {
      // proxy 요청을 보낼 api 시작 부분
      '^/api': {
        target,
        changeOrigin: true
      },
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
}