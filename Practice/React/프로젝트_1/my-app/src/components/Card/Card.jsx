import React, { useRef } from 'react';
import ProductImg from './ProductImage/ProductImage';
import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';
import './card.css';

export default function Card({ productName, price, thumbnailImg }) {
  const likeBtn = useRef();

  function helloLikeBtn(e) {
    // console.log(e);
    // console.log(e.currentTarget.classList);
    e.currentTarget.classList.toggle('on');
  }

  return (
    <li className='product-item'>
      <div className='product-img'>
        <ProductImg {...{ thumbnailImg, productName }} />
      </div>

      <ProductName {...{ productName }} />
      <button
        red={likeBtn}
        onClick={helloLikeBtn}
        className='like-btn'
      ></button>
      <div className='product-price'>
        <ProductPrice {...{ price }} />
      </div>
    </li>
  );
}
