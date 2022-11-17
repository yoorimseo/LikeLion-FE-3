import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function A() {
  return <h2>A</h2>;
}

function B() {
  return <h2>B</h2>;
}

function C() {
  const { num } = useParams();
  return <h2>c {num}</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/a'>A</Link>
      <br />
      <Link to='/b'>B</Link>
      <br />
      <Link to='/c'>C</Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/a' element={<A />}></Route>
        <Route path='/b' element={<B />}></Route>
        <Route path='/c/:num' element={<C />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
