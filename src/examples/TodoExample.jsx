import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './TodoExample.module.css'

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
    <div className={styles.container}>
      <h1 className={styles.title}>할일 목록 예제</h1>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>React로 CRUD 기능 구현하기</h2>
        <p className={styles.description}>
          이 예제는 할일 목록(Todo List)을 관리하는 간단한 CRUD 애플리케이션입니다.
          React의 상태 관리와 이벤트 처리를 이해하는데 도움이 됩니다.
        </p>
        
        <div className={styles.todoApp}>
          <div className={styles.todoInput}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="할 일을 입력하세요"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              className={styles.inputField}
            />
            <button onClick={addTodo} className={styles.addButton}>추가</button>
          </div>
          
          <ul className={styles.todoList}>
            {todos.map(todo => (
              <li 
                key={todo.id} 
                className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className={styles.checkbox}
                />
                <span className={styles.todoText}>{todo.text}</span>
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  className={styles.deleteButton}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.navigation}>
        <Link to="/" className={styles.navLink}>메인으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default TodoExample 