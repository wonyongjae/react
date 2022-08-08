import React, { useEffect, useRef } from "react";
import '../App.css';

// ### useClick ###

// const UseClick = () => {
//     const input = useRef();
//     setTimeout(() => input.current.focus(), 5000);

//     return (
//         <div className="App">
//             <h1>Hello</h1>
//             <input ref={input} placeholder="la" />
//         </div>
//     );
// }

// --------------------------------------------------------




//  ### useHover ###

const useClick = (onClick) => {
    // if(typeof onClick !== "function"){
    //     return ;
    // }
    const element = useRef();
    useEffect(() => {
        if(element.current){
            element.current.addEventListener("click", onClick);
        }
        return () => {  //componentWillUnmount 할 때 return 을 적어줘야함
            if(element.current){
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};

const UseClick = () => {
    const sayHello = () => console.log("Say Hello !");
    const title = useClick(sayHello);

    return (
        <div className="App">
            <h1 ref={title}>Hello</h1>
            {/* <input ref={input} placeholder="la" /> */}
        </div>
    );

}

export default UseClick;

// const useClick = (onClick) => {
//     const element = useRef();
//     useEffect(() => {
//       // Mount 상태에서만 동작한다. didUpdate
//       if (element.current) {
//         element.current.addEventListener("click", onClick);
//       }
//       return () => {
//         // WillUnMount 때 호출 한다.
//         if (element.current) {
//           element.current.removeEventListener("click", onClick);
//         }
//       };
//     }, []);
//     return element;
//   };
  
//   export default function App() {
//     const sayHello = () => console.log("say hello");
//     const title = useClick(sayHello);
  
//     return (
//       <div className="App">
//         <h1 ref={title}>Hi</h1>
//       </div>
//     );
//   }
  



