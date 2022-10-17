try {
    // code
} catch (에러메시지) {
    // code
} finally {
    // code
}

// * new Error(message);
// * new SyntaxError(message);
// * new ReferenceError(message);

//////////////////////////////////

try {
    let x = 10;
    let y = 20;
    console.log(x + y);
} catch (e) {
    console.error(e);
} finally {
    console.log("finally");
}

//////////////////////////////////

// ! 일부러 error를 발생하게 한 경우 > 코드는 정상적으로 작동이 완료된다.
try {
    let x = 10;
    let y = 20;
    console.log(x + y + z);
} catch (e) {
    console.log(e);
} finally {
    // * 일부 기능이 수행이 안될 수는 있지만, 서비스는 정상적으로 작동한다.
    console.log("finally");
}

//////////////////////////////////

// ! 아래의 코드는 error를 던져주고 멈춘다.
let x = 10;
let y = 20;
console.log(x + y + z); // * 일부러 error를 만들었을 때?!
let z = 30; // * 할당되지 않았다. 서비스가 멈춘다?!

//////////////////////////////////

a(); // * 로고 받아오기 메서드 - 길동
b(); // * 상품 정보 받아오기 메서드 - 철수
c(); // * 장바구니 구현 함수  !- 둘리

// ! a()에서 문제가 발생되었을 경우 b(), c()도 동작하지 않는다.

//////////////////////////////////

try {
    let x = 10;
    let y = 10;
    throw new Error("애러야!");
    console.log(x + y + z);
} catch (e) {
    console.error(e);
    console.dir(e);
    console.error(e.message);
} finally {
    console.log("end");
}

//////////////////////////////////

try {
    let x = 10;
    let y = 10;
    // ! 강제적으로 에러를 발생시켰다.
    throw new SyntaxError("문법 애러야!");
    console.log(x + y + z);
} catch (e) {
    console.error(e);
    console.error(e.message);
} finally {
    console.log("end");
}

//////////////////////////////////

// * 예시
function sum(a, b) {
    return a + b;
}

// test code
// sum(1, 1)
// sum('1', 1)
// sum(1, '1')
// sum(undefined, null)
// ...

try {
    sum(1, 1);
} catch {}
