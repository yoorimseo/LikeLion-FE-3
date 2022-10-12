// ? this 값을 사용자의 의도대로 조작하는 것이 필요한 이유
// ! 호출하는 곳에 따라 this의 값이 다르기 떄문에 통일시키기 위해서
// * this의 값을 조작 : apply() > 인자 값이 여러 개, call() > 인자 값이 한 개
// * this의 값을 고정 : bind()

// * 1. call()
// * 특정한 메소드나 객체에서 사용하는 변수들을 다른 변수에서 사용하고 싶을 때, 즉 재사용성을 높이기 위해 사용
var peter = {
    name: "Peter Parker",
    sayName: function (느낌표) {
        console.log(this.name + 느낌표);
    },
};

var bruce = {
    name: "Bruce Wayne",
};

peter.sayName();
peter.sayName("!");
// ! 마치 bruce에 있는 sayName처럼 사용하겠다는 의미
peter.sayName.call(bruce);
peter.sayName.call(bruce, "!");
console.log("------------------------------");

//////////////////////////////////

// * 2. apply()
var peter = {
    name: "Peter Parker",
    sayName: function (is, is2) {
        console.log(this.name + " is " + is + " or " + is2);
    },
};

var bruce = {
    name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]);
console.log("------------------------------");

//////////////////////////////////

// * 3. bind()
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: "bruce",
    sayName: sayName,
};

var peter = {
    name: "peter",
    sayName: sayName.bind(bruce),
};

sayName(); // window가 출력된다.
peter.sayName();
bruce.sayName();
