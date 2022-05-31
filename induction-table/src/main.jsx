import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UsersProvider from './providers/UsersProvider'
import { data as users } from './data/users.json'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersProvider users={users}>
      <App />
    </UsersProvider>
  </React.StrictMode>
)
