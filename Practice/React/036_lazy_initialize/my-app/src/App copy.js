import { useEffect, useState } from 'react';

function getName() {
  console.log('오래기다리는 작업');
  return '개리';
}

function App() {
  // const [name, setName] = useState(getName())
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);

  return (
    <>
      <div>
        안녕하세요 {name}! 현재 숫자는 {num} 입니다!
      </div>
      <button onClick={() => setNum((p) => p + 1)}>{num}</button>
    </>
  );
}
export default App;
