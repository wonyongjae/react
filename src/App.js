// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import UseAxios from './hooks/UseAxios';
import UseClick from './hooks/UseClick';
import UseConfirm from './hooks/UseConfirm';
import UseEffect from './hooks/UseEffect';
import UseFadaIn from './hooks/UseFadeIn';
import UseFullScreen from './hooks/UseFullScreen';
import UseInput from './hooks/UseInput';
import UseNetwork from './hooks/UseNetwork';
import UseNotification from './hooks/UseNotification';
import UsePreventLeave from './hooks/UsePreventLeave';
import UseScroll from './hooks/UseScroll';
import UseState from './hooks/UseState';
import UseTabs from './hooks/UseTabs';
import UseTitle from './hooks/UseTitle';

import Buttons from './Buttons/buttons';
import DatePickerComponent from './Buttons/DatePickerComponent';

    // fetch 로 해당 url로 부터 데이터를 요청
    // 그다음 요청을 받았다면 (then), 그 요청 받은 데이터(response)를 제이슨화 시켜줌(json())
    // 제이슨화 시켰다면 (then), 그 json을 콘솔로그에 찍어줌
    // fetch(`https://yts.mx/api/v2/list_movies.json`).then((response) => response.json()).then(json => console.log(json));

    // 위와 같은 방식으로 데이터를 받아와서 
    // fetch(`https://yts.mx/api/v2/list_movies.json`)
    // .then((response) => response.json())
    // .then((json) => {
      // json내에 있는 data내의 movies들을 set해서 넣어줌
      // setMovies(json.data.movies)
      // 그리고 setLoading을 false로 바꿔줘서 메모리 수도꼭지를 잠굼 
      // setLoading(false)



function App(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async await으로 then을 사용하지않고 비동기 처리
  const getMovies = async() => {

    // const response = await fetch(`https://yts.mx/api/v2/list_movies.json`);
    // const json = await response.json();

    // 위 코드 2줄을 한줄로 
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json`)).json();

    setMovies(json.data.movies)
    setLoading(false)
  }
  useEffect(()=> {

  },[])
  // set해준 movies를 콘솔로 찍음
  console.log(movies);
    getMovies()
  return (
    <div>
      {loading ? <h1>loading...</h1> : 
      <>
      <div>
        <DatePickerComponent />
        <Buttons />
      </div>
      <div>
        
        {movies.map(movie => 
        <div key={movie.id}>
          <h2>
            {movie.title}
          </h2>
          <h4>
            {movie.year}
          </h4>
        </div>)}
      </div>
      </>}
    </div>
    // <UseState />
    // <UseInput />
    // <UseTabs />
    // <UseEffect />
    // <UseTitle />
    // <UseClick />
    // <UseConfirm />
    // <UsePreventLeave />
    // <UseFadaIn />
    // <UseNetwork />
    // <UseScroll />
    // <UseFullScreen />
    // <UseNotification />
    // <UseAxios />
  );
}

export default App;

