const myFunc = function () {
  // a == 클로저 공간
  let a = 1;
  let b = 2;

  // myFunc2 == 클로저 함수
  const myFunc2 = function () {
    let b = 5;
    let c = 6;

    a = a + b + c;
    console.log(a);
  };

  return myFunc2;
};

const innerFunc = myFunc();

innerFunc();

// 자바스크립트의 메모리는 참조 카운팅을 하는데, 필요한 값이 외부 함수에 있으면 가비지컬렉터가 외부 함수에 있는 해당 프로퍼티를 지우지 않고 남긴다.
