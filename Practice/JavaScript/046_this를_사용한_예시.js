function getEmptyRoomCount(hotel) {
    return hotel.방의개수 - hotel.예약자수;
}

let 호텔 = [
    {
        이름: "하나호텔",
        방의개수: 50,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
    {
        이름: "하나호텔",
        방의개수: 40,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
    {
        이름: "하나호텔",
        방의개수: 40,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
    {
        이름: "하나호텔",
        방의개수: 25,
        예약자수: 25,
        남은방의개수: function () {
            return this.방의개수 - this.예약자수;
        },
    },
];

// * 남은 방의 개수를 직접 구하기
console.log(호텔[0]["방의개수"] - 호텔[0]["예약자수"]);

// * 남은 방의 개수를 this를 사용해서 구하기
// ! .을 사용하지 않았지만 아래의 코드들과 결과값이 동일하다
console.log(호텔[0]["남은방의개수"]());
// ! 객체 안에서 바로 호출할 수 있기 때문에 자료구조 파악이 용이
console.log(호텔[0].남은방의개수());
// ! 객체 안에 함수를 하나하나 정의하지 않기 때문에 메모리 공간에 이득
console.log(getEmptyRoomCount(호텔[0]));
console.log("------------------------------");
