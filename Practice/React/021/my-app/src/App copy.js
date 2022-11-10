import './app.css';
import { One } from './components/One.js';
import { Two } from './components/Two.js';

function App() {
  const style = { backgroundColor: 'darkgray', color: 'white' };
  return (
    <div className='App'>
      <div style={{ backgroundColor: 'black', color: 'white' }}>hello world 1</div>
      <div style={style}>hello world 2</div>

      <One />
      <Two />

      {/* <h1>test2</h1> */}

      {/* class로 써도 작동은 되지만 className으로 작성하는 것이 맞다. */}
      {/* <h2 class='hi'>test2</h2>
      <h2 class='hello'>test2</h2> */}

      <h2 className='hi'>test2</h2>
      <h2 className='hello'>test2</h2>
    </div>
  );
}

export default App;
