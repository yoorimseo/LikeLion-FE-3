// * 콜백함수의 경우 this가 다르게 동작 할 수 있다.
[1, 2, 3].forEach(
    function () {
        console.log(this);
    },
    [10, 20, 30]
);

let 인세규정 = {
    책: 10,
    영상콘텐츠: 50,
};

function 인세계산함수(e) {
    return e * (this.책 / 100);
}

[100, 200, 300].map(인세계산함수, 인세규정);
