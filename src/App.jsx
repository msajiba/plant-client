import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Login/Register/Register';

function App() {


  return (
    <>
    
      <Header> </Header>
    
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      
      </Routes>
      

      <Footer> </Footer>
      <ToastContainer> </ToastContainer>
    
    </>
  )
}

export default App
