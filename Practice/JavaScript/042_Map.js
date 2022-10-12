// * Map 객체 : 키-값 쌍을 가지는 객체 자료형의 한 종류

// * 1) Map에 값을 넣기
let m = new Map();
m.set("하나", 1)
    .set("둘", 2)
    .set("셋", 3)
    .set("넷", 4)
    .set(true, "트루")
    .set([1, 2], "리얼리?"); // ! 이렇게는 호출이 불가하다.

console.log(m);
console.log("------------------------------");

/////////////////////////////////////////

// * 2) Map에서 값을 꺼내기
console.log(m.get("하나"));
console.log(m.get(true)); // ! 객체에서 가능하지 않지만 map에서는 가능하다.
console.log(m.get([1, 2])); // ! 새로운 배열을 가리키고 있기 때문에 이렇게 호출하는 것은 불가하다. 즉, 각 객체가 다른 주소값을 가지기 때문이다.

// ?변 수에 할당하면 같은 메모리 주솟값을 바라보고 있기 때문에 가능하다.
let m2 = new Map();
let test = [1, 2];

m2.set(true, "트루").set(test, "리얼리?"); // ! 이렇게는 호출이 불가하다.
console.log(m2.get(test));
console.log("------------------------------");

/////////////////////////////////////////

// * Python Vs JavaScript
// * 1. Python
// * python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// * 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false

/////////////////////////////////////////

// * 3) Map에 해당 key 값이 있는지 확인하기
m.has("하나");
console.log(m.has("하나"));
console.log("------------------------------");

/////////////////////////////////////////

// * 4) Map의 값을 제거하기
m.delete("하나");
m.has("하나");

console.log(m.has("하나"));
console.log("------------------------------");

/////////////////////////////////////////

// * 4) Map의 크기 구하기
m.size;
console.log(m.size);

let data = { one: 1, two: 2 }; // ! 객체는 length가 없어서 크기를 출력할 수 없다.
console.log("------------------------------");

/////////////////////////////////////////

// * 5) Map을 생성할 수 있는 것과 없는 것
let data2 = new Map([
    ["one", 1],
    ["two", 2],
]);
let data3 = new Map(Object.entries({ one: 1, two: 2 }));

let data4 = new Map({ one: 1, two: 2 }); // ! 불가능
let data5 = new Map("hello world"); // ! 불가능
let data6 = new Map([10, 20, 30, 40]); // ! 불가능

/////////////////////////////////////////

// * 6) Map의 직접 순회
// ! Map의 가장 큰 장점은 '직접 순회'가 가능하다는 것이다.
// https://shanepark.tistory.com/220
let data7 = { one: 1, two: 2 };
for (const i of data7) {
    // console.log(i); // ! 객체는 순회가 불가능하기 때문에 작동되지 않는다!
}

let m3 = new Map();

m3.set("하나", 1).set("둘", 2).set("셋", 3).set("넷", 4);

for (const i of m3) {
    console.log(i);
}

for (const [i, j] of m3) {
    console.log(i, j);
}

m.keys();
m.values();
m.entries();
console.log("------------------------------");

/////////////////////////////////////////

// * 7) Map과 Object 간의 형변환
// * Object를 Map으로 변환
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));

// * Map을 Object로 변환
let 오브젝트 = Object.fromEntries(맵);

// * 참고
let map = new Map(); // ! 키 값의 중복이 안 되기 때문에 가능하다
map.set("이호준", 1);
map.set("이호준", 2);
map.set("이호준", 3);
