// import ColaGenerator from "./components/colaGenerator.js";
import ColaGenerator from './components/colaGenerator(useFetch).js';
import Vendingmachine from './components/vendingmachine.js';

const colaGenerator = new ColaGenerator();
const vendingmachine = new Vendingmachine();

// Top-level await 이전에 사용했던 방법
// (async () => {
//   await colaGenerator.setup();
//   vendingmachine.setup();
// })();

// Top-level await이 나온 후 사용하는 방법
await colaGenerator.setup();
vendingmachine.setup();
// https://v8.dev/features/top-level-await
