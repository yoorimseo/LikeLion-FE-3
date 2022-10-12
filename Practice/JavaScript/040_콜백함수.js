// * callback function : 함수 아규먼트를 호출해서 함수 어딘가에서 호출해주는 것

function sum(x, y, 콜백함수) {
    콜백함수(x + y);
    // return x + y;
}

function documentWrite(s) {
    document.write("콜백함수", s);
}

sum(10, 20, console.log);
// sum(10, 20, documentWrite);
console.log("----------------------------");

//////////////////////////////////////////

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// * 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

let arr = [10, 20, 30, 40, 50];
console.log(arr.map(제곱));

function 제곱(x) {
    return x ** 2;
}

// * 화살표 함수를 사용
let 제곱2 = arr.map((x) => x ** 2);
console.log(제곱2);

function 두배(x) {
    console.log(x * 2);
}
console.log("----------------------------");

//////////////////////////////////////////

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach // 노드에서의 forEach는 IE에서 작동하지 않습니다.
let arr2 = [10, 20, 30, 40, 50];
arr2.forEach(두배);
console.log("----------------------------");

//////////////////////////////////////////

// * 화살표 함수를 사용하여 map과 같이 배열로 리턴하는 기능을 구현
// * map
let 제곱3 = arr.map((x) => x ** 2);
console.log(제곱3);

// * forEach
let result = [];
arr2.forEach((x) => result.push(x ** 2));
console.log(result);
