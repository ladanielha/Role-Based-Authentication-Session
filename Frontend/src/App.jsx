import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './component/Login'
import Users from './pages/Users'
import Products from './pages/Products'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/users" element={<Users/>} />
      <Route path="/users/add" element={<AddUser/>} />
      <Route path="/users/edit/:id" element={<EditUser/>} />
      <Route path="/project" element={<Products/>} />
      <Route path="/project/add" element={<AddProduct/>} />
      <Route path="/project/edit/:id" element={<EditProduct/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
