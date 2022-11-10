import { Header } from './Header';
import { Form } from './Form';
import { ResultLoad } from './ResultLoad';
import { Result } from './Result';
import { Footer } from './Footer';

export default function Main() {
  return (
    <>
      <Header />
      <Form />
      <ResultLoad />
      <Result />
      <Footer />
    </>
  );
}
