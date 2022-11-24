import { useState, useEffect, useContext } from 'react';

import Card from '../../components/Card/Card';
import Cart from '../../components/Cart/Cart';
import FailLoadData from '../../components/Shared/FailLoadData/FailLoadData';

// import { data } from '../../database/data'
import { callAPIResponse } from '../../database/callAPI';
import './homePage.css';

export default function HomePage() {
  const [loadData, setLoadData] = useState(null);

  // 데이터가 찍히는 과정을 보기 위한 코드, 필수가 아니다.
  // useEffect(() => {
  //   console.log('로딩중...');
  // }, []);

  // useEffect(() => {
  //   if (loadData === null) {
  //     return;
  //   } else {
  //     console.log('로딩 완료!');
  //     console.log(loadData);
  //   }
  // }, [loadData]);

  useContext(callAPIResponse).then((data) => {
    console.log('세팅');
    setLoadData(data);
  });

  return (
    <main className='product'>
      {loadData !== null ? (
        <ul className='product-list'>
          {loadData.map((item) => (
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
