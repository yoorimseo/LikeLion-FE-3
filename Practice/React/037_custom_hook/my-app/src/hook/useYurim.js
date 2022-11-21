import { useState } from 'react';

function useYurim(initState) {
  const [value, setValue] = useState(initState);
  function onChange(e) {
    setValue(e.target.value);
  }
  return [value, onChange];
}

export default useYurim;
