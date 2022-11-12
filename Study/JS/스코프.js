// 함수 : 코드의 명세, 코드 덩어리를 하나의 이름으로 저장해둔 것

// 스코프 : 함수의 유효범위
// 전역 스코프, 함수 스코프, 블록 스코프

// 1. 전역 스코프
// let val = 1;

// console.log(val);

// function test() {
//   // 함수 스코프
//   let val2 = 2;
// }

// console.log(val2);
// console.log(test());

// 2. 함수 스코프
// 함수 안에 정의된 변수는 외부에서는 접근할 수 없다.
// 함수 안에서 정의된 변수는 함수 안에서는 어디든 접근이 가능하다.
// 스코프체이닝 :실행중인 컨텍스트 안에서 변수의 유효범위가 있다는 것
const myFunc = function () {
  let a = 1;
  let b = 2;

  const myFunc2 = function () {
    let b = 5;
    let c = 6;

    a = a + b + c;
    console.log(a);
  };

  myFunc2();
};

myFunc();
