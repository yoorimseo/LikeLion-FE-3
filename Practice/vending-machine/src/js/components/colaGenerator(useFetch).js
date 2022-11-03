class ColaGenerator {
  // XML 파일을 서버와 비동기적으로 주고받기위해 등장한게 Ajax
  // 그렇다고 XML만 오갈수 있는게 아니라 JSON같은 다른 파일 포멧도 가능
  // XMLHttpRequest 생성자가 Ajax 통신을 할 때 필요한 인스턴스를 제공해주고 그 인스턴스를 활용해서 통신하는게 Ajax
  constructor() {
    this.itemList = document.querySelector(".list-item");
  }

  setup() {
    this.loadData((json) => {
      this.colaFactory(json);
    });
  }

  async loadData(callback) {
    // aysnchronous javascript ans xml
    // javascript object notation
    const response = await fetch("src/js/item.json");

    if (response.ok) {
      // .ok : http 프로토콜로 받는 상태 코드가 200 ~ 299일 경우를 의미
      callback(await response.json()); // 응답 본문을 읽으면서 객체 형태로 파싱한다.
    } else {
      alert("통신 에러!" + response.status);
    }
  }

  // <li>
  //   <button type="button" class="btn-item" data-item="">
  //     <img src="src/images/Original_Cola.png" alt="" class="img-item">
  //     <strong class="tit-item">Original_Cola</strong>
  //     <span class="txt-price">1000원</span>
  //   </button>
  // </li>

  // 위에서 콜백함수가 될 녀석
  colaFactory(data) {
    // 최적화를 위해 fragment를 사용
    const docFrag = document.createDocumentFragment();

    // 데이터를 순회하면서 li 요소로 만든다.
    data.forEach((el) => {
      const item = document.createElement("li");
      const itemTemplate = `
        <button type="button" class="btn-item" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
          <img src="src/images/${el.img}" alt="" class="img-item">
          <strong class="tit-item">${el.name}</strong>
          <span class="txt-price">${el.cost}원</span>
        </button>
      `;
      item.innerHTML = itemTemplate;
      docFrag.appendChild(item);
    });

    this.itemList.appendChild(docFrag);
  }
}

export default ColaGenerator;
// export 했으니, 어디선가 ColaGenerator를 import 받아서 사용할 수 있다.
// export할 것이 하나뿐이라면, default를 사용한다. 여러 개라면 {..., ...}를 사용하여 나열한다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export
