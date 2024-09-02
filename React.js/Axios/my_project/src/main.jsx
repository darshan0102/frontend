import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Axios from '../src/axios/Axios.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Axios />
  </StrictMode>,
)
