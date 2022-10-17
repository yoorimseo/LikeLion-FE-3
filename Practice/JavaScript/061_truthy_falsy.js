console.log("0" == 0); // true
console.log("0" === 0); // false

console.log(1 == true); // true
console.log(1 === true); // false

console.log("0" == false); // true
console.log("0" === false); // false

console.log("true" == true); // false
console.log("true" === true); // false
// * 1) json에서 값을 가져올 때, true를 문자열로 가져와서 error가 난 적이 있다.
// * 2) json에서 값을 가져올 때, true가 T겯fh ehldj dlTdjtj error가 난 적이 있다.

console.log("----------------------------");

// ! 주의
console.log(0 == ""); // 주의 : true
console.log(0 === ""); // 주의 : false

console.log(false == ""); // 주의 : true
console.log(false === ""); // 주의 : false

console.log(false == null); // 주의 : alse
console.log(false === null); // 주의 : false

console.log(false == undefined); // 주의 : false
console.log(false === undefined); // 주의 : false

// * 아래의 내용이 많아 별도 파일로 분리하여 설명할 예정이다.
console.log(NaN == NaN); // 주의 : false
console.log(NaN === NaN); // 주의 : false

console.log("----------------------------");

function truthyAndFalsy(value) {
    return !!value;
}

// ! 주의
console.log(truthyAndFalsy([])); // 주의 : true
console.log(truthyAndFalsy({})); // 주의 : true
console.log(truthyAndFalsy("")); // 주의 : false
console.log(truthyAndFalsy(null)); // 주의 : false
console.log(truthyAndFalsy(undefined)); // 주의 : false
console.log(truthyAndFalsy(NaN)); // 주의 : false
console.log(truthyAndFalsy(Infinity)); // 주의 : true

console.log("----------------------------");

console.log(truthyAndFalsy(-100)); // true
console.log(truthyAndFalsy("hello")); // true
// ! 숫자로 판단될 수 있는 것을 제외하고, 자료형이 다른 것을 연산하려고 할 때 NaN이 나온다
console.log("hello world" - 100); // NaN
console.log("hello world" / 100); // NaN
console.log("hello world" * 100); // NaN
console.log("2" * 10); // 20

console.log("----------------------------");

// * 드모르간의 법칙 : 생략할 수 있는 것들을 생략하기 위해 사용한다.
console.log("드모르간의 법칙");

// * not (A or B) == (not A) and (not B)
// * not (A and B) == (not A) or (not B)

// * !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// * !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i);
    }
}

console.log("----------------------------");

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) {
        console.log(i);
    }
}

// * or : ||
// * and : &&

const x = 0;
const y = 1;

console.log(x || y) === (!x && !y);
console.log(x && y) === (!x || !y);

console.log("----------------------------");

// ? 혼돈의 카오스

console.log([] == ![]); // true
console.log([] == 0);

// ! 1. 빈 Array는 따로 비교구문이 나왔을 때, 강제로 숫자로 형변환이 된다.
console.log(0 == ![]);

// ! 2. ![]는 false다.
console.log(0 == false);

// ! 3. false는 0으로 평가된다.
console.log(0 == 0);
