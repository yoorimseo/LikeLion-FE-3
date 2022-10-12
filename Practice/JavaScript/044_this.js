// ! 대부분의 경우, this의 값은 함수를 호출한 방법에 의해 결정된다.

function a() {
    console.log(this);
}

// * 여기서 호출하는 this는 window를 가리키고 있다. 함수를 호출해준 a()가 this가 된다.
a(); // * window.a()와 동일
console.log("------------------------------");

//////////////////////////////////

// ! 변수는 window에 등록이 된다.
function b() {
    console.log("hello world");
}

b(); // * window.b()와 동일
console.log("------------------------------");

//////////////////////////////////

// ! this는 누가 실행하느냐에 따라 다르다.
let test = {
    one: 1,
    two: 2,
    three: function () {
        console.log(this); // * 여기서 this는 test
    },
};

test.three(); // * test는 window가 호출, three()는 test가 호출

let test2 = test.three; // * 여기서 test2를 실행시키는건 window, 이때의 this는 윈도우
console.log("------------------------------");

//////////////////////////////////

// * 추가 예제
function sayName() {
    console.log(this.name);
}

// * var로 선언하면 window.name으로 호출 가능(let과 const는 아님)
// ! 전역에서 쓸 수 있기 때문(나중에 scope에서 언급)
var name = "Hero";

let peter = {
    name: "Peter Parker",
    say: sayName, // * say: sayName은 그저 function을 호출했을뿐, 실행하지 않은 것이고 호출된 sayName 함수에 ()가 붙어있으므로 함수단에서 실행되는 것
};

let bruce = {
    name: "Bruce Wayne",
    say: sayName,
};

// ! sayName을 실행하는 순간에 호출한 것을 가리킨다.
// * . 으로 접근한것 > 실행되게끔 호출한것 > this (. 앞에 있는 것이 this라고 생각하자)
// * say()를 호출한 peter, say()를 호출한 bruce
sayName(); // Hero
peter.say(); // Peter Parker
bruce.say(); // Bruce Wayne

//////////////////////////////////

// * 함수.name을 호출하면 함수의 이름이 출력된다.
function 함수() {}
함수.name; // 함수

function a() {
    console.log(this.name);
    function b() {
        console.log(this.name);
    }
    b();
}
a();

// * 이렇게 호출했을 때는, 전체 다 window를 가리키게 된다.
function a() {
    console.log(this);
    function b() {
        console.log(this);
    }
    // ! 함수 안의 함수여도 호출 주체가 없으니까 window를 가리키는 것이다.
    b();
}
a();

// ! depth가 아무리 깊어져도 window로 출력된다.
function a() {
    console.log(this);
    function b() {
        console.log(this);
        function c() {
            console.log(this);
        }
        c();
    }
    b();
}
a();

//////////////////////////////////

// ? 여기서 say()의 this는 누구를 가리킬까?
function sayName2() {
    console.log(this);
}

var c = {
    hello: "world",
    say: sayName2,
};

var b = {
    c: c,
};

var a = {
    b: b,
};

a.b.c.say(); // ! c를 출력한다.
