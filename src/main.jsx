import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import BasicExample from './examples/BasicExample.jsx'
import CounterExample from './examples/CounterExample.jsx'
import TodoExample from './examples/TodoExample.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/basic" element={<BasicExample />} />
        <Route path="/counter" element={<CounterExample />} />
        <Route path="/todo" element={<TodoExample />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
