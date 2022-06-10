import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.min.css'
import BaseRouter from './routes'

function App() {
  return (
    <Router>
      <BaseRouter />
    </Router>
  )
}

export default App
