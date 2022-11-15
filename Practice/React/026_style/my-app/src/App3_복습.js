// 컴포넌트 만들기
// const arr = [10, 20, 30, 40, 50];

// function App() {
//   return (
//     <div>
//       {arr.map((v) => (
//         <p key={v.toString()}>{v}</p>
//         // key 값은 숫자나 문자로 사용한다.
//       ))}
//     </div>
//   );
// }

// 조건부 렌더링
// const value = 1;

// function App() {
//   if (value === 1) {
//     return <h1>hello 1</h1>;
//   } else if (value === 2) {
//     return <h1>hello 2</h1>;
//   } else if (value === 3) {
//     return <h1>hello 3</h1>;
//   }
// }

// 스타일 적용하기
// npm install styled-components
// npm install styled-reset
import React from 'react';
import styled from 'styled-components';

const DivRed = styled.div`
  color: red;
`;

const DivBlue = styled.div`
  color: blue;
`;

function App() {
  return (
    <>
      <DivRed>hello world</DivRed>
      <DivBlue>hello world</DivBlue>
    </>
  );
}

export default App;
