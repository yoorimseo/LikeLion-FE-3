// * 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// * 입력 : 1 2 3 4 5
// * 출력 : 5 4 3 2 1

// const str = prompt("여러 개의 숫자를 입력해주세요").split(" ");
let str = "1 2 3 4 5";
let result = str.split(" ");

console.log(result.reverse().join(""));

let str2 = "1 2 3 4 5".split(" ").reverse();
let result2 = "";

for (let i = 0; i < str2.length; i++) {
    result2 += str2[i];
}

console.log(result2);
