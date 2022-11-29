# 간단한 코드 스니펫

```js
Infinity - Infinity;
Math.ceil(); // 올림
Math.floor(); // 내림

// 정규표현식
'aAb1B2cC34oOp'.replace(/[a-zA-Z]/g, '!'); // '!!!1!2!!34!!!'
'aAb1B2cC34oOp'.replace(/[a-zA-Z]/g, ''); // '1234'
'aAb1B2cC34oOp'.replace(/[^\d]/g, ''); // '1234'
'aAb1B2cC34oOp'.replace(/[\D]/g, ''); // '1234'
'abcAb1B2abcC34oOp'.replaceAll(/[a-zA-Z]/g, ''); // '1234'
'aAb1B2cC34oOp'.match(/[\d]/g); // ['1', '2', '3', '4']

// 소수점 버리는 방법
parseInt(10 / 3); // 3
Math.floor(10 / 3); // 3
~~(10 / 3); // 3, 비트 단위 연산자 부정
(10 / 3) << 0; // 3
(10 / 3) | 0; // 3, 비트 단위 or 연산자

// 비트 단위 연산자
2 << 1; // 4
2 << 2; // 8
2 << 3; // 16

// 깊은 복사
// 전개 구문으로 복사
// slice로 복사
// JSON.stringify()로 복사
// Object.assign()으로 복사
// Lodash 라이브러리 사용

// 다차원 배열에서 한 번에 최댓값을 찾을 수 없다.
Math.max([
  [0, 1],
  [2, 5],
  [3, 9],
]); // NaN

let value = [
  [0, 1],
  [2, 5],
  [3, 9],
];
let value2 = [
  [0, [1, 2]],
  [2, 5],
  [3, 9],
];
value.flat(); // [0, 1, 2, 5, 3, 9]
value2.flat(); // [0, Array(2), 2, 5, 3, 9]
// 다차원 배열을 1차원 배열로 바꾸는 방법
value2.flat(Infinity); // [0, 1, 2, 2, 5, 3, 9]
Math.max(...value2.flat(Infinity)); // 9
```

## 배열의 평균값

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120817>

```js
function solution(numbers) {
  // 배열이 빈 배열이면 error
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}

function solution(numbers) {
  // 아래와 같이 0으로 초기화를 꼭 해주세요.
  return numbers.reduce((a, c) => a + c, 0) / numbers.length;
}
```

## 문자열안에 문자열

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120908>

```js
// 'abcdefg'.indexOf('cde') // 2
// 'abcdefg'.indexOf('zee') // -1
function solution(str1, str2) {
  if (str1.indexOf(str2) === -1) {
    return 2;
  }
  return 1;
}

function solution(str1, str2) {
  return str1.indexOf(str2) === -1 ? 2 : 1;
}

function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}
```

## 숨어있는 숫자의 덧셈 (1)

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120851>

```js
Array.from('aAb1B2cC34oOp'); // ['a', 'A', 'b', '1', 'B', '2', 'c', 'C', '3', '4', 'o', 'O', 'p']

'aAb1B2cC34oOp'.split(''); // ['a', 'A', 'b', '1', 'B', '2', 'c', 'C', '3', '4', 'o', 'O', 'p']

Array.from('aAb1B2cC34oOp').map((v) => +v); // [NaN, NaN, NaN, 1, NaN, 2, NaN, NaN, 3, 4, NaN, NaN, NaN]

Array.from('aAb1B2cC34oOp')
  .map((v) => +v)
  .filter((v) => !Number.isNaN(v)); // [1, 2, 3, 4]
// string인 숫자를 number로 바꿔야 하기 때문에 map을 사용해야 한다.

function solution(my_string) {
  return Array.from(my_string)
    .map((v) => +v)
    .filter((v) => !Number.isNaN(v))
    .reduce((a, c) => a + c, 0);
}

'aAb1B2cC34oOp'.replace(/[a-zA-Z]/g, '');
// '1234'
'aAb1B2cC34oOp'.replace(/[^\d]/g, '');
// '1234'
'aAb1B2cC34oOp'.replace(/[\D]/g, '');
// '1234'
'abcAb1B2abcC34oOp'.replaceAll(/[a-zA-Z]/g, '');
// '1234'
'aAb1B2cC34oOp'.match(/[\d]/g);
// ['1', '2', '3', '4']

function solution(my_string) {
  return my_string
    .match(/[\d]/g)
    .map((v) => +v)
    .reduce((a, c) => a + c, 0);
}
```

