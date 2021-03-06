import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from "./contexts/index"
import App from "./components/App";
import Login from "./components/Login";
import {Register} from "./components/StopReRender";
import Home from "./components/Login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <UserProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

