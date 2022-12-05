import { plus } from './plus.js';
import './style.css';
// import tiger from './tiger.png';
// import android from './android.png';

console.log(plus(3, 7));

// console.log('pw : ' + pw);

// console.log(process.env.NODE_ENV);

// console.log(dev);
// console.log(pro);

let env;
if (process.env.NODE_ENV === 'development') {
  env = dev;
} else {
  env = pro; // webpack.config.js > mode: 'production'으로 변경할 때 실행된다.
}

// console.log(env);

document.addEventListener('DOMContentLoaded', () => {
  // document.body.innerHTML = `<img src="${tiger}"><img src="${android}">`;
});
