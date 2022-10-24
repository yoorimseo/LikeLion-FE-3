const inpExpert = document.querySelector("#expert");
const inpTraingTime = document.querySelector("#training-time");
const btnShowRes = document.querySelector(".btn-exc");
const sectRes = document.querySelector(".cont-result");

btnShowRes.addEventListener("click", () => {
    // * 사용자가 필수 입력값을 입력했는지 판단한다
    if (inpExpert.value.length > 0 && inpTraingTime.value.length > 0) {
        // * 사용자의 입력값을 바탕으로 결과를 보여준다
        showRes();
        // console.log("둘다 입력함!!");
    } else if (inpExpert.value.length > 0 || inpTraingTime.value.length > 0) {
        alert("나머지 필수 입력값을 입력해주세요.");
        // console.log("하나만 입력함!!");
    } else {
        alert("필수 입력값을 모두 입력해주세요.");
        // console.log("입력 안함!!");
    }
});
