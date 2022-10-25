const me = {
    name: "웨이드",
    address: "제주도 제주시 인다 1길",
    phoneNum: "010-8001-6536",
    canWalk: function () {
        console.log("웨이드가 걷는다.");
    },
    teaching: function (student) {
        student.levelUp();
    },
};

const student = {
    level: 1,
    levelUp: function () {
        this.level++;
    },
};

me.teaching(student);

console.log(student.level);

console.log("------------------------------------");

/////////////////////////////////////////

function Factory() {}

// * 생성자 함수를 사용하여 객체를 생성
const obj = new Factory(); // * 자동으로 객체를 생성하고 반환한다.

console.log(obj instanceof Factory); // true

console.log("------------------------------------");

/////////////////////////////////////////

function NewFactory(name) {
    this.name = name;
    this.sayYourName = function () {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    };
}

// * robot1은 생성자 함수로 만들어낸 인스턴스를 갖는다.
let robot1 = new NewFactory("브랜든");
console.log(robot1.name);
robot1.sayYourName();

let robot2 = new NewFactory("웨이드");
console.log(robot2.name);
robot2.sayYourName();

console.log("------------------------------------");

/////////////////////////////////////////

// * 실습 : 음식 이름의 배열을 전달하면 배열안에서 랜덤하게 메뉴를 뽑아내는 로봇객체의 생성자를 만들어보세요.

function PickMenu(menuArr) {
    this.menuArr = menuArr;
    this.pickOneMenu = function () {
        const menu = this.menuArr[Math.floor(Math.random() * this.menuArr.length)];

        console.log(`오늘은 ${menu}을(를) 추천합니다!`);
    };
}

const menuList = [
    "순두부찌개",
    "김치찌개",
    "돈까스",
    "햄버거",
    "떡볶이",
    "치킨",
    "피자",
    "샐러드",
    "마라탕",
    "초밥",
    "굶기",
];

const robot3 = new PickMenu(menuList);
robot3.pickOneMenu();
