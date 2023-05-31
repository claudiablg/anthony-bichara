import { useState } from 'react'
import { Home } from '@/pages';
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>      
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Navigate to="/"/>}></Route>
    </Routes>
    </>

      
  )
}

export default App
