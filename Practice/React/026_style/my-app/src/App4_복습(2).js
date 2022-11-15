import styled from 'styled-components';

const One = styled.div`
  color: red;
`;

const Two = styled.div`
  color: green;
  font-size: ${(props) => props.size + 'px'};
`;

// 구조분해할당으로 받아오기
// const Two = styled.div`
//   color: green;
//   font-size: ${({size}) => size + 'px'};
// `;

const Three = styled.div`
  color: ${(option) => (option.option === '하나' ? 'blue' : 'red')}; ;
`;

function App() {
  return (
    <>
      <One>hello world</One>
      <Two size={32}>hello world</Two>
      <Three option={'하나'}>hello world</Three>
    </>
  );
}

export default App;
