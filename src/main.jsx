// ENRUTAMIENTO DE LAS VIEWS

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './view/home/styles.css'
import Home from './view/home/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
