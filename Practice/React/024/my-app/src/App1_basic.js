function Resume({ 이름, 취미, 자기소개 }) {
  let like = 0;

  function clickLike() {
    like++;
    console.log(like);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>취미: {취미}</p>
      <p>{자기소개}</p>
      {/* 변수가 변경된다고 해도, 렌더링이 다시 일어나지 않기 때문에 증가되지 않는다. */}
      <button onClick={clickLike}>like {like}</button>
    </section>
  );
}

function App() {
  return (
    <main>
      <Resume 이름={'서유림'} 취미={'음악 감상'} 자기소개={'안녕하세요. 저는 서유림입니다.'} />
    </main>
  );
}

export default App;
