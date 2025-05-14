import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CounterExample() {
  const [count, setCount] = useState(0)

  return (
    <div className="example-container">
      <h1>카운터 예제</h1>
      <div className="example-content">
        <h2>useState 훅 사용하기</h2>
        <p>
          useState는 React의 가장 기본적인 훅으로, 함수형 컴포넌트에서 
          상태(state)를 추가할 수 있게 해줍니다.
        </p>
        
        <div className="counter-demo">
          <h3>현재 카운트: {count}</h3>
          <div className="counter-buttons">
            <button 
              onClick={() => setCount(count - 1)}
              className="counter-button decrease"
            >
              감소
            </button>
            <button 
              onClick={() => setCount(0)}
              className="counter-button reset"
            >
              초기화
            </button>
            <button 
              onClick={() => setCount(count + 1)}
              className="counter-button increase"
            >
              증가
            </button>
          </div>
        </div>
        
        <div className="code-explanation">
          <h3>코드 설명:</h3>
          <pre>
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
      <div className="navigation">
        <Link to="/">메인으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default CounterExample 