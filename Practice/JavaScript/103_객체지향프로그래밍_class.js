// function Robot(name) {
//     this.name = name;
// }

// Robot.prototype.sayYourName = function () {
//     console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
// }

class Robot {
    // * 클래스의 생성자 함수 : 하나의 클래스는 하나의 생성자만 정의할 수 있다. 생성자 함수는 new 키워드가 호출될때 자동으로 실행된다.
    constructor(name) {
        this.name = name;
    }

    // * 메소드를 정의, 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있다.
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

const robot = new Robot("게리");
console.log(robot.name);
robot.sayYourName();

console.log("------------------------------------");

//////////////////////////////////////////

// * 실습 : 우리가 위에서 만들어본 여러분 자신의 생성자 함수를 class 문법으로 변경해봅시다.
// function Me(name, address, phoneNum) {
//     // * this는 생성자 함수로 만든 인스턴스를 가리킨다.
//     this.name = name;
//     this.address = address;
//     this.phoneNum = phoneNum;
// }

// Me.prototype.canwalk = function () {
//     console.log(`${this.name}이(가) 걷는다.`);
// };

// Me.prototype.teaching = function (student) {
//     student.levelUp();
// };

// function Student(level) {
//     this.level = level;
// }

// Student.prototype.levelUp = function () {
//     this.level++;
// };

class Me {
    constructor(name, address, phoneNum) {
        this.name = name;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    canwalk() {
        console.log(`${this.name}이(가) 걷는다.`);
    }

    teaching(student) {
        student.levelUp();
    }
}

class Student {
    constructor(level) {
        this.level = level;
    }

    levelUp() {
        this.level++;
    }
}

const me = new Me("유림", "서울시", "010-5584-0884");
console.log(me.name, me.address, me.phoneNum);
me.canwalk();

const student = new Student(1);
me.teaching(student);
console.log(student.level);
