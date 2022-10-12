// * 다음 string의 평균 값을 구하세요
// ! hint code : '5, 4, 10, 2, 5'.split(',')

let str = "5, 4, 10, 2, 5";
let result = 0;

function stringAverage(str) {
    let arr = str.split(", ");

    for (const i of arr) {
        result += parseInt(i);
    }

    return result / arr.length;
}

console.log(stringAverage(str));
