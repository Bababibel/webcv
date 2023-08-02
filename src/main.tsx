import React from 'react'
import ReactDOM from 'react-dom/client'

import Main from './modules/Main.tsx'
import './index.css'
import MainContextProvider from './misc/MainContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainContextProvider>
      <Main />
    </MainContextProvider>
  </React.StrictMode>,
)
