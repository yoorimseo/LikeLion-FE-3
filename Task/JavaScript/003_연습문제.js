// * 다음 array의 각 자리수의 합을 구하세요.
// ! hint 문자열로 변환해서 풀어주세요!
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

let arr = [11, 22, 33, 111, 2];

let newArr = arr.join("").split("");
let result = 0;

function sum(arr) {
    for (const i of arr) {
        result += parseInt(i);
    }
    return result;
}

console.log(sum(newArr));
