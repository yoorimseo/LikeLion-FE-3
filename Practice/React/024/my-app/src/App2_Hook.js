import { useState } from 'react';

function Resume({ 이름, 취미, 자기소개 }) {
  // 예시) 클릭 이벤트가 일어날 때마다 좋아요 숫자가 바뀌는 것, 데이터가 바뀔 때마다 바뀐 데이터를 보여주는 것
  // const [랜더링이 필요한 변수, 랜더링이 필요한 변수를 바꿀 수 있도록 도와주는 함수] = useState(초기값);
  const [like, setLike] = useState(0);

  function handleClickLike() {
    // like += 1;
    setLike(like + 1);
    // console.log(like + 1);
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>취미: {취미}</p>
      <p>{자기소개}</p>
      <button onClick={handleClickLike}>like {like}</button>
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
