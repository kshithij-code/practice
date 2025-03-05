import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Employee from './Employee';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <App />
//   </>
// );
const element =new Employee();
element.render();