import React from 'react'
import {Routes, Route} from "react-router"
import Login from './Component/Login'
import Signup from './Component/Signup'
import Todo from './Component/Todo'


export default function App() {
  return (
    <>
    <Routes>
      {/* <Route path='/' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/> */}
      <Route path='/' element={<Todo/>}/>
    </Routes>
    </>
  )
}
