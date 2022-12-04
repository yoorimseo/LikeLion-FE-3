describe('텍스트 매니저 테스트', () => {
  const textManager = new TextManager();

  it('텍스트 값을 전달', () => {
    const initValue = textManager.getValue();
    expect(textManager.getValue()).toBe(initValue);
  });

  it('텍스트 값을 수정', () => {
    const testValue = { data: 'Hello Everyone!' };
    textManager.setValue(testValue);

    expect(textManager.getValue()).toBe(testValue.data);
  });
});
