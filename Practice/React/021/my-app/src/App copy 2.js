function App() {
  const 변수 = 100;
  const 함수 = () => {
    return 10;
  };
  const 값 = 10;
  return (
    <div>
      <p>
        {100 + 1}
        <br />
        {'hello' + 'world'}
        <br />
        {[1, 2, 3].map((x) => x ** 2)}
        <br />
        {[1, 2, 3].filter((x) => x >= 2)}
        <br />
        {함수()}
        <br />
        {변수}
        <br />
        {값 ? 'one' : 'two'}
      </p>
    </div>
  );
}

export default App;
