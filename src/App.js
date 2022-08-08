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

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import UseClick from './hooks/UseClick';
import UseConfirm from './hooks/UseConfirm';
import UseEffect from './hooks/UseEffect';
import UseInput from './hooks/UseInput';
import UsePreventLeave from './hooks/UsePreventLeave';
import UseState from './hooks/UseState';
import UseTabs from './hooks/UseTabs';
import UseTitle from './hooks/UseTitle';

function App(){
  return (
    // <UseState />
    // <UseInput />
    // <UseTabs />
    // <UseEffect />
    // <UseTitle />
    // <UseClick />
    // <UseConfirm />
    <UsePreventLeave />
  );
}

export default App;

