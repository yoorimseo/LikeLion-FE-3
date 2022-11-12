// class에서 private을 사용해서 접근했던 방법이, 예전 문법에서는 클로저로 만들었다!

function makeClosure() {
  // 클로저 공간, 비공개 프로퍼티가 된다.
  const val1 = 100;
  const val2 = 200;
  const val3 = function () {
    console.log('hello');
  };

  return {
    getVal1: function () {
      return val1;
    },
    getVal2: function () {
      return val2;
    },
    getVal3: function () {
      return val3;
    },
  };
}

let result = makeClosure();
console.log(result.getVal1());
console.log(result.getVal2());
console.log(result.getVal3());
