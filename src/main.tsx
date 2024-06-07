import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {CountriesProvider} from "./context/CountriesAPI";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CountriesProvider>
          <App />
      </CountriesProvider>
  </React.StrictMode>,
)
