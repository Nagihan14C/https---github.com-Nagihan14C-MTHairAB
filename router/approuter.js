import React from 'react'
import {Routes, Route } from "react-router-dom";

import Home from '../pages/home';
import About from '../pages/about';
import Tjanster from '../pages/tjanster';
import Kontakt1 from '../pages/kontakt1';



export function AppRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tjanster' element={<Tjanster/>}></Route>

        <Route path='/kontakt1' element={<Kontakt1/>}></Route>
        <Route path='/about' element={<About/>}></Route>


    </Routes>
  )
}
