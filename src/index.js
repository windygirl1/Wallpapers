import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import bridge from '@vkontakte/vk-bridge'

bridge.send("VKWebAppInit");
function data () {
bridge.send("VKWebAppGetAuthToken", { 
  "app_id": 51453806, 
  "scope": "photos"
}).then(data => localStorage.setItem('token', data.access_token))
bridge.send("VKWebAppGetUserInfo").then(data => localStorage.setItem('userId', data.id))
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    {data()}
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
