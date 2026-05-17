import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './pages/App.tsx'
import Onboarding from './pages/onboarding.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import Beranda from './pages/Beranda.tsx'
import History from './pages/History.tsx'
import Modul from './pages/Modul.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/history" element={<History />} />
        <Route path="/modul" element={<Modul />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)