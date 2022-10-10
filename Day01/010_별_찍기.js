// * 입력 : 5
// * 출력 :
//     *
//    ***
//   *****
//  *******
// *********

// ! 내 풀이
// const num = prompt("숫자를 입력하세요 : ");
const num = 5;
let gap = num;
let star = 1;

for (let i = 0; i < num; i++) {
    gap--;
    console.log(" ".repeat(gap) + "*".repeat(star));
    star += 2;
}

// ! 정답
// const num = prompt("숫자를 입력하세요 : ");
// const n = 5;
// let tree = "";

// for (let i = 1; i <= n; i++) {
//     let star = "";
//     for (let j = 1; j <= n - i; j++) {
//         star += " ";
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         star += "*";
//     }

//     tree += star + "\n";
// }

// console.log(tree);
