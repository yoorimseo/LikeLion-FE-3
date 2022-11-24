// 1. 배열이나 객체를 불변하는 객체처럼 다루기
// 배열이나 객체는 불변하는 객체처럼 다루는것이 데이터의 변화를 추적하는데 용이하다.
// 만약 배열 데이터를 수정해야 한다면, 기존에 사용했던 원본 데이터는 그대로 두고 새로운 배열을 만들어 사용하는 것이 좋다.
const aespa = ['카리나', '윈터', '지젤', '닝닝'];
const loveAespa = aespa.map((item) => item + '💖');
console.log(aespa);
console.log(loveAespa);
