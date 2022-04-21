import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { AlertProvider } from './context/AlertContext'

const container = document.getElementById('root')

if (container !== null) {
  createRoot(container).render(
    <React.StrictMode>
      <AlertProvider>
        <App />
      </AlertProvider>
    </React.StrictMode>
  )
}
