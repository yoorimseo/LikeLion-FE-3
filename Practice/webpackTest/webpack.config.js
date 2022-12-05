const path = require('path');
const webpack = require('webpack');
const childProcess = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('dotenv').config();

module.exports = {
  //   mode: 'development',
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  entry: {
    main: path.resolve('./src/app.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },

  module: {
    rules: [
      // 여기서 로더를 추가할 수 있다.
      // {
      //     // 로더가 처리해야할 파일의 패턴(정규표현식)이다.
      //     // 여기서 \는 .을 정규표현식 문법이 아닌 특수문자로, .js$ 는 .js 로 끝나는 모든 파일을 의미한다.
      //     // 원래 정규표현식에서 .의 의미는 모든 문자나 숫자를 의미한다.
      //     test: /\.js$/,
      //     use: [
      //         // 위와 일치하는 패턴의 파일이 전달될 로더를 설정한다.
      //         path.resolve('./myLoader.js')
      //     ]
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // 여기 추가합니다.
        test: /\.(png|jpg|gif|svg)$/,
        // type: 'asset/inline', // 무조건 문자열 인라인 포맷으로 바꿔준다.
        type: 'asset', // 무조건 문자열 인라인 포맷으로 바꿔준다.
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 1kb가 1024byte 이기 때문에 20kb를 원한다면 1024에 20을 곱합니다.
            // 이미지 스프라이트 기법을 사용하지 않아도, 이미지 최적화를 할 수 있다. 하지만 너무 복잡한 이미지를 base64로 만들게 되면 오히려 코드가 너무 길어서 로딩이 느려질 수 있다.
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      //toLocaleString : 날짜의 문자열 표현을 지역의 언어에 맞는 형식으로 반환한다.
      banner:
        // Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
        `
      Committer : ${childProcess.execSync('git config user.name')}
      Commit Date : ${new Date().toLocaleString()}
  `,
    }),
    new webpack.DefinePlugin({
      //   pw: 123456,

      // 값을 단순히 문자열로 전달하면 값으로 인식하지 못하는 문제가 있다.
      //   dev: JSON.stringify('https://dev.api.com'), // 혹은 "'https://dev.api.com'"
      //   pro: JSON.stringify('https://pro.api.com'),

      dev: JSON.stringify(process.env.DEV_API),
      pro: JSON.stringify(process.env.PRO_API),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // 목표 html 파일의 위치
      // mode: production일 때, 코드가 최적화(minify) 된다.
    }),
    new CleanWebpackPlugin(),
  ],
};
