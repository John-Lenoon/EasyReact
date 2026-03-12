import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// ✅ 修正：从 react-router-dom 导入
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)