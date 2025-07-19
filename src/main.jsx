import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import One from './one.jsx';
import 'animate.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <One />
  </StrictMode>,
)
