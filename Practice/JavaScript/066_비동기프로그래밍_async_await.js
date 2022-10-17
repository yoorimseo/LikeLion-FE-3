// * 모던 자바스크립트 예제
async function f() {
    return 100;
}

f().then(alert); // 100

///////////////////////////////

async function f2() {
    return "hello world";
}

console.log("!");

f2()
    .then((메시지) => {
        alert(메시지);
        return 메시지.split(" ")[0];
    })
    .then((메시지) => {
        alert(메시지);
        return 메시지[0];
    });

console.log("!!");

///////////////////////////////

// * 프로미스를 기다린 경우
async function f3() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000);
    });

    let result = await promise; // ! 프라미스가 이행될 때까지 기다림 (*)

    alert(result); // ! "완료!"
}

f3();

// * 프로미스를 기다리지 않은 경우
async function f4() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 1000);
    });

    let result = promise;
    console.log(result); // Promise {<pending>}

    alert(result); // [object Promise]

    return "hello";
}

f4(); // Promise {<fulfilled>: 'hello'}

///////////////////////////////

// * 해당 코드 사용 가능하다.
const productData = await fetch("http://test.api.weniv.co.kr/mall").then(
    (data) => data.json()
);
