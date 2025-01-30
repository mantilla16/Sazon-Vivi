// ENRUTAMIENTO DE LAS VIEWS

import { createRoot } from 'react-dom/client'

import Home from './view/home/home.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render( 
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)
