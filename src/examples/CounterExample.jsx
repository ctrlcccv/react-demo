import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CounterExample.module.css'

function CounterExample() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>카운터 예제</h1>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>useState 훅 사용하기</h2>
        <p className={styles.description}>
          useState는 React의 가장 기본적인 훅으로, 함수형 컴포넌트에서 
          상태(state)를 추가할 수 있게 해줍니다.
        </p>
        
        <div className={styles.counterDemo}>
          <h3 className={styles.counterValue}>현재 카운트: {count}</h3>
          <div className={styles.counterButtons}>
            <button 
              onClick={() => setCount(count - 1)}
              className={`${styles.button} ${styles.decreaseButton}`}
            >
              감소
            </button>
            <button 
              onClick={() => setCount(0)}
              className={`${styles.button} ${styles.resetButton}`}
            >
              초기화
            </button>
            <button 
              onClick={() => setCount(count + 1)}
              className={`${styles.button} ${styles.increaseButton}`}
            >
              증가
            </button>
          </div>
        </div>
        
        <div className={styles.codeExplanation}>
          <h3 className={styles.sectionTitle}>코드 설명:</h3>
          <pre className={styles.codeBlock}>
            {`import React, { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  )
}`}
          </pre>
        </div>
      </div>
      <div className={styles.navigation}>
        <Link to="/" className={styles.navLink}>메인으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default CounterExample 