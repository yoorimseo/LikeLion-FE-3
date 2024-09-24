// * 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.
// * 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자. (키는 공백으로 구분하여 입력됩니다.)

// * 입력 : 176 156 155 165 166 169
// * 출력 : NO

// const height = prompt("키를 입력하세요.");
// let height = "176 156 155 165 166 169".split(" ");
let height = "155 156 165 166 169 176";
let result = "";
result = height
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");

console.log(height);
console.log(result);

if (height === result) {
    console.log("Yes");
} else {
    console.log("No");
}
