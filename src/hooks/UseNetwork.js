import React, { useState, useEffect } from 'react';

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);
    //웹 사이트가 online이면 true를 반환한다.
    const handleChange = () => {
      if(typeof onChange === "function"){
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);//online이면 true, offline이면 false를 setStatus한다.
    }
    useEffect(()=>{
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
    // err
    //   () => {
    //     window.removeEventListener("online", handleChange);
    //     window.removeEventListener("offline", handleChange);
    //   } // err
    }, []);//이벤트 리스너는 한번만 추가하면 됨
    return status;
  }
  
  const UseNetwork = () => {
    const handleNetworkChange = (online) => {
      console.log(online?"We just went online": "We are offline");
    }
    const onLine = useNetwork(handleNetworkChange);
  
    return(
      <div className="App">
       <h1>{onLine ? "Online" : "Offline" }</h1>
      </div>
    )
  }
  
  export default UseNetwork;