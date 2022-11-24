let me = { age: 30 };
let you = me; // 참조카운트 : 2

me = null; // 참조카운트 : 1
you = null; // 참조카운트 : 0 > garbage collect가 메모리에서 삭제
//

let x = {
  y: {
    z: 1,
  },
};

// x가 참조하는 객체 : object1, y가 참조하고 있는 객체 : object2

let a = x; // object1의 참조카운트 : 2 (x, a)
x = 1; // object1의 참조카운트 : 1 (a)

let b = a.y; // object2의 참조카운트 : 2 (a.y, b)
a = 2; // object2의 참조카운트 : 0
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우, 메모리 누수(memory leak)가 발생했다고 표현한다.

function outer() {
  let privateVal = ['test'];

  function getPrivate() {
    return privateVal;
  }

  return getPrivate;
}

const getPrivateData = outer();
const secretVal = getPrivateData();

console.log(secretVal);

// 아래처럼 클로저를 이용할 때는 사용한 비공개 변수를 해제해주어야 한다. 그렇지 않으면 해당 변수가 계속 남아있게 된다.
secretVal = null;
secretVal = undefined;

// 전역변수는 사용 여부와 상관없이 프로그램이 종료되기 전까지 계속 메모리에 존재하기 때문에, 사용에 주의해야 한다.
