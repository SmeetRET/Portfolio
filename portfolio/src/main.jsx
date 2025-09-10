import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App bio="I am Smeet Rathod, a passionate web developer at Encircle Technologies. I love building modern web applications and continuously learning new technologies to become a world-class full-stack developer." />
  </StrictMode>,
)
