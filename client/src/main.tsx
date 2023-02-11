import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import GenerateImage from './pages/GenerateImage'
import Essay from './pages/Essay'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/image/generate' element={<GenerateImage />} />
        <Route path='/essay' element={<Essay />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
