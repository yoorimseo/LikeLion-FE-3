// ? 생성자 함수를 쓰는 이유?
// ! 1) 나열된 프로퍼티들의 집합을 만들 때, 객체를 쉽게 만들기 위해서
// ! 1) 동일한 프로퍼티를 가지는 객체 생성, 2) prototype을 이용하여 메모리 효율을 높일 수 있음
// https://ko.javascript.info/constructor-new

let book = {
    책이름: "JavaScript",
    책가격: 1000,
    저자: "홍길동",
    출판일: "22.10.11",
};

// ? 데이터베이스에 어떻게 저장을 할 것인가?
// * 예를 들어, form에서 값을 입력받는다고 하자.
let newBook = {};

newBook["책이름"] = "JavaScript";
newBook["책가격"] = 1000000;
newBook["저자"] = "주호, 기범, 성현";
newBook["출판일"] = "22.10.30";

console.log(newBook);

// ! 좀 더 효율적으로 할 수 있는 방법 == 생성자 함수
function Book(책이름, 책가격, 저자, 출판일) {
    // * 여기서의 this는 책이름 아규먼트와 다르다. 함수를 가리키고 있다.
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
}

let data = Book("CSS", 10000, "유림", "22.12.30");
console.log(data); // * return이 생략되어 있으므로 undefined가 출력된다.

let book1 = new Book("HTML", 10000, "유림", "22.12.30");
let book2 = new Book("CSS", 20000, "유림", "23.12.30");
let book3 = new Book("JS", 30000, "유림", "24.12.30");
console.log(book1, book2, book3); // * 객체처럼 출력된다. 코드도 더 깔끔하고, 메모리 상으로는 더 효율적인 방법이다.

// * new 키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일) {
    // ! this = {} 처럼 작동한다!
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
    // ! return this;
}
