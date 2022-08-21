import React from 'react';
import '../App.css';


const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      return;
    }
      // 알림 생성 함수
    const sandNotification = () => {
        // 알림이 사용자에 의해 차단되어있다면
      if (Notification.permission !== "granted") {
        // 알림 권한 요청을 보냄
        Notification.requestPermission().then((permission) => {
            // 다시 거절하면 실행 종료
          if (permission !== "granted") {
            return;
          } else {
            new Notification(title, options);
          }
        });
      } else {
        new Notification(title, options);
      }
    };
    return sandNotification;
  };

const UseNotification = () => { 
    const triggerNotif = useNotification("oh my god" , {
            body: "success!" 
        });
    return ( 
        <div>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    ); 
}; 
export default UseNotification;

  
  