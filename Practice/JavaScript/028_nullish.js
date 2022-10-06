// https://ko.javascript.info/nullish-coalescing-operator

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// * null이나 undefined가 아닌 첫 번째 피연산자
console.log(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

///

let a = 10;
let b = 20;
let c = 30;

let d = a ?? b ?? c;
console.log(d); // 10

///

let a1 = null;
let b1 = 20;
let c1 = null;

let d1 = a1 ?? b1 ?? c1;
console.log(d1); // 20

///

let a2;
let b2;
let c2;

let d2 = a2 ?? b2 ?? c2;
console.log(d2); // undefined

// * 카카오톡 예시

let 실명;
let 별명 = "licat";
let 기본값 = "어피치";
let 채팅창아이디 = 실명 ?? 별명 ?? 기본값;

console.log(채팅창아이디); // licat

// ! 차이점
// ! || : 0, null, undefined
// ! ?? : null, undefined

// * falsy하다 : 0, null, undefined, "", NaN
// * nullish하다 : null, undefined

let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
