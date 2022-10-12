// * 로또번호를 추첨하는 코드를 작성해주세요.
let lottoNum = [];

for (let i = 0; i < 6; i++) {
    let lotto = Math.floor(Math.random() * 44) + 1;
    for (let j in lottoNum) {
        if (lotto == lotto[j]) {
            lotto = Math.floor(Math.random() * 44) + 1;
        }
    }

    lottoNum.push(lotto);
}

console.log(lottoNum.sort((a, b) => a - b));
