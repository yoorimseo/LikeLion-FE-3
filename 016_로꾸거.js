// * 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// * 입력 : 거꾸로
// * 출력 : 로꾸거

// const s = prompt('문장을 입력하세요.');
let s = "거꾸로";

// ! 방법 1)
// let result = [];

// for (let i of s) {
//     result.unshift(i);
// }

// console.log(result.join(""));

// ! 방법 2)
const reverseString = s.split("").reverse().join("");

console.log(reverseString);