## 진료순서 정하기

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120835>

```js
// 원본이 변경이 되어버리기 때문에 원하는 결과가 안나옵니다.
function solution(emergency) {
  const sorted = emergency.sort((a, b) => b - a);
  return sorted.map((v) => indexOf(v) + 1);
}

let 원본 = [3, 76, 24];
let 사본 = 원본.sort((a, b) => b - a);
사본;
// [76, 24, 3]
원본;
// [76, 24, 3]

function solution(emergency) {
  const sorted = [...emergency].sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

function solution(emergency) {
  const sorted = emergency.slice().sort((a, b) => b - a);
  return emergency.map((v) => sorted.indexOf(v) + 1);
}

// 깊은 복사
// 전개 구문으로 복사
// slice로 복사
// JSON.stringify()로 복사
// Object.assign()으로 복사
// Lodash 라이브러리 사용
```

## 문자열 밀기

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120921>

```js
// slice나 for이용하면 어렵게 풀게 됩니다.
('ohell' + 'ohell').indexOf('hello'); // 1
('lohel' + 'lohel').indexOf('hello'); // 2

function solution(A, B) {
  return (B + B).indexOf(A);
}

let solution = (A, B) => (B + B).indexOf(A);

// 회전 초밥 문제 처럼 몇 번씩 순회를 돌아야 하고, 중간에 먹는 초밥이 사라진다라고 하면 for를 이용합니다.
// 아래와 같이 for 문 안에 length가 줄어드는 것을 '이용'하셔야 합니다.
const l = [10, 20, 30, 40, 50];
for (let i = 0; i < l.length; i++) {
  console.log(l.pop());
}
// 50
// 40
// 30
// undefined
```

## 특이한 정렬

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120880>

```js
// 일반 숫자 정렬
[10, 20, 30, 40, 32, 35, 37].sort((a, b) => a - b); // [10, 20, 30, 32, 35, 37, 40]

// 어떠한 값 기준 정렬
[10, 20, 30, 40, 32, 35, 37].sort((a, b) => Math.abs(a - 35) - Math.abs(b - 35)); // [35, 37, 32, 30, 40, 20, 10]

// 어떠한 값 기준 정렬, 절댓값이 같을 때에는 뒤에 ||
[10, 20, 30, 40, 32, 35, 37].sort((a, b) => Math.abs(a - 35) - Math.abs(b - 35) || b - a); // [35, 37, 32, 40, 30, 20, 10]

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
```

## 다항식 더하기

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120863>

