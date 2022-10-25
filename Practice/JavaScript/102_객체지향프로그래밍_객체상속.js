// * 프로토타입 체이닝 : 자기 자신에게 존재하지 않는 프로퍼티나 메서드를 프로토타입을 통해 추적하는 과정
// * __proto__는 생성자함수의 prototype을 참조하고 있다.
// * 예) 문자열.__proto__ === String.__proto__ === Object.__proto__

// * 자신에게 해당 prototype이 없으면, 상위의 prototype으로 올라가서 찾는다.
// ! 자바스크립트의 타입들은 기본적으로 Object 타입을 상속받고 있다.

function Parent() {
    this.name = "재현";
}
Parent.prototype.rename = function (name) {
    this.name = name;
};
Parent.prototype.sayName = function () {
    console.log(this.name);
};

function Child() {
    Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
    console.log("now i can walk!!");
};

const child = new Child();
console.log(child.name); // 재현
child.rename("유림");
console.log(child.sayName()); // 유림
