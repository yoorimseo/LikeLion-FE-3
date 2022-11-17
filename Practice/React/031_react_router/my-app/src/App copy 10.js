import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function Product() {
  return <h2>Product</h2>;
}

function ProductDetail() {
  const { num } = useParams();
  return <h2>Product Detail {num}</h2>;
}

function ProductDetailNotice() {
  const { num } = useParams();
  return <h2>Product Detail Notice {num}</h2>;
}

function Cart() {
  return <h2>Cart</h2>;
}

function Coupon() {
  return <h2>User Coupon</h2>;
}

function Question() {
  return <h2>User Question</h2>;
}

function Notice() {
  return <h2>User Notice</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/products/'>Product</Link>
      <br />
      <Link to='/cart'>Cart</Link>
      <br />
      <Link to='/users'>User</Link>
      <br />
      <Link to='/users/coupon'>Coupon</Link>
      <br />
      <Link to='/users/question'>Question</Link>
      <br />
      <Link to='/users/notice'>Notice</Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Product />}></Route>
        <Route path='/products/:num' element={<ProductDetail />}></Route>
        <Route path='/products/:num/notice' element={<ProductDetailNotice />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/users/*' element={<Outlet />}>
          <Route path='coupon' element={<Coupon />} />
          <Route path='question' element={<Question />} />
          <Route path='notice' element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
