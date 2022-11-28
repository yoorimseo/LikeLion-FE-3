import React from 'react';

export default function Author({ userName, profileImg, created }) {
  return (
    <dl className='author-wrap'>
      <dt className='a11y-hidden'>Author</dt>
      <dd className='author'>
        <img
          src='https://github.com/weniv/react-blog/blob/react/public/assets/profile.jpg?raw=true'
          alt=''
        />{' '}
        Chilli
      </dd>
      <dt className='a11y-hidden'>Created</dt>
      <dd className='created'>2022.05.25</dd>
    </dl>
  );
}
