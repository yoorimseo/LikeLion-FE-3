import React from 'react';
import Logo from '../../components/Logo';
import Profile from '../../components/Profile';

export default function Homepage({ id, email, img }) {
  return (
    <div>
      {/* 컴포넌트 이동은 react router 부분에서 구현할 예정이다. */}
      <Logo />
      <a href='#'>About</a>
      <br />
      <a href='#'>Contact</a>
      <br />
      <a href='#'>Notice</a>
      <br />
      <a href='#'>Service</a>
      <br />
      <a href='#'>UserInfo</a>
      <br />
      Homepage
      <p>{id}님 환영합니다.</p>
      <Profile email={email} img={img} />
    </div>
  );
}

// export default function Homepage(props) {
//   return (
//     <div>
//       {/* 컴포넌트 이동은 react router 부분에서 구현할 예정이다. */}
//       <Logo />
//       <a href='#'>About</a>
//       <br />
//       <a href='#'>Contact</a>
//       <br />
//       <a href='#'>Notice</a>
//       <br />
//       <a href='#'>Service</a>
//       <br />
//       <a href='#'>UserInfo</a>
//       <br />
//       Homepage
//       <p>{props.id}님 환영합니다.</p>
//     </div>
//   );
// }
