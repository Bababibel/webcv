import React from 'react'
import ReactDOM from 'react-dom/client'

import Main from './modules/Main.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
    <h1 className="text-blue-500">test</h1>
  </React.StrictMode>,
)
