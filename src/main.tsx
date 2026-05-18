import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SmoothScrollWrapper from './components/SmoothScrollWrapper.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SmoothScrollWrapper>
      <App />
    </SmoothScrollWrapper>
  </React.StrictMode>,
)
