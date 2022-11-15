function App() {
  return <Hello name='licat' />;
}

function Hello(props) {
  const name = props.name;
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // 아래와 같이 key를 인덱스 값으로 하는 것은 권장하지 않는다.
  // const numComponentsArray = num.map((i) => (
  //   <h3 key={i.toString()}>
  //     안녕, {name}! {i}호
  //   </h3>
  // ));

  const numComponentsArray = num.map((v, i) => (
    <h3 key={i.toString()}>
      안녕, {name}! {v}호
    </h3>
  ));

  console.log(numComponentsArray);

  return (
    <div>
      {/* 콤마를 없애고 요소를 밖으로 꺼내준다. */}
      {numComponentsArray}

      {/* 드물지만 이런경우가 생길 수 있으므로 권장하지 않는다는 얘기입니다. */}
      {/* {numComponentsArray.concat(numComponentsArray)} */}

      {/* <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1> */}
    </div>
  );
}

export default App;
