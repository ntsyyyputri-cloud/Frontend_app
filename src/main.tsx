import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './pages/App.tsx'
import Authpage from './pages/Authpage.tsx'
import Beranda from './pages/Beranda.tsx'
import History from './pages/History.tsx'
import Modul from './pages/Modul.tsx'
import Profle from './pages/Profile.tsx'
import Modul1 from './Components/modul/Modul1.tsx'
import Modul2 from './Components/modul/Modul2.tsx'
import Modul3 from './Components/modul/Modul3.tsx'
import Modul4 from './Components/modul/Modul4.tsx'
import Quiz1 from './quiz/quiz1.js'
import Quiz2 from './quiz/quiz2.js'
import Quiz3 from './quiz/quiz3.js'
import Quiz4 from './quiz/quiz4.js'
import Result from './quiz/Quizresult.tsx'
import Edit from './pages/EditProfile.tsx'
import Simulasi from './Simulasi/Simulasi.tsx'
import Selesai from './Simulasi/Selesai.tsx'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Authpage />} />
       
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/history" element={<History />} />
        <Route path="/modul" element={<Modul />} />
        <Route path="/profile" element={<Profle />} />
        <Route path="/modul1" element={<Modul1 />} />
        <Route path="/modul2" element={<Modul2 />} />
        <Route path="/modul3" element={<Modul3 />} />
        <Route path="/modul4" element={<Modul4 />} />
        <Route path="/quiz1" element={<Quiz1 />} />
        <Route path="/quiz2" element={<Quiz2 />} />
        <Route path="/quiz3" element={<Quiz3 />} />
        <Route path="/quiz4" element={<Quiz4 />} />
        <Route path="/result" element={<Result />} />
        <Route path="/edit-profile" element={<Edit />} />
        <Route path="/simulasi" element={<Simulasi />} />
        <Route path="/selesai" element={<Selesai />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)