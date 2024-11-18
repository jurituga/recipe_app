import React from 'react'
import Page from './components/Page'
import Recepie from './components/Recepie'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}/>
        <Route index element={<Page />}/>
          <Route path="recipe" element={<Recepie />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
