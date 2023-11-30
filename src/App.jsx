// App.js
import React from 'react';
import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Header from './components/Header'

function App() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Routes>
    </>
  )
}

export default App
