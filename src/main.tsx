import React from 'react'
import ReactDOM from 'react-dom/client'

import Main from './modules/Main.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)