import { useState } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>React 데모 예제 모음</h1>
      <br />
      <ul>
        <li>
          <Link to="/autofocus">자동 포커스 예제</Link>
        </li>
      </ul>
    </>
  )
}

export default App
