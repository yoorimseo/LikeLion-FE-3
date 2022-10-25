// * prototype은 특정 객체에 대한 참조. 즉 어떠한 공간을 가르키고 있다.
// * 생성자 함수가 인스턴스를 생성하게 되면 그 안에는 숨겨진 프로퍼티인 [[Prototype]] 이 존재한다.
// * [[Prototype]]에 접근하기 위해서는 __proto__를 사용해야 한다.

function Test() {}

const obj = new Test();

obj.__proto__ === Test.prototype; // true

// * prototype은 객체 안에 존재하는 것이 아니라, 생성자 함수 안에 존재하는 것이다.
console.log(obj.prototype); // undefined

console.log("------------------------------------");

///////////////////////////////////////

function NewFactory2(name) {
    this.name = name;
}

// * prototype은 모든 인스턴스들이 공유할 수 있는 메서드나 프로퍼티의 공간을 만들어두어 메모리를 아낄 수 있다.
NewFactory2.prototype.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
};

const robot = new NewFactory2("게리");
console.log(robot.name);
robot.sayYourName();

const robot2 = new NewFactory2("알리");
console.log(robot2.name);
robot2.sayYourName();

console.log(robot.sayYourName === robot2.sayYourName); // true
console.log(robot.__proto__ === NewFactory2.prototype); // true

console.log("------------------------------------");

///////////////////////////////////////

// * 실습: 우리가 만들었던 음식 로봇객체의 메서드를 프로토타입으로 분리해보세요, 그리고 객체의 메서드가 서로 동일한 주소를 참조하는지 확인해보세요.
function PickMenu(menuArr) {
    this.menuArr = menuArr;
}

PickMenu.prototype.pickOneMenu = function () {
    const menu = this.menuArr[Math.floor(Math.random() * this.menuArr.length)];

    console.log(`오늘은 ${menu}을(를) 추천합니다!`);
};

const menuList = ["순두부찌개", "돈까스", "햄버거", "떡볶이", "치킨", "피자", "마라탕", "초밥"];

const menuBot = new PickMenu(menuList);
menuBot.pickOneMenu();

const menuBot2 = new PickMenu(menuList);
console.log(menuBot.PickMenu === menuBot2.PickMenu); // true

console.log("------------------------------------");

///////////////////////////////////////

// * 실습2: 우리가 객체지향 개념에서 만들었던 ‘나’ 와 ‘대상’ 객체를 생성자를 통해서 만들어 볼 수 있도록 코드를 수정해봅시다.
// const me = {
//     name: "웨이드",
//     address: "제주도 제주시 인다 1길",
//     phoneNum: "010-8001-6536",
//     canWalk: function () {
//         console.log("웨이드가 걷는다.");
//     },
//     teaching: function (student) {
//         student.levelUp();
//     },
// };

function Me(name, address, phoneNum) {
    // * this는 생성자 함수로 만든 인스턴스를 가리킨다.
    this.name = name;
    this.address = address;
    this.phoneNum = phoneNum;
}

Me.prototype.canwalk = function () {
    console.log(`${this.name}이(가) 걷는다.`);
};

Me.prototype.teaching = function (student) {
    student.levelUp();
};

const me = new Me("서유림", "서울시", "010-5584-0884");
me.canwalk();

// const student = {
//     level: 1,
//     levelUp: function () {
//         this.level++;
//     },
// };

function Student(level) {
    this.level = level;
}

Student.prototype.levelUp = function () {
    this.level++;
};

const student = new Student(1);
console.log(`student의 level : ${student.level}`);
me.teaching(student);
console.log(`student의 level : ${student.level}`);
