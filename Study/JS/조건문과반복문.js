// 조건문 : 여러 값들이 주어지고, 그 값의 종류에 따라 처리 방법을 달리 해야 할 경우 사용한다.

// const result = Math.floor(Math.random() * 10 + 1);

// if (result > 5) {
//   console.log(`${result}, 5보다 큽니다.`);
// } else if (result < 5) {
//   console.log(`${result}, 5보다 작습니다.`);
// } else {
//   console.log(`${result}, 5랑 같습니다.`);
// }

//////////////////////////////////////////////////////////
// 표현식 : 값을 반환할 수 있는 모든 코드
// switch문은 if문에 비해 가독성이 좋다.

// const result = Math.floor(Math.random() * 10 + 1);

// switch (result) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//     console.log(`${result}, 5보다 작습니다.`);
//     break;
//   case 5:
//     console.log(`${result}, 5랑 같습니다.`);
//     break;
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log(`${result},  5보다 큽니다.`);
//     break;
// }

//////////////////////////////////////////////////////////
// 삼항연산자
// 표현식 ? true일 때 : false일 때

// const result = Math.floor(Math.random() * 10 + 1);

// result > 5 ? console.log(`${result}, 5보다 큽니다.`) : result < 5 ? console.log(`${result}, 5보다 작습니다.`) : console.log(`${result}, 5랑 같습니다.`);

//////////////////////////////////////////////////////////
// for in 문 : 객체를 순환하고 싶을 때

// const snack = { 새우깡: 1000, 포스틱: 1500, 홈런볼: 2000 };

// // property: 모든 인스턴스들이 공유할 수 있는 공간
// Object.prototype.꼬북칩 = 3000;

// const drink = { 콜라: 1000, 사이다: 2000 };

// for (let item in snack) {
//   // hasOwnProperty: 객체가 특정 프로퍼티를 가지는지 확인한다. 프로토타입에 등록된 프로퍼티는 제외한다.
//   if (snack.hasOwnProperty(item)) {
//     console.log(`${item}의 가격은 ${snack[item]}입니다.`);
//   }
// }

//////////////////////////////////////////////////////////
// for of 문 : 순환 가능한 것 모두 순환 시킬 수 있다.
// 순환 가능한 것 : array, string, arsuments, nodeList, set, map. 단, object는 순환할 수 없다.

const heros = ['spiderman', 'blackwidow', 'batman', 'ironman', 'doctorstrange'];
// const newHeros = [];

// for (const hero of heros) {
//   console.log(hero);
// }

// for (const hero of heros) {
//   newHeros.push(hero + '!!');
// }

// console.log(newHeros);

// for (const str of heros[0]) {
//   console.log(str);
// }

// function test(a, b, c) {
//   for (const arg of arguments) {
//     console.log(arg);
//   }
// }

// test(heros[0], heros[1], heros[2]);

// const mySet = new Set([1, 2, 3, 4, 5]);
// console.log(mySet);

// for (const item of mySet) {
//   console.log(item);
// }

// mySet.add(10);
// console.log(mySet);

// const testArr = [1, 2, 3, 4, 5, 2, 3, 4, 6, 7, 7, 7];
// const testSet = new Set(testArr);
// console.log(testSet);
// console.log(Array.from(testSet));
//////////////////////////////////////////////////////////
// 콜백함수 : 매개변수로 전달하는 함수 -> 신기한 기능, 오직 자바스크립트에서만 존재하는 기능

// forEach(), map()

const list = [
  { name: '유림', age: 24 },
  { name: '주호', age: 25 },
  { name: '기범', age: 24 },
  { name: '성현', age: 24 },
];

// 데이터에 있는 나이를 일괄적으로 1살씩 올리고 싶다면?

// 1) forEach
// list.forEach((item) => {
//   item.age = item.age + 1;
// });

// 2) forEach
// const newList = [];

// list.forEach((item) => {
//   const newObj = { name: item.name };
//   newObj['age'] = item.age + 1;
//   newList.push(newObj);
// });

// 2) map
const newList = list.map((item) => {
  const newObj = { name: item.name };
  newObj['age'] = item.age + 1;
  // const newObj = {name: item.name, age: item.age += 1};

  return newObj;
});

console.log(list);
console.log(newList);
