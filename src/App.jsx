import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React 데모 예제 모음</h1>
      <div className="card">
        <h2>예제 목록</h2>
        <ul>
          <li>
            <a href="#/basic">기본 예제</a> - React의 기본 구성요소
          </li>
          <li>
            <a href="#/counter">카운터 예제</a> - useState 훅 활용하기
          </li>
          <li>
            <a href="#/todo">할일 목록 예제</a> - CRUD 기능 구현하기
          </li>
        </ul>
      </div>
      <p className="read-the-docs">
        React와 함께 즐거운 웹 개발을 시작해보세요!
      </p>
    </>
  )
}

export default App
