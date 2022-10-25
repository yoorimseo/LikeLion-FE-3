class Robot {
    constructor(name) {
        this.name = name;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }
}

class BabyRobot extends Robot {
    constructor(name) {
        super(name);
        this.ownName = "아이크";
    }

    sayBabyName() {
        // * 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 된다. 때문에 this로 접근 할 수 있다.
        this.sayYourName();
        console.log("Suceeding you, Father!");
    }
}

const babyRobot = new BabyRobot("브랜든");
console.log(babyRobot.name); // 브랜든
console.log(babyRobot.ownName); // 아이크
console.log("------------------------------------");
babyRobot.sayYourName();
console.log("------------------------------------");
babyRobot.sayBabyName();
