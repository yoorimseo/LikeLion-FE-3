import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';

function App() {
  const user = {
    login: true,
    // login: false,
    id: 'seou1225',
    email: 'seou1225@naver.com',
    img: 'https://picsum.photos/200/200',
  };
  return <main>{user.login ? <Homepage id={user.id} email={user.email} img={user.img} /> : <Login />}</main>;
}

export default App;
