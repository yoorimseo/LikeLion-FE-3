// * 1. 함수의 구조
// ! 파선아실(파라미터는 선언할 때, 아규먼트는 실행할 때)
function 안녕(파라미터) {
    console.log(파라미터);
    console.log("hello world");
    return 100;
}

let 아규먼트 = 1000;
안녕(아규먼트);
console.log(안녕(아규먼트) + 안녕(아규먼트)); // return 값의 합 = 200
console.log("----------------------");

// ! return 값이 없을 때 - undefined 값을 return 한다!
function 안녕2() {
    console.log("hello");
}

안녕2();
console.log(String(안녕2()) + String(안녕2()));
console.log("----------------------");

// ! return 구문을 만나면 해당 함수는 종료된다. 그리고 자신이 있던 자리에 return 값을 반환한다.
// ! return은 반환값
// ? console.log()는 값을 출력하고 undefined 값을 반환한다.
function 안녕3() {
    console.log("hello");
    console.log("hello");
    console.log("hello");
    return;
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

안녕3();
console.log("----------------------");

// * return을 함수 종료 조건으로 사용하는 예시
function 안녕4() {
    console.log("hello");
    console.log("hello");
    console.log("hello");
    if (특정조건) {
        return 100;
    } else {
        console.log("hello");
        console.log("hello");
        console.log("hello");
        return 1000;
    }
    return;
    // 이 밑의 코드는 실행되지 않는다.
    // ...
}

// ? 함수의 연산과 관계없는 return 값을 작성해서는 안 된다.
function sum(a, b) {
    return a * b;
}

console.log(sum(10, 20)); // 30이 아니라 200이 출력
console.log("----------------------");

///////////////////////////////////////

// * 2. 함수를 사용하는 이유
// * 1) 재사용성 > 재사용하지 않을 코드라도 가능하다면 함수로 만드는 것을 권장한다.
// * 2) 유지보수 > 구조 파악이 용이 + 변수의 스코프 제한
// * 3) 구조 파악이 용이
/*
땅파기() // 10만줄
기반다지기() // 10만줄
기둥세우기() // 10만줄
벽돌쌓기() // 10만줄
지붕올리기() // 10만줄
*/
// * 4) (참고) 추상화로 개발하는 것이 객체지향 프로그래밍(OOP; Object Oriented Programming) 언어의 언어 철학에 맞다.

// * 3. 함수의 다양한 형태
// * 3-1. 함수의 아규먼트에 따른 반환값
function 함수1(a, b, c) {
    return a + b + c;
}

// ! 콘솔창의 기능 : 마지막 라인에 한하여 console.log()를 찍지 않아도 return 값을 콘솔창에 출력해준다.
함수1(10, 20, 30);

// ? 함수를 출력하고 싶다면?
console.log(함수1(10, 20, 30));
console.log(함수1(10, 20, 50));
console.log("----------------------");

//* 1) 필요 이상의 아규먼트를 넣었을 때
// ! error를 뿜지 않는다!
console.log(함수1(10, 20, 30, 40));
console.log("----------------------");

//* 2) 필요 이하의 아규먼트를 넣었을 때
function 함수2(a, b, c) {
    return a + b + String(c);
}
console.log(함수2(10, 20)); // 30undefined
console.log("----------------------");

///////////////////////////////////////

// * 3-2. 구조분해할당을 이용한 아규먼트 처리
function 함수3(a, b, ...c) {
    console.log(c);
    return Math.max(...c);
}

함수3("hello", "world", 10, 20, 30, 40);

function 함수3([a, b], ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

함수3([1, 2], 10, 20, 30, 40);
console.log("----------------------");

///////////////////////////////////////

// * 3-3. 기본값 할당 : 실행할 때 아규먼트가 없을 때 기본값으로 할당되어 계산된다.
function 함수3(a = 10, b = 20, c = 30) {
    return a + b + c;
}

console.log(함수3());
console.log(함수3(100));
console.log(함수3(100, 200));
console.log(함수3(100, 200, 300));
// ! 값이 순서대로 들어간다.
console.log(함수3((c = 1000))); // 1030이 아니라 1050이 출력됨
console.log(함수3((c = 1000), (a = 2000))); // 3020이 아니라 3030이 할당됨
// ? 위와 다르게 순서와 상관없이 내가 넣고 싶은 값을 넣기 위해서는 객체를 사용하면 된다!
console.log("----------------------");

///////////////////////////////////////

// * 3-4. 함수에서 객체를 아규먼트로
// https://www.freecodecamp.org/news/elegant-patterns-in-modern-javascript-roro-be01e7669cbd/

// ! 개선할 여지가 있는 예시
function 함수4(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부) {
    // * 회원등급 권한
    console.log("함수기능");

    return;
}

// * 초깃값 설정
함수4("Gold", true, true, true, "대화방 전체 백업 가능", true);

// ! 올바른 예시
function 함수4({ 회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부 }) {
    // * 회원등급 권한
    console.log("함수기능");
    console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);

    return;
}

함수4({
    회원등급: "Gold",
    글쓰기: true,
    글읽기: true,
    채널관리: true,
    백업: "부분가능",
    소셜로그인여부: true,
});

// * 입력되지 않은 값은 undefined가 뜬다.
함수4({
    회원등급: "Gold",
    채널관리: true,
    백업: "부분가능",
    소셜로그인여부: true,
});

///////////////////////////////////////

// * 6. 재귀함수 : 내가 나를 호출한 함수
// ! 재귀함수로 구현할 수 있는 것은 반복문으로도 구현이 가능하다.
// ? 그렇다면 두 개의 차이점은 무엇일까?

// * 1) 재귀함수
// * - 종료조건이 없으면 무한반복이 된다.
// * - Top-down
// * - 분할정복

// * 2) 반복문
// * - Bottom-up

// * 에시1 - 팩토리얼
// * 1) 재귀함수
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

// * 2) 반복문
let result = 1;
for (let i = 1; i < 6; i++) {
    result *= i;
}

console.log(result);

/*
5! = 5 * 4 * 3 * 2 * 1

                n       n <= 1      return
factorial(5)    5       false       5 * factorial(4) = 120
factorial(4)    4       false       4 * factorial(3) = 24
factorial(3)    3       false       3 * factorial(2) = 6
factorial(2)    2       false       2 * factorial(1) = 2
factorial(1)    1       true        1
*/

// * 예시2 - 누적합 구하기
// ! 아래 코드들이 좋은 코드는 아니다.
// * 1) 재귀함수
function 누적합(n) {
    if (n <= 1) {
        return 1;
    }
    return n + 누적합(n - 1);
}

console.log(누적합(100));

// * 2) 반복문
let result2 = 0;
for (let i = 1; i <= 100; i++) {
    result2 += i;
}

console.log(result2);

// * 누적합은 다음과 같이 반복문으로 사용하지 않고 바로 계산하는 것이 더 좋다.
// ! 순회를 돌지 않고 해결할 수 있다면 돌지 않고 해결한다.
let 누적합2 = 100;
console.log((누적합2 * (누적합2 + 1)) / 2);

// * 예시3 - reverse
// * 1) 재귀함수
function reverse(txt) {
    if (txt.length === 0) {
        return txt;
    }

    return reverse(txt.slice(1)) + txt[0];
}

console.log(reverse("hello world"));

// * 2) 반복문
let txt = "hello world";
let result3 = "";

for (const i of txt) {
    result3 = i + result3;
}

console.log(result3);

///////////////////////////////////////

// * 7. 지역변수와 전역변수
// scope에 대한 좋은 글 : https://velog.io/@bico/JavaScript-%EB%A0%89%EC%8B%9C%EC%BB%AC-%EC%8A%A4%EC%BD%94%ED%94%84lexical-scope
// ! 블록레벨스코프  : 함수가 종료된 다음에 선언된 변수는 휘발된다.
if (true) {
    let x = 10;
    const y = 10;
}
// console.log(x, y); 해당 변수는 블록레벨스코프이기 때문에 출력되지 않는다.

// ! 함수레벨스코프 : 밖에서 선언된 x는 함수 내부에서도 접근 가능하다.
let x = 100;
function xplus() {
    x += 10;
}

xplus();
console.log(x);

// * 8. 함수 안의 함수
function a() {
    console.log("a 실행");
    function b() {
        console.log("b 실행");
    }
    b();
}

// * 9. 화살표 함수
// * 예시 1)
function 함수5(x, y) {
    return x + y;
}

let 함수6 = (x, y) => x + y;

console.log(함수5.name);
console.log(함수6.name);
console.dir(함수5);

// * 예시 2)
function 함수7(x, y) {
    let z = x + y;
    return z;
}

let 함수8 = (x, y) => {
    let z = x + y;
    return z;
};

// ! 일반적으로 선언하는 함수와 화살표 함수는 호이스팅이 다르다. -> 35번 파일에서 계속...
