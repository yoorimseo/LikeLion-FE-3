// * 문제8 : 객체의 키 이름 중복

// * 자바스크립트 객체의 출력값은?

var d = {
    height: 180,
    weight: 78,
    weight: 84,
    temperature: 36,
    eyesight: 1,
};

console.log(d["weight"]); // 84
// ! 객체의 키 이름이 중복되면 제일 나중에 선언된 값으로 출력된다.
