import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import App from './pages/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(e: any) => console.log('dom error: ', e)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
