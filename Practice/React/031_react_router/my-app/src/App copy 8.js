import { BrowserRouter, Routes, Route, Link, useLocation, useParams } from 'react-router-dom';

function Index() {
  return <h1>Index</h1>;
}

function Login() {
  return <h2>Login</h2>;
}

function Study() {
  return <h2>Study</h2>;
}

function StudyDetail(props) {
  // console.log(props);  // 아무것도 출력되지 않는다. 이전 버전에서는 props로 처리했었다.

  // const params = useParams();
  // console.log(params);
  const { num } = useParams();
  console.log(num);

  console.log(useLocation());

  // fetch 예)
  // fetch(`www.test.co.kr/${num}`) 이런 식으로 데이터를 가지고 와서 아래에 데이터를 뿌려주면 blog 형식이 완성된다.

  return (
    <>
      <h2>StudyDetail {num}번</h2>
      <p>{num}번 게시물에 오신 것을 환영합니다.</p>
      <p>여기서 fetch를 통해 백엔드로부터 {num}번 게시물을 요쳥하셔야 합니다.</p>
    </>
  );
}

// function Test(){
//   const location = useLocation()
//   const { test } = useParams()

//   console.log(location)
//   console.log(test)

//   return <div>hello</div>
// }

function Chat() {
  const location = useLocation();
  const params = useParams();

  console.log(location);
  console.log(params);

  // 호준님이 사용하는 방식
  const 채팅방번호 = location.pathname.split('/')[2];

  return (
    <>
      <h3>StudyDetail {채팅방번호}번 Chat</h3>
      <p>
        {채팅방번호}번 게시물에 오신것을 환영합니다. 여기는 {채팅방번호}번 게시물의 채팅방입니다.
      </p>
      <p>여러분이 fetch를 통해 백엔드에서 채팅 정보를 받아와야 합니다.</p>
    </>
  );
}

function Memo() {
  const location = useLocation();
  const { num } = useParams();
  console.log(location);

  return (
    <>
      <h3>StudyDetail {num}번 Memo</h3>
      <p>
        {num}번 게시물에 오신것을 환영합니다. 여기는 {num}번 게시물의 메모장입니다.
      </p>
      <p>여러분이 fetch를 통해 백엔드에서 채팅 정보를 받아와야 합니다.</p>
    </>
  );
}

function Notice() {
  return <h2>Notice</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>index</Link>
      <br />
      <Link to='/login'>login</Link>
      <br />
      <Link to='/study'>study</Link>
      <br />
      <Link to='/notice'>notice</Link>
      <Routes>
        <Route path='/' element={<Index />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/study/' element={<Study />}></Route>
        <Route path='/study/:num' element={<StudyDetail />}></Route>
        {/* <Route path="/study/:num/:test" element={<Test />}/> */}
        <Route path='/study/:num/chat' element={<Chat />} />
        <Route path='/study/:num/memo' element={<Memo />} />
        <Route path='/notice' element={<Notice />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// 최종 목표
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study/6
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo
// https://www.studyin.co.kr/notice
// https://www.studyin.co.kr/notice/recruit
// https://www.studyin.co.kr/notice/business

// step 1
// https://www.studyin.co.kr/
// https://www.studyin.co.kr/login
// https://www.studyin.co.kr/study
// https://www.studyin.co.kr/notice

// step 2
// https://www.studyin.co.kr/study/6 를 들어갔을 때에
// <p>6번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 6번 게시물을 요청하셔야 합니다.</p>

// step 3
// https://www.studyin.co.kr/study/6/chat
// https://www.studyin.co.kr/study/6/memo 를 들어갔을 때에 각각

// <p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 채팅방입니다.</p>
// <p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 메모방입니다.</p>
