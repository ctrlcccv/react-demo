import React, { useState } from 'react'

function TodoExample() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 기초 배우기', completed: true },
    { id: 2, text: '컴포넌트 만들기', completed: false },
    { id: 3, text: '상태 관리 이해하기', completed: false }
  ])
  
  const [newTodo, setNewTodo] = useState('')
  
  const addTodo = () => {
    if (newTodo.trim() === '') return
    
    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    }
    
    setTodos([...todos, newItem])
    setNewTodo('')
  }
  
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  return (
    <div className="example-container">
      <h1>할일 목록 예제</h1>
      <div className="example-content">
        <h2>React로 CRUD 기능 구현하기</h2>
        <p>
          이 예제는 할일 목록(Todo List)을 관리하는 간단한 CRUD 애플리케이션입니다.
          React의 상태 관리와 이벤트 처리를 이해하는데 도움이 됩니다.
        </p>
        
        <div className="todo-app">
          <div className="todo-input">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="할 일을 입력하세요"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button onClick={addTodo}>추가</button>
          </div>
          
          <ul className="todo-list">
            {todos.map(todo => (
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span>{todo.text}</span>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navigation">
        <a href="#">메인으로 돌아가기</a>
      </div>
    </div>
  )
}

export default TodoExample 