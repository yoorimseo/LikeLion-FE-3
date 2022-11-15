import React from 'react';
import { useState } from 'react';

// const ContentContainer = ()

function Navbar() {
  const [listName, setListName] = useState('about');

  const handleChangeMenu = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id='about'
            style={listName === 'about' ? { color: 'red' } : { color: 'black' }}
            onClick={handleChangeMenu}
          >
            About
          </li>
          <li
            id='product'
            style={
              listName === 'product' ? { color: 'red' } : { color: 'black' }
            }
            onClick={handleChangeMenu}
          >
            Product
          </li>
          <li
            id='cart'
            style={listName === 'cart' ? { color: 'red' } : { color: 'black' }}
            onClick={handleChangeMenu}
          >
            Cart
          </li>
          <li
            id='contact'
            style={
              listName === 'contact' ? { color: 'red' } : { color: 'black' }
            }
            onClick={handleChangeMenu}
          >
            Contact
          </li>
        </ul>
      </nav>
      <Contents listName={listName} />
    </>
  );
}

function Contents({ listName }) {
  if (listName === 'about') {
    return (
      <div>
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          odit, quas quidem aliquam fugiat optio minus, exercitationem maiores
          maxime fuga officia! Distinctio odio minima, optio nisi ut aliquid
          impedit laboriosam!
        </p>
      </div>
    );
  } else if (listName === 'product') {
    return (
      <div>
        <h3>Product</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          odit, quas quidem aliquam fugiat optio minus, exercitationem maiores
          maxime fuga officia! Distinctio odio minima, optio nisi ut aliquid
          impedit laboriosam!
        </p>
      </div>
    );
  } else if (listName === 'cart') {
    return (
      <div>
        <h3>Cart</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          odit, quas quidem aliquam fugiat optio minus, exercitationem maiores
          maxime fuga officia! Distinctio odio minima, optio nisi ut aliquid
          impedit laboriosam!
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Contact</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          odit, quas quidem aliquam fugiat optio minus, exercitationem maiores
          maxime fuga officia! Distinctio odio minima, optio nisi ut aliquid
          impedit laboriosam!
        </p>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
