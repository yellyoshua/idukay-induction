import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import WazeProvider from './providers/WazeProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WazeProvider initialWaze={[
      [1, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 1],
      [0, 0, 1, 0, 1],
    ]}>
      <App />
    </WazeProvider>
  </React.StrictMode>
)
