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

Child.prototype = Object.create(
    Parent.prototype,
    // * 프로퍼티 서술자 객체
    {
        constructor: {
            // * 프로퍼키 변경이 가능한가?
            configurable: true,

            // * 열거 가능한가?
            enumerable: true,

            // * 프로퍼티의 값을 수정할 수 있는가?
            writable: true,
            value: Child,
        },
    }
);

Child.prototype.canWalk = function () {
    console.log("now i can walk!!");
};

const child = new Child();
console.log(child.__proto__ === Child.prototype);

const child2 = new Child();
console.log(child2);

console.log("------------------------------------");
