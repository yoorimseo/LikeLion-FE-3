// * 1.1 다음 값의 평균을 구하세요.
let arr = [10, 20, 30, 10, 20, 30, 40, 10];

let result = 0;
function average(arr) {
    for (const i of arr) {
        result += i;
    }

    return result / arr.length;
}

// * 1.2 다음 값의 분산를 구하세요.
// * 분산 => (각 값에 - 평균) ** 2
let averageValue = average(arr);
let result2 = 0;

function dispersion(arr, average) {
    for (const i of arr) {
        result2 += (i - average) ** 2;
    }

    return result2 / arr.length;
}

console.log(dispersion(arr, averageValue));
