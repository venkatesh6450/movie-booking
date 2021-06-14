import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './NextApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




/*import React from "react";
import ReactDOM from "react-dom";
import NextApp from './NextApp';
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals';


const render = Component => {
  ReactDOM.render(
     <BrowserRouter>
        <Component/>
      </BrowserRouter>,
    document.getElementById('root')
  );
};

// Do this once
reportWebVitals();

render(NextApp);
*/