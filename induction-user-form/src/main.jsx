import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UsersProvider from './providers/UsersProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>
)
