import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/animations.css'
import './styles/loading_animations.css'
import './styles/queries.css'
import './styles/variables.css'
import Main from './modules/Main.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
