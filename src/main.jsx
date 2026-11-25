// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/caveat/400.css'
import '@fontsource/caveat/600.css'
import '@fontsource/caveat/700.css'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)