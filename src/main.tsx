import React from 'react'
import ReactDOM from 'react-dom/client'
import Hotjar from '@hotjar/browser'
import App from './App.tsx'
import './styles/globals.scss'

Hotjar.init(3613833, 6)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
