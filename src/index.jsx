import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import NavBar from "./components/navbar"
import NotFound from "./components/NotFound";
import UserList from "./components/User/UserList";
import UserCreate from "./components/User/UserCreate";
import UserEdit from "./components/User/UserEdit";
import SearchComponent from "./components/searchComponent";
import Form from "./components/validatorInput";
import App from './App';

// Styles
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar></NavBar>
    <div className='container my-3'>
      <Routes>
        <Route path="/Welcome" element={<App></App>}></Route>
        <Route path="/contact" element={<SearchComponent></SearchComponent>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/" element={<UserList></UserList>}></Route>
        <Route path="/create" element={<UserCreate></UserCreate>}></Route>
        <Route path='/edit/:id' element={ <UserEdit></UserEdit>} />
        <Route path='/form' element={<Form></Form>}/>
      </Routes>
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

