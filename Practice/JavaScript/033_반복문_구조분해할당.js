let value = [10, 1, 100, 200, 300, 10];

let value2 = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
};

Object.keys(value);
Object.keys(value2);

// * 1. for in으로 순회하는 방법
for (i in value2) {
    // * for of로 순회를 돌 수 없다.
    console.log(i);
}
console.log("----------------------");

// for (let i of value2) {
// * for of로 순회를 돌아야 key와 value를 한번에 출력하고 싶지만 error!
//     console.log(i);
// }

Object.entries(value);
Object.entries(value2);

// * 2. for of로 순회하는 방법
for (i of Object.entries(value2)) {
    console.log(i);
}
console.log("----------------------");

// * 3. 구조분해할당
// * 1) 방법-1
for (i of Object.entries(value2)) {
    console.log(`key는 ${i[0]}이고, value는 ${i[1]}입니다.`);
}
console.log("----------------------");

// * 2) 방법-2
// ! 배열 뿐만 아니라, 객체도 사용 가능하다.
for ([i, j] of Object.entries(value2)) {
    console.log(`key는 ${i}이고, value는 ${j}입니다.`);
}
console.log("----------------------");

// * 3) 구조분해할당의 원리
for ([i, j] of [
    [10, 20],
    [30, 40],
]) {
    console.log(i, j);
}
console.log("----------------------");

for ([i, j] of [
    [10, 20, 300],
    [30, 40, 500],
]) {
    console.log(i, j); // * 300과 500을 출력하지 못한다.
}
console.log("----------------------");

// * 4) 데이터에 몇개가 들어올지 모르는 경우 전개구문을 사용한다.
for ([i, j, ...k] of [
    [10, 20, 300, 1, 2],
    [30, 40, 500, 1],
]) {
    console.log(i, j, k);
}
console.log("----------------------");

// * 4. 데이터의 형태를 본따서 구조분해할당
// * 1) 방법-1
for ([[i, j], ...k] of [
    [[10, 20], 300],
    [[30, 40], 500],
]) {
    console.log(i, j, k);
}
console.log("----------------------");

// * 2) 방법-2
for ([i, j] of [
    [[10, 20], 300],
    [[30, 40], 500],
]) {
    console.log(i, j);
}
console.log("----------------------");

// * 5. 일반 변수 선언의 구조분해할당
// * 1) 예제-1
let a, b, c;
console.log(([a, b] = [10, 20]));
console.log("----------------------");

let one, two, three;
[one, two, three] = "010-5584-0884".split("-");
console.log(one, two, three);
c;
let one2, two2, three2, four2;
[one2, two2, three2, four2] = "010-5584-0884-0000".split("-");
console.log(one2, two2, three2, four2);

[one2, two2, three2, ...four2] = "010-5584-0884-01-02-03".split("-");
console.log(one2, two2, three2, four2);
console.log("----------------------");

// * 6. 구조분해할당 문제
let data = [10, 20, 30, 40, 50];
let a2, b2, c2;

// * 1) 문제-1 : a, b, c로 각각을 분해하려고 한다.
// *            a에는 10, b에는 20, 30, 40, c에는 50을 할당해보세요.
// [a, ...b, c] = [10, 20, 30, 40, 50] // (X)
[a2, b2, c2] = [data[0], [data[1], data[2], data[3]], data[4]]; // O
console.log(a2, b2, c2);

// * 2) 문제-2 : a, b, c로 각각을 분해하려고 한다.
// *            a에는 10, 20, 30, b에는 40, c에는 50을 할당해보세요.
// [...a, b, c] = [10, 20, 30, 40, 50] // (X)
[a2, b2, c2] = [[data[0], data[1], data[2]], data[3], data[4]]; // O
console.log(a2, b2, c2);

// * 3) 문제-3 : a, b, c로 각각을 분해하려고 한다.
// *            a에는 10, b에는 20, c에는 30, 40, 50을 할당해보세요.
// ! 스프레드 문법은 마지막에 사용해야 정상적으로 작동한다.
[a2, b2, ...c2] = [10, 20, 30, 40, 50];
console.log(a2, b2, c2);
console.log("----------------------");

// * 7. Object에서의 구조분해할당
// * 1) 기본 Object
let data2 = {
    name: "yurim",
    age: 24,
    money: 10000,
};

let { name, age } = data2;
// let { name, age } = {name: 'yurim', age: 24};
console.log(name, age);

// * 2) Object의 구조분해할당
let data3 = {
    name2: "yurim",
    age2: 24,
    money2: 10000,
    collage2: "SSU",
};

let { name2, age2, ...rest } = data3;
console.log(name2, age2, rest);

// ! 순서를 바꿔도 가능, key에 value가 매핑되기 때문
let data4 = {
    name3: "yurim",
    money3: 10000,
    collage3: "SSU",
    age3: 24,
};

let { name3, age3, ...rest2 } = data4;
console.log(name3, age3, rest2);
console.log("----------------------");

// ! RORO기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용한다.

// * 8. 스프레드 문법
// * 1) 값을 추가하는 기본적인 방법
let a3 = [10, 20, 30];

a3.push(100); // 배열의 마지막에 값을 추가
a3.unshift(1000); // 배열의 맨 앞에 값을 추가
console.log(a3);

// * 2) 스프레드 문법을 사용하여 값을 추가하는 방법
a3 = [2000, ...a3, 200];
console.log(a3);

// * 3) 스프레드 문법을 사용하여 값을 이어붙이는 방법
let a4 = [1, 2, 3];
let b4 = [10, 20, 30];
let c4 = [...a4, ...b4];
console.log(c4);

// * 4) 스프레드 문법을 사용하여 구조분해할당 하는 방법
let str = "hello world";
console.log([str]);

let str2 = "hello world";
console.log([...str2]); // str2.split("")과 동일한 결과

console.log("!".repeat(10));
console.log([..."!".repeat(10)]);
console.log("----------------------");
