const VueLoaderPlugin = require('vue-loader/lib/plugin')  // module.exports 랑 한세트
const path = require('path')



// node.js 에서는 module 에서 특정 값을 export 하기 위해서는 아래와 같이
// module.expoerts 에 export 할 값들을 정의한다.
module.exports = {
  mode: 'development', // 상업용은 production
  // 모든 파일들의 시작점
  entry: {
    // __dirname 은 최상위 위치 (Django의 BASE_DIR 과 유사)
    app: path.join(__dirname, 'src', 'main.js')
  },
  // Webpack 은 기본적으로 js 만 변환가능, 따라서 css 나 html 등은 모듈을 통해서
  // Webpack이 이해할 수 있도록 변환이 필요하다. 변환내용을 작성하는 곳
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader', // vue로 끝나는 모든 파일들을 vue-loader 로 변환해라
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'], // vue로 끝나는 모든 파일들을 vue-loader 로 변환해라
      }
    ]
  },
  // Webpack 을 통해서 bundle 된 결과를 추가 처리하는 부분
  plugins: [
    new VueLoaderPlugin(),
  ],
  // Webpack 을 통해서 bundle 된 결과물이 정의되는 곳
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'), 
  },
}