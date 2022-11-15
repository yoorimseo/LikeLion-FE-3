// module.css를 사용하면 class명에 고유값을 추가해주어서 겹치지 않도록 한다.
import React from 'react';
import Test from './components/Test';
// import './app.css';
import styles from './app.module.css';

const App = () => {
  return (
    <>
      <h1>hello world</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita
        dicta molestias fugiat distinctio. Perspiciatis natus excepturi
        molestiae beatae. Voluptate voluptatum praesentium ducimus consequuntur
        quas quos error iusto? Voluptates, esse?
      </p>
      <Test />
    </>
  );
};

export default App;
