// * 1. 익명 즉시 실행 함수
// * 메모리의 효율을 극대화 시킬 수 있지만, 이름이 없으므로 재사용 할 수 없다.
(function () {
    let a = 1;
    let b = 2;
    return a + b;
})();

// * 2. 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
})();

// foo(); // ReferenceError: foo is not defined
// * 어차피 실행하지 못해서 의미가 없다.
// * 메모리를 효율적으로 관리하기 위헤 바로 실행해야 하는 것들을 즉시 실행 함수로 관리한다.

///////////////////////////////////

function 함수() {
    let x1 = 100;
    let x2 = 100;
    let x3 = 100;
    let x4 = 100;
    let x5 = 100;
    let x6 = 100;
    let x7 = 100;
    // ...
}

함수();

///////////////////////////////////

// * 3. 함수 연습문제
// * 중간고사 점수의 평균을 구하는 코드를 작성해주세요.
let data = [
    {
        반: 1,
        번: 1,
        이름: "호준",
        중간고사점수: 55,
    },
    {
        반: 1,
        번: 2,
        이름: "길동",
        중간고사점수: 60,
    },
    {
        반: 1,
        번: 3,
        이름: "영희",
        중간고사점수: 30,
    },
    {
        반: 1,
        번: 4,
        이름: "철수",
        중간고사점수: 20,
    },
    {
        반: 1,
        번: 5,
        이름: "규리",
        중간고사점수: 100,
    },
];

function 평균값구하기(data) {
    let sum = 0;
    for (student of data) {
        sum += student["중간고사점수"];
    }
    return sum / data.length;
}

function 평균값구하기2(data) {
    let 중간고사점수 = data.map((n) => n.중간고사점수);
    let 중간고사점수합 = 중간고사점수.resuce((a, b) => a + b);

    return 중간고사점수합 / data.length;
}

console.log(
    (function () {
        return (
            data.map((x) => x.중간고사점수).reduce((a, b) => a + b) /
            data.length
        );
    })()
);

let a = (data) =>
    data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length;
console.log(a(data));

let b = (data) => {
    return (
        data.map((x) => x.중간고사점수).reduce((a, b) => a + b) / data.length
    );
};
console.log(b(data));

// * 4. call by value, call by reference, sharing

// * array와 같은 convension 자료형을 넘길 때에는 함수 안에서 값이 수정된다.
// * call by value : 값의 전달
// * call by reference : 참조-주소 값의 전달

// ! 면접질문 : call by value와 call by reference에 대해 설명하시오.
// ! 질문대답 : 자바스크립트는 call by value만 존재합니다.

// * 방법 1)
let test = [10, 20, 30];

function 함수3(a) {
    a[0] = 1000;
}

함수3(test);

// * 방법 2)
let test2 = 100;

function 함수2(a) {
    a = 1000;
}

함수2(test2);

// * 반례)
var a2 = {};

function test3(b) {
    b = 1000;
}

test3(a2);
