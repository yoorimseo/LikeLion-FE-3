import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData';
import { data } from '../../database/data';
import './homePage.css';

export default function HomePage() {
  // console.log(data); // 데이터가 잘 들어왔는지 확인
  // const data = null;  // 데이터가 정상적으로 들어오지 않았을 경우, NotFound 페이지가 뜨는지 확인
  return (
    <main className='product'>
      {data !== null ? (
        <ul className='product-list'>
          {data.map((item) => (
            <Card
              key={item.id}
              {...item}
            />
          ))}
          <Cart />
        </ul>
      ) : (
        <FailLoadData />
      )}
    </main>
  );
}
