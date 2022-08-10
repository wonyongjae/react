import React, { useEffect, useRef} from 'react';
import '../App.css';

const useFadeIn = (duration = 1, delay = 0) => {
  // err
  // if (typeof duration !== "number" || typeof delay !== "number") {
  //   return;
  // }
  // // return element;
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ${delay}s ease-in-out`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

  const UseFadaIn = () => {
    const fadeInH1 = useFadeIn(1);
    const fadeInP = useFadeIn(1, 0.5); // delay 옵션 추가
    return (
      <div className="App">
        <h1 {...fadeInH1}> Hello </h1>
        <p {...fadeInP}>Welcome</p>
      </div>
    );
}

export default UseFadaIn;