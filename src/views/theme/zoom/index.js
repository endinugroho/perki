import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useLocation } from "react-router-dom";
const queryString = require('query-string');



// function App1() {
//   const location = useLocation();

//   return (
//     <React.StrictMode>
//     <App  title={URLSearchParams(window.location.search).get("hasil")} title2={"Hockey2"} />
//   </React.StrictMode>,
//   document.getElementById('root')
//   );
// }

// export default App1;

ReactDOM.render(
  <React.StrictMode>
    <App  title={"hallo"} title2={"Hockey2"} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const { id } = useParams();

reportWebVitals();


