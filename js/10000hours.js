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

const txtResExpert = document.querySelector(".res-expert");
const txtResTraningTime = document.querySelector(".res-training-time");

// * 사용자의 입력값을 바탕으로 결과를 보여준다
function showRes() {
    // * '나는 며칠 동안 훈련을 해야 1만 시간이 될까?' 버튼을 클릭하면 하단에 결과가 담긴 section이 보여지게 한다
    sectRes.style.display = "block";

    // * 사용자가 어떤 전문가가 되기로 했는지 텍스트로 보여준다
    txtResExpert.textContent = `${inpExpert.value}`;

    // * 해당 전문가가 되기 위해 며칠 이상 훈련해야 하는지 계산해서 텍스트로 보여준다
    // * 10000만 시간 = x일 * 하루에 훈련하는 시간
    // * x일 = Math.floor(10000 / 하루에 훈련하는 시간)
    const resDay = Math.floor(10000 / inpTraingTime.value);
    txtResTraningTime.textContent = `${resDay}`;
}

// * '훈련하러 가기 GO! GO!' 버튼을 클릭하면 모달창이 뜬다.
// * '종료하고 진짜 훈련하러 가기 GO! GO!' 버튼을 클릭하면 모달창을 닫는다.
