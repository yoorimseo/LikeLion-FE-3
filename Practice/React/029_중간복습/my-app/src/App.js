// npx create-react-app 생성할폴더이름 --template basic-react
// cd 생성한폴더이름
// npm install styled-components styled-reset

import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import shoppingCart from './assets/icon-shopping-cart-white.svg';
import heartOn from './assets/icon-heart-on.svg';
import heartOff from './assets/icon-heart.svg';

const GlobalStyle = createGlobalStyle`
/* reset 코드 + 커스텀 reset 코드 + 유틸리티코드 */
/* 한 줄 말줄임, 두 줄 말줄임... */
  ${reset}
  /* span {
    color: red;
    font-size: 12px;
  } */

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0);
  }

  * {
    box-sizing: border-box;
  }
`;

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`;

const IconShoppingCart = styled.a`
  background: #6327fe url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`;

const ItemProductName = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`;

const ItemProductPrice = styled.p`
  margin-top: 10px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #333333;
`;

const ItemProductCurrency = styled.span`
  margin-left: 2px;
  font-size: 16px;
  line-height: 20px;
  color: #333333;
`;

const IconHeartOn = styled.button`
  background: url(${heartOn}) no-repeat center;
  width: 22px;
  height: 22px;
  margin-left: 20px;
`;

const IconHeartOff = styled.button`
  background: url(${heartOff}) no-repeat center;
  width: 22px;
  height: 22px;
  margin-left: 20px;
`;

const ItemProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

async function requests() {
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data;
}

function ProductList() {
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  // if문은 한 번만 실행이 되고 다시 보지 않는다. 한 번만 렌더링 되게 하기 위함이다.
  if (dataLoadSwitch) {
    requests().then((productData) => setProductListData(productData));
    setDataLoadSwitch(false);
  }

  // 무한반복
  // requests().then((productData) => setProductListData(productData));
  // console.log(productListData);

  // const productListData = requests();
  // console.log(productListData); // 위와 같이 실행하면 promise이다.

  return (
    <ContainerProductList>
      {productListData.map((item) => (
        <ProductListItem key={item.id} productName={item.productName} price={item.price} thumbnailImg={item.thumbnailImg} />
      ))}
    </ContainerProductList>
  );
}

function ProductListItem({ productName, price, thumbnailImg }) {
  return (
    <ItemProductList>
      <ImgProduct src={'http://test.api.weniv.co.kr/' + thumbnailImg} alt={productName} />
      <ItemProductTitle>
        <ItemProductName>{productName}</ItemProductName>
        <HeartOnOff />
      </ItemProductTitle>

      <ItemProductPrice>
        {price}
        <ItemProductCurrency>원</ItemProductCurrency>
      </ItemProductPrice>
    </ItemProductList>
  );
}

function ShoppingCart() {
  return <IconShoppingCart href='#'></IconShoppingCart>;
}

function HeartOnOff() {
  const [heart, setHeart] = useState(false);

  function handleClickHeart() {
    if (heart) {
      setHeart(false);
    }
    setHeart(true);
  }

  return (
    <>
      <button onClick={handleClickHeart}>
        <span>{heart ? <IconHeartOn></IconHeartOn> : <IconHeartOff></IconHeartOff>}</span>
      </button>
    </>
  );
}

function App() {
  return (
    <ContainerMain>
      <GlobalStyle />
      <ProductList />
      <ShoppingCart />
    </ContainerMain>
  );
}
export default App;
