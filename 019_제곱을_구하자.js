// * 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// const num = prompt("두 개의 숫자를 입력하세요.").split("");
let num = ["2", "2"];

console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));
