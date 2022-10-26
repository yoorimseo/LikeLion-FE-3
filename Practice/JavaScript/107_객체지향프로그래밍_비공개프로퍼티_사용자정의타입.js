// * 비공개 프로퍼티를 #키워드를 사용해서 만들어보기
class Robot {
    #password;

    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }

    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
    }

    getPassword() {
        return this.#password;
    }

    setPassword(pw) {
        this.#password = pw;
    }
}

const bot = new Robot("재현", 1234);
// console.log(bot.#password); // SyntaxError: Private field '#password' must be declared in an enclosing class
console.log(bot.getPassword());
console.log(bot.setPassword("5678"));
console.log(bot.getPassword());

console.log("------------------------------------");

////////////////////////////////////////////////////

// * 비공개 프로퍼티를 #키워드를 사용하지 않고 클로저를 사용해서 만들어보기
// ! 모듈 + 사용자 정의 혼합패턴
// * 일반 함수
function Person() {
    let age = 30; // * 비공개 프로퍼티로 만들기

    // * 셍성자 함수
    function innerPerson() {}

    innerPerson.prototype.getAge = function () {
        return age;
    };

    return innerPerson;
}

const PersonFunc = Person();
const person = new PersonFunc();

console.log(person);
console.log(person.age);
console.log(person.getAge());

console.log("------------------------------------");

////////////////////////////////////////////////////

// * 비공개 프로퍼티를 #키워드를 사용하지 않고 IIFE 함수를 사용해서 만들어보기
// ! IIFE를 이용한 모듈 + 사용자 정의 혼합패턴
// * IIFE : 익명함수로 즉시 실행할 수 있는 함수이다.
(function () {
    console.log("IIFE!");
})();

const NewPerson = (function () {
    let age = 30;

    function innerPerson() {}

    innerPerson.prototype.getAge = function () {
        return age;
    };

    return innerPerson;
})();

const personWithSecret = new NewPerson();
console.log(personWithSecret);
console.log(personWithSecret.age);
console.log(personWithSecret.getAge());
