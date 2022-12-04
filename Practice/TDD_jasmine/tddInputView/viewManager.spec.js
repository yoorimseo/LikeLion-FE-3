describe('클릭 이벤트 및 뷰를 담당하는 클래스', () => {
  it('viewManager의 인자로 textManager의 인스턴스가 전달되는지 확인', () => {
    const textManager = null;
    const btnEl = document.createElement('button');
    const viewerEl = document.createElement('h2');
    const inpTxt = document.createElement('input');

    const actual = () => {
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    };

    expect(actual).toThrowError();
  });

  it('viewManager의 인자로 HTML 요소들이 잘 전달되는지 확인', () => {
    const textManager = new TextManager();
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    const actual = () => {
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    };

    expect(actual).toThrowError();
  });

  const textManager = new TextManager(),
    btnEl = document.createElement('button'),
    viewerEl = document.createElement('h2'),
    inpTxt = document.createElement('input'),
    viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

  it('click 이벤트가 발생했을 경우 changeValue 함수가 실행되는지 확인', () => {
    // spyOn : 특정 객체의 메서드를 감시한다.
    spyOn(viewManager, 'changeValue');
    btnEl.click();

    // toHavaBeenCalled : 함수가 과거에 호출된 적이 있는지 확인한다.
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it('changeValue 함수를 통해 updateView 함수가 호출되는지 확인한다.', () => {
    spyOn(viewManager, 'updateView');
    viewManager.changeValue();
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