```js
[3, 10].join('x + '); // '3x + 10'

'3x + 7 + x'.split(' + '); // ['3x', '7', 'x']

'3x + 7 + x'.split(' + ').filter((v) => v.includes('x')); // ['3x', 'x']

// x 항만 골라내기
'3x + 7 + x'
  .split(' + ')
  .filter((v) => v.includes('x'))
  .map((v) => v.replace('x', '') || '1'); // ['3', '1']

'3x + 7 + x'
  .split(' + ')
  .filter((v) => v.includes('x'))
  .map((v) => +v.replace('x', '') || 1); // [3, 1]

'3x + 7 + x'
  .split(' + ')
  .filter((v) => v.includes('x'))
  .map((v) => +v.replace('x', '') || 1)
  .reduce((a, c) => a + c, 0); // 4

// 숫자 항만 골라내기
'3x + 7 + x'
  .split(' + ')
  .filter((v) => !v.includes('x'))
  .map((v) => +v)
  .reduce((a, c) => a + c, 0); // 7

function solution(polynomial) {
  const answer = [];
  answer.push(
    polynomial
      .split(' + ')
      .filter((v) => v.includes('x'))
      .map((v) => +v.replace('x', '') || 1)
      .reduce((a, c) => a + c, 0)
  );
  answer.push(
    polynomial
      .split(' + ')
      .filter((v) => !v.includes('x'))
      .map((v) => +v)
      .reduce((a, c) => a + c, 0)
  );
  if (answer[0] === 1 && answer[1] !== 0) {
    return `x + ${answer[1]}`;
  }
  if (answer[0] === 1 && answer[1] === 0) {
    return `x`;
  }
  if (answer[0] !== 1 && answer[1] === 0) {
    return `${answer[0]}x`;
  }
  if (answer[0] === 0 && answer[1] !== 0) {
    return `${answer[1]}`;
  }
  if (answer[0] === 0 && answer[1] === 0) {
    return ``;
  }
  return answer.join('x + ');
}

// 코드 간소화
function solution(polynomial) {
  let answer = [];
  answer.push(
    polynomial
      .split(' + ')
      .filter((v) => v.includes('x'))
      .map((v) => +v.replace('x', '') || 1)
      .reduce((a, c) => a + c, 0)
  );
  answer.push(
    polynomial
      .split(' + ')
      .filter((v) => !v.includes('x'))
      .map((v) => +v)
      .reduce((a, c) => a + c, 0)
  );

  let result = [];
  if (answer[0]) result.push(`${answer[0] === 1 ? '' : answer[0]}x`);
  if (answer[1]) result.push(answer[1]);
  // [10].join(' + ') // '10'
  return result.join(' + ');
}
```

## OX퀴즈

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120907>

```js
// 코딩테스트 중 eval을 사용하지 못하도록 막아놓은 곳이 있습니다. 참고하세요.

eval();
eval('10 + 10'); // 20
eval('10 - 3'); // 7
eval('5 + 6 = 11'); // error
eval('5 + 6 == 11'); // true

quiz.split(' = ')[0]; // '5 + 6'
quiz.split(' = ')[1]; // 11

function solution(quiz) {
  let result = [];
  for (item of quiz) {
    const 연산식 = eval(item.split(' = ')[0]);
    const 결과값 = +item.split(' = ')[1];
    result.push(eval(연산식) === 결과값 ? 'O' : 'X');
  }
  return result;
}
```

## 겹치는 선분의 길이

- 링크 : <https://school.programmers.co.kr/learn/courses/30/lessons/120876>

```python
def solution(lines):
    sets = [set(range(min(l), max(l))) for l in lines]
    return len(sets[0] & sets[1] | sets[0] & sets[2] | sets[1] & sets[2])
```

```js
function solution(lines) {
  // 100이 0, 101은 1
  // 99는 -1, 98은 -2
  let line = Array(201).fill(0); // 0 포함 201개
  for (let [i, j] of lines) {
    for (; i < j; i++) {
      line[100 + i]++;
    }
  }
  return line.filter((v) => v >= 2).length;
}

// 큰값 = Math.max(...lines.flat())
// 작은값 = Math.min(...lines.flat())

// 다차원 배열에서 한 번에 최댓값을 찾을 수 없다.
Math.max([
  [0, 1],
  [2, 5],
  [3, 9],
]); // NaN

let value = [
  [0, 1],
  [2, 5],
  [3, 9],
];
let value2 = [
  [0, [1, 2]],
  [2, 5],
  [3, 9],
];
value.flat(); // [0, 1, 2, 5, 3, 9]
value2.flat(); // [0, Array(2), 2, 5, 3, 9]
// 다차원 배열을 1차원 배열로 바꾸는 방법
value2.flat(Infinity); // [0, 1, 2, 2, 5, 3, 9]
Math.max(...value2.flat(Infinity)); // 9
```
