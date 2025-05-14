import React from 'react'

function BasicExample() {
  return (
    <div className="example-container">
      <h1>기본 예제</h1>
      <div className="example-content">
        <h2>React 컴포넌트란?</h2>
        <p>
          React 컴포넌트는 UI를 독립적이고 재사용 가능한 부분으로 분리하는 방법입니다.
          개념적으로 컴포넌트는 JavaScript 함수와 같습니다. 
          "props"라는 임의의 입력을 받고, 화면에 표시할 React 엘리먼트를 반환합니다.
        </p>
        
        <h3>함수형 컴포넌트 예시:</h3>
        <pre>
          {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </pre>
        
        <h3>클래스 컴포넌트 예시:</h3>
        <pre>
          {`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
        </pre>
      </div>
      <div className="navigation">
        <a href="#">메인으로 돌아가기</a>
      </div>
    </div>
  )
}

export default BasicExample 