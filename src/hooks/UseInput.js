import React, { useState } from 'react';
import '../App.css';

const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChage = (event) => {
        // console.log(event.target);
        const {
            target: {value}
        } = event;
        let willUpdate = true;
        if(typeof validator === 'function'){
            willUpdate = validator(value);
        }
        if(willUpdate){
            setValue(value);
        }
    }
    return { value, onChage };
}


export const UseInput = () => { 
    // const maxLen = (value) => !value.includes("@");
    const maxLen = (value) => value.length <= 10;
  const name = useInput('Mr.', maxLen);
  return (
      <div className="App">
          <h1>Hello</h1>
          <input placeholder='Name' value={name.value} onChange={name.onChage} />
          {/* <input placeholder='Name' {...name} /> */}
      </div>
  );
}

export default UseInput;