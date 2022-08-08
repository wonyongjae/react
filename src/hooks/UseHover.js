
// const useHover = (onClick) => {
//   const element = useRef();
//   useEffect(() => {
//     // Mount 상태에서만 동작한다. didUpdate
//     if (element.current) {
//       element.current.addEventListener("mouseenter", onClick);
//     }
//     return () => {
//       // WillUnMount 때 호출 한다.
//       if (element.current) {
//         element.current.removeEventListener("mouseenter", onClick);
//       }
//     };
//   }, []);
//   return element;
// };

// export default function App() {
//   const sayHello = () => console.log("say hello");
//   const title = useHover(sayHello);

//   return (
//     <div className="App">
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// }