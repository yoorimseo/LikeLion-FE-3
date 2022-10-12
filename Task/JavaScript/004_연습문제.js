const price = 1000000;

let res = price.toLocaleString();
console.log(res);

// * 반복문만 사용하여 숫자단위 콤마 찍기

// * 반복문만 사용하여 숫자단위 콤마 없애기

// * 문자열 뒤집기
let str = "hello world";
let result = "";

for (const i of str) {
    result = i + result;
}

console.log(result);

function reverse(str) {
    if (str.length <= 0) {
        return str;
    }

    return reverse(str.slice(1)) + str[0];
}

console.log(reverse(str));
