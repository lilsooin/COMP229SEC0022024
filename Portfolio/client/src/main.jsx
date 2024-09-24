import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * Filename: main.jsx
 * Student’s Name: Suin Lee 
 * StudentID: 301369995
 * Date: 2024-09-24
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
