// ! for of는 IE 사용 불가!

let data = {
    one: "하나",
    two: "둘",
    three: "셋",
    four: "넷",
};

// * for in - key 값을 순회
for (const i in data) {
    console.log(i);
}

// * for in -  value 값을 순회
for (const i in data) {
    console.log(data[i]);
}

///

// * 인덱스:벨류라서 0, 1, 2, 3이 출력된다
let data2 = [10, 20, 30, 40];

for (const i in data2) {
    console.log(i);
}

// * 위의 코드와 같은 의미
let data3 = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
};

for (const i in data3) {
    console.log(i);
}

for (const i in "hello world") {
    console.log(i);
}

///

// * for of문 - 순차적으로 값을 찍는다
for (const i of data2) {
    console.log(i);
}

for (const i of "hello world") {
    console.log(i);
}

let s = 0;
for (const i in "12345") {
    s += parseInt(i);
}

///

const seat = [
    ["피카츄", "라이츄", "파이리"],
    ["꼬부기", "버터플", "야도란"],
    ["피죤투", "또가스", "메타몽"],
];

// * for 문 사용
for (let i = 0; i < seat.length; i++) {
    const row = seat[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

// * for of 문 사용
for (let row of seat) {
    for (let pocketmon of row) {
        console.log(pocketmon);
    }
}

///

// * 질의응답
let data4 = {
    one: "하나",
    two: "둘",
    three: "셋",
    four: "넷",
};

for (const i in data4) {
    console.log(data4[i]);
}

for (const i in data4) {
    console.log(data4.i); // ! error
}
