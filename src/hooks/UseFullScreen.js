import React, { useRef } from 'react';

const useFullscreen = callback => {
    const element = useRef();
    const runCb = isFull => {
      if (callback && typeof callback === "function") {
        callback(isFull);
      }
    };
    const intoFull = () => { // full화면으로 변환하는 함수
      if (element.current) {
        if (element.current.requestFullscreen) { // chrome, safari
          element.current.requestFullscreen();
        } else if (element.current.mozRequestFullScreen) { // firefox
          element.current.mozRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) { // opera
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) { // microsoft
          element.current.msRequestFullscreen();
        }
        runCb(true);
      }
    };
    const exitFull = () => { // full화면을 해제하는 함수
        document.exitFullscreen();
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
        runCb(false);
      };
      return { element, intoFull, exitFull };
    };





const UseFullScreen = () => {
    const onFullS = isFull => { // callback 함수
      console.log(isFull ? "Full" : "Small");
    };
    const { element, intoFull, exitFull } = useFullscreen(onFullS);
    return (
      <div className="App">
        <h1>Hello</h1>
        <div ref={element}>
            <div>
                <img src="../../image/moon3.jpg"/>
            </div>
          <button onClick={exitFull}>exitFull</button>
          <button onClick={intoFull}>intoFull</button>
        </div>
      </div>
    );
  };

  export default UseFullScreen;