// 파일이름 : 006_fs(file_system)\app.js

// 공식문서 링크  : https://nodejs.org/dist/latest-v16.x/docs/api/fs.html
const fs = require('fs');

// rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1. 파일 이름 변경하기
// let 변수 = '서유림'; // 사용자 이름
// let 날짜 = new Date();
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//   console.log(err);
// });

// 2. 파일 읽기
fs.readFile('./test.txt', 'utf8', (err, data) => {
  console.log(err);
  console.log(data);
});

// 3
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 4. 파일 안에 내용 작성하기
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err);
// });

// 5
// fs.appendFile('./test2.txt', '\nhello world 3', (err)=>{
//     console.log(err);
// });

// 6. 파일 복사하기
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err);
// });

// 7. 폴더 생성하기
// fs.mkdir('./yoyo', (err) => {
//   console.log(err);
// });
