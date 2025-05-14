import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BasicExample.module.css'

function BasicExample() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>기본 예제</h1>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>React 컴포넌트란?</h2>
        <p className={styles.description}>
          React 컴포넌트는 UI를 독립적이고 재사용 가능한 부분으로 분리하는 방법입니다.
          개념적으로 컴포넌트는 JavaScript 함수와 같습니다. 
          "props"라는 임의의 입력을 받고, 화면에 표시할 React 엘리먼트를 반환합니다.
        </p>
        
        <h3 className={styles.sectionTitle}>함수형 컴포넌트 예시:</h3>
        <pre className={styles.codeBlock}>
          {`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}
        </pre>
        
        <h3 className={styles.sectionTitle}>클래스 컴포넌트 예시:</h3>
        <pre className={styles.codeBlock}>
          {`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}
        </pre>
      </div>
      <div className={styles.navigation}>
        <Link to="/" className={styles.navLink}>메인으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default BasicExample 