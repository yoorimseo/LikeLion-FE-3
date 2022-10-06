// while(조건문) {
// 	실행문;
// }

let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// ! 구구단
let i2 = 2;
let j2 = 1;
while (i2 < 10) {
    while (j2 < 10) {
        console.log(`${i2} X ${j2} = ${i2 * j2}`);
        j++;
    }
    j2 = 1;
    i2++;
}

///

let value = [10, 20, 30, 40];
let x = 0;

while (x < value.length) {
    console.log(value[x]);
    x++;
}

///

// * break
let i3 = 2;
let j3 = 1;
while (i3 < 10) {
    while (j3 < 10) {
        console.log(`${i3} X ${j3} = ${i3 * j3}`);
        j3++;
    }
    j3 = 1;
    if (i3 >= 4) {
        break;
    }
    i3++;
}

///

// * do while문
let sum = 0;
let i4 = 0;

do {
    i4++;
    sum += i4;
} while (i4 < 10);

console.log(sum);

///

// * break와 continue
let i5 = 2;
let j5 = 1;
while (i5 < 10) {
    while (j5 < 10) {
        console.log(`${i5} X ${j5} = ${i5 * j5}`);
        j5++;
    }
    j5 = 1;
    if (i5 == 4) {
        break;
    }
    i5++;
}

// ! 무한반복
let i6 = 2;
let j6 = 1;
while (i6 < 10) {
    while (j6 < 10) {
        console.log(`${i6} X ${j6} = ${i6 * j6}`);
        j6++;
    }
    j6 = 1;
    if (i6 == 4) {
        continue;
    }
    i6++;
}

// ! continue는 다음 루프로 간다
let j7 = 1;
while (i7 < 10) {
    i7++;
    if (i7 == 4) {
        continue;
    }
    while (j7 < 10) {
        console.log(`${i7} X ${j7} = ${i7 * j7}`);
        j7++;
    }
    j7 = 1;
}

// * continue 쉬운 예제
for (let i = 0; i < 10; i++) {
    if (i == 4 || i == 5) {
        continue;
    }
    console.log(i);
}

///

// * 레이블을 사용한 반복문 - 중첩 반복문 사용하면 레이블을 붙인 반복문을 한 번에 종료시킬 수도 있음
timestable: for (let x = 2; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
        if (x === 4) break timestable;
        console.log(`${x} X ${y} = ${x * y}`);
    }
}

// ! 💡 레이블 사용시 주의사항
// * - 레이블은 반드시 `break`문 또는 `continue`문 위에 있어야 한다.
// * - `break`문은 모든 레이블에서 사용할 수 있다.
// * - `continue`문은 반복문에서만 사용 가능하다.
