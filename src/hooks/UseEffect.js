import React, { useState, useEffect } from 'react';
import '../App.css';

const UseEffect = () => {
    const sayHello = () => {console.log("hello")};
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);

    // number 가 바귈때만 useEffect 실행
    useEffect(sayHello, [number]);

  return (
      <div className="App">
          <h1>Hello</h1>
          <button onClick={()=> {setNumber(number+1)}}>{number}</button>
          <button onClick={()=> {setAnumber(aNumber+1)}}>{aNumber}</button>
      </div>
  );
}

export default UseEffect;