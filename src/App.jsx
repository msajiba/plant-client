import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import AddNewInventory from './pages/ManageInvenotry/AddNewInventory';
import RequireAuth from './pages/Auth/RequireAuth/RequireAuth';
import NotFound from './pages/NotFound/NotFound';
import UpdateInventoryItem from './pages/ManageInvenotry/UpdateInventoryItem';
import ManageInventoryItem from './pages/ManageInvenotry/ManageInventoryItem';
import MyInventoryItems from './pages/ManageInvenotry/MyInventoryItems';


function App() {


  return (
    <>
    
      <Header> </Header>
    
      <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>

          <Route path='/inventory-add' element={
            <RequireAuth>
              <AddNewInventory> </AddNewInventory>
            </RequireAuth>
          }></Route>
        
          <Route path='/itemUpdate/:updateId' element={
            <RequireAuth>
                <UpdateInventoryItem> </UpdateInventoryItem>
            </RequireAuth>
          }></Route>
          
          <Route path='/manage-inventory' element={
            <RequireAuth>
                <ManageInventoryItem />
            </RequireAuth>
          }></Route>

          <Route path='/my-items' element={
            <RequireAuth>
                <MyInventoryItems />
            </RequireAuth>
          }></Route>
          
          <Route path='*' element={<NotFound />}></Route>

      </Routes>
      

      <Footer> </Footer>
      <ToastContainer> </ToastContainer>
    
    
    </>
  )
}

export default App
