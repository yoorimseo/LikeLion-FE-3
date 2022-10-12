// * 집합, 합집합, 교집합, 차집합

let s = new Set("abcdeeeeeeee");

console.log(s);
console.log(s.size);

// ? 문제
let 회사게시판 = [
    "서유림",
    "서유림",
    "서유림",
    "이주호",
    "이주호",
    "빙기범",
    "임성현",
];

//////////////////////////////////////////////

// ? 문제1 : 몇 명이 게시판에 게시물을 썼나요?
let 게시물갯수 = new Set(회사게시판);
console.log(게시물갯수.size);

// ? 문제2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시물갯수) {
    console.log(i, 회사게시판.filter((e) => e === i).length);
}

// * 서현주님 코드
let 회사게시판2 = ["이호준", "이호준", "이호준", "김은하", "김은하", "이준근"];
let map = new Map(); // ! 키 값의 중복이 안 되기 때문에 가능하다
for (const i of 회사게시판2) {
    map.set(i, (map.get(i) || 0) + 1); // 순회 돌면서 해당 key값을 업데이트 해주는 식으로
}

map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 1)
map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 2)
map.set("이호준", (map.get("이호준") || 0) + 1);
// => map.set('이호준', 3)
map.set("김은하", (map.get("김은하") || 0) + 1);
// => map.set('김은하', 1)

//////////////////////////////////////////////

let s2 = new Set("abcdeeeeeeee");
s2.size;
s2.add("f");

// Set을 순환하기
for (var variable of s2) {
    console.log(variable);
}

// 값이 배열인 경우
let ss = new Set("abcdeeeeeeeee".split(""));
console.log(ss);

let a = new Set("abc");
let b = new Set("cde");
// 교집합
let cro = [...a].filter((value) => b.has(value));
// 합집합
let union = new Set([...a].concat(...b));
// 차집합
let dif = new Set([...a].filter((x) => !b.has(x)));
