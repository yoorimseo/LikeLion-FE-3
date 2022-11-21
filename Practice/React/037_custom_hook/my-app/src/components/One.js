// import React, { useState } from 'react';

// function One() {
//     const [value, setValue] = useState('');
//     function onChange(e) {
//         setValue(e.target.value);
//     }
//     return (
//         <>
//             <input type="text" onChange={onChange}/>
//             <div>
//                 {value}
//             </div>
//         </>
//     )
// }

// export default One;

import React from 'react';
import useYurim from '../Hook/useYurim';

function One() {
  const [value, onChange] = useYurim('');
  return (
    <>
      <input
        type='text'
        onChange={onChange}
      />
      <div>{value}</div>
    </>
  );
}
export default One;
