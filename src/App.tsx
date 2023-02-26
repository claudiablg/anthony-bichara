import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
// import  About from './pages/About';
import { Home, About } from '@/pages';

import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/a-propos" element={<About />}></Route>
      <Route path="/services" element={<h1>Hi!</h1>}></Route>
      <Route path="*" element={<Navigate to="/"/>}></Route>
    </Routes>
  )
}

export default App
