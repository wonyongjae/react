import React, { useEffect, useState } from 'react';
import '../App.css';

const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    const onScroll = (event) => {
      setState({y: window.scrollY, x: window.scrollX});
    }
    
    console.log(state);//check point!!! 
    
    useEffect(()=> {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return {state};
  }

  const UseScroll = () => {
    const {state} = useScroll();
    const x = state.x; const y = state.y;
    return(
      <div className="App" style={{width:"1000vh", height: "1000vh"}}>
       <h1 style={{ position: "fixed", color: y > 1000 && x > 100 ? "red" : "blue"}}>Hello</h1>
      </div>
    )
  }
  
  export default UseScroll;