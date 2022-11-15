function Hello({ name }) {
  if (name) {
    return <h1>{name}</h1>;
  }
  return <p>이름이 입력되지 않았습니다.</p>;
}

function App() {
  return (
    // <Hello name='유림' />
    <Hello />
  );
}

export default App;
