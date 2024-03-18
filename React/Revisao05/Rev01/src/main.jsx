import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> //chama 2 vezes em desenvolvimento para proteger de erros
    <App />
  </React.StrictMode>,
)
