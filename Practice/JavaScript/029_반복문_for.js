for (let i = 0; i < 10; i++) {
    console.log(i);
}

// ! airbnb 컨벤션에 권장
// ! IE 잔부 사용 가능
for (const i in ["one", "two", "three"]) {
    console.log(i);
}

// ! airbnb 컨벤션에 권장
// ! IE 잔부 사용 불가
for (const i of ["one", "two", "three"]) {
    console.log(i);
}

///

// * 블록레벨스코프
if (true) {
    var a = "1";
    let b = "2"; // ! error : if문 밖에서 참조할 수 없다
    const c = "3"; // ! error : if문 밖에서 참조할 수 없다
}

console.log(a); // 1
console.log(b); // ! error : if문 밖에서 참조할 수 없다
console.log(c); // ! error : if문 밖에서 참조할 수 없다

for (const i in ["one", "two", "three"]) {
    // ! i라는 변수를 스코프마다 잠군다

    var a = "1";
    let b = "2"; // ! error : if문 밖에서 참조할 수 없다
    const c = "3"; // ! error : if문 밖에서 참조할 수 없다

    console.log(i);
}

console.log(a); // 1

///

// * 반복문 - 기본형
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i > 3) {
        break;
    }
}

let data1 = ["a", "b", "c", "d", "e"];

for (let i = 0; i < data1.length; i++) {
    console.log(data1[i]);
}

// * 배열 원소의 차를 구해보자
let data2 = [1, 3, 4, 8, 13, 17, 20];

for (let i = 0; i < data2.length; i++) {
    console.log(data2[i + 1] - data2[i]);
}

// * 배열 원소의 차를 구해보자 - 배열의 길이 조정
let data3 = [1, 3, 4, 8, 13, 17, 20];

for (let i = 0; i < data3.length - 1; i++) {
    console.log(data3[i + 1] - data3[i]);
}

// * 배열 원소의 차를 구해보자 - i의 값 수정
let data4 = [1, 3, 4, 8, 13, 17, 20];

for (let i = 1; i < data4.length; i++) {
    console.log(data4[i] - data4[i - 1]);
}

///

// * 무한반복 for문
let i = 0;
for (;;) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for (let i = 0; ; ) {
    i++;
    console.log(i);
    if (i > 5) {
        break;
    }
}

for (let i = 0; ; i++) {
    console.log(i);
    if (i > 5) {
        break;
    }
}

///

// * 다음 숫자의 평균을 구해보자
let 수학점수 = [10, 99, 88, 85, 21, 35];

// * 다음 숫자의 평균을 구해보자 - for문
let 총합 = 0;

for (let i = 0; i < 수학점수.length; i++) {
    총합 += 수학점수[i];
}

평균 = 총합 / 수학점수.length;

// * 다음 숫자의 평균을 구해보자 - forEach문
let 총합2 = 0;
console.log(수학점수.forEach((value) => (총합2 += value)));
console.log(총합2 / 수학점수.length);

// 다음 숫자의 평균을 구해보자 - reduce문
console.log(수학점수.reduce((a, b) => a + b, 0) / 수학점수.length);

///

// * 실무 체험하기 - 데이터를 가지고 연산
let user = [
    {
        _id: "633e5b1711926cc42d1fbb4b",
        index: 0,
        guid: "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
        age: 28,
        name: "Mai Montoya",
        gender: "female",
    },
    {
        _id: "633e5b1718d6c001d2f771c7",
        index: 1,
        guid: "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
        age: 22,
        name: "Shelley Potts",
        gender: "female",
    },
    {
        _id: "633e5b17fecc26a897aa2283",
        index: 2,
        guid: "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
        age: 22,
        name: "Hensley Flores",
        gender: "male",
    },
    {
        _id: "633e5b17267fe16c24f00591",
        index: 3,
        guid: "6e189d90-0981-4086-9ee2-12242fda76d1",
        age: 20,
        name: "Holmes Morrow",
        gender: "male",
    },
    {
        _id: "633e5b17b30766b9c38594f5",
        index: 4,
        guid: "f1505113-9383-4249-bbb3-0e5f8ea634b2",
        age: 25,
        name: "Elisa Miller",
        gender: "female",
    },
];

for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}

// * 여성의 수 구하기 - 1
let 여성 = 0;

for (let i = 0; i < user.length; i++) {
    // console.log(user[i]);
    if (user[i]["gender"] === "female") {
        여성 += 1;
    }
}

console.log(여성);

///

// * 남성의 수 구하기 - 1
console.log(user.length - 여성);

// * 남성의 수 구하기 - 2
let 남성 = 0;

for (let i = 0; i < user.length; i++) {
    // console.log(user[i]);
    if (user[i]["gender"] === "female") {
        여성 += 1;
    } else if (user[i]["gender"] === "male") {
        남성 += 1;
    }
}

///

// * 여성의 수 구하기 - 2
user.filter((i) => i["gender"] === "female").length;

// ! 암기를 부탁드립니다. (재귀함수 할 때 비교할 for문)
// ! 1. 구구단
for (let 단 = 2; 단 < 10; 단++) {
    for (let 곱 = 2; 곱 < 10; 곱++) {
        console.log(`${단} X ${곱} = ${단 * 곱}`);
    }
}
// ! 2. 문자열 뒤집기
let txt = "hello world";

// * 방법 - 1
let result = "";

for (let i = txt.length - 1; i >= 0; i--) {
    result += txt[i];
}

// * 방법 - 2
let result2 = "";

for (let i = 0; i < txt.length; i++) {
    result2 = txt[i] + result2;
}

// ! 3. 시그마 : 누적합
let s2 = 0;
for (let i = 1; i < 101; i++) {
    s2 += i;
}

// ! 4. 팩토리얼 예) 5! = 5 * 4 * 3 * 2* 1
let s3 = 1;
for (let i = 1; i < 6; i++) {
    s3 *= i;
}

///

// ! 문제1 : 다음 입력된 숫자들의 합을 구하라
// * input : '12345'
// * result : 15

let x = "12345";
let result3 = 0;

for (let i = 0; i < x.length; i++) {
    result3 += parseInt(x[i]);
}

// ! 문제2 : 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
// https://codingdojang.com/scode/393?answer_mode=hide
// * 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// * 예) 8808은 3, 8888은 4
// * 1부터 10000까지 문자열로 나열, 8카운트

let x2 = Array(10000)
    .fill(0)
    .map((_, index) => index + 1)
    .join("");
let result4 = 0;

for (let i = 0; i < x2.length; i++) {
    if (x2[i] === "8") {
        result4 += 1;
    }
}
