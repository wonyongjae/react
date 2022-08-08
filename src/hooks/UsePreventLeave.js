import React, { useState, useEffect } from "react";

const usePreventLeave = () => {
    const listener = (event) => {
        event.preventDefault();
        event.returnValue = "";
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };

};

const UsePreventLeave = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <div className="App">  
            <h1>Hello</h1>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </div>
    );
};

// const usePreventLeave = () => {
//     const listener = event => {
//       event.preventDefault();
//       event.returnValue = "";
//     };
//     const enablePrevent = () => window.addEventListener("beforeunload", listener); // beforeunload 이벤트 리스너로 listener 지정
//     const disablePrevent = () =>
//       window.removeEventListener("beforeunload", listener); // beforeunload 이벤트 제거
//     return { enablePrevent, disablePrevent }; // 두 함수를 return
//   };
  
//   const UsePreventLeave = () => {
//     const { enablePrevent, disablePrevent } = usePreventLeave();
//     return (
//       <div className="App">
//         <h1>Hello</h1>
//         <button onClick={enablePrevent}>Protect</button>
//         <button onClick={disablePrevent}>Unprotect</button>
//       </div>
//     );
//   };

export default UsePreventLeave;