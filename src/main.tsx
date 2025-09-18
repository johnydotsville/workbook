import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@components/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NoteView } from './components/NoteView'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/workbook'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/notes/*" element={<NoteView />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


// Вот так работает главная страница
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/workbook" element={<App />} />
//         <Route path="/workbook/notes/*" element={<NoteView />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>,
// )

