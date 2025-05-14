import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './AutoFocus.module.css'

// 전화번호 입력 로직을 위한 커스텀 훅
function usePhoneInput() {
  // 전화번호 상태를 하나의 객체로 관리
  const [phoneState, setPhoneState] = useState({
    values: ['', '', ''],
    maxLengths: [3, 4, 4]
  });
  
  // refs 배열 생성
  const inputRefs = [useRef(null), useRef(null), useRef(null)];
  
  // 입력 필드 간 이동 함수
  const moveField = useCallback((currentIndex, direction) => {
    const targetIndex = currentIndex + direction;
    if (targetIndex >= 0 && targetIndex < inputRefs.length) {
      inputRefs[targetIndex].current?.focus();
    }
  }, [inputRefs]);

  // 입력값 변경 핸들러 함수
  const handleInputChange = useCallback((index, value) => {
    // 숫자만 입력 가능하도록 필터링
    const filteredValue = value.replace(/[^0-9]/g, '');
    
    // 상태 업데이트
    setPhoneState(prev => {
      const newValues = [...prev.values];
      newValues[index] = filteredValue;
      return { ...prev, values: newValues };
    });
    
    // 최대 길이 입력 완료시 다음 필드로 자동 이동
    if (filteredValue.length === phoneState.maxLengths[index] && index < inputRefs.length - 1) {
      moveField(index, 1);
    }
  }, [phoneState.maxLengths, moveField, inputRefs.length]);

  // 키 입력 핸들러 함수
  const handleKeyDown = useCallback((e, index) => {
    const { key, target } = e;
    
    // 백스페이스 키 처리 (빈 필드에서)
    if (key === 'Backspace' && target.value === '' && index > 0) {
      moveField(index, -1);
    } 
    // 오른쪽 화살표 키 처리 (커서가 맨 뒤에 있을 때)
    else if (key === 'ArrowRight' && 
             target.selectionStart === target.value.length && 
             index < inputRefs.length - 1) {
      moveField(index, 1);
    } 
    // 왼쪽 화살표 키 처리 (커서가 맨 앞에 있을 때)
    else if (key === 'ArrowLeft' && 
             target.selectionStart === 0 && 
             index > 0) {
      moveField(index, -1);
    }
  }, [moveField, inputRefs.length]);

  return {
    values: phoneState.values,
    inputRefs,
    handleInputChange,
    handleKeyDown
  };
}

function AutoFocus() {
  const { values, inputRefs, handleInputChange, handleKeyDown } = usePhoneInput();

  // body 배경색을 변경하는 useEffect
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#f9f9f9';
    
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  // 첫 번째 입력 필드로 자동 포커스
  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  // 입력 필드 렌더링 함수
  const renderInputField = (index) => (
    <input
      key={index}
      type="tel"
      ref={inputRefs[index]}
      value={values[index]}
      onChange={(e) => handleInputChange(index, e.target.value)}
      onKeyDown={(e) => handleKeyDown(e, index)}
      maxLength={index === 0 ? 3 : 4}
      className={styles.phoneInput}
      placeholder={index === 0 ? "010" : "0000"}
      inputMode="numeric"
      pattern="[0-9]*"
      aria-label={`전화번호 ${index === 0 ? '앞' : index === 1 ? '중간' : '뒷'}자리`}
    />
  );

  return (
    <div className={styles.container}>
      <div className={styles.phoneForm}>
        <h2>전화번호 입력</h2>
        <div className={styles.inputContainer}>
          {renderInputField(0)}
          <span className={styles.separator} aria-hidden="true">-</span>
          {renderInputField(1)}
          <span className={styles.separator} aria-hidden="true">-</span>
          {renderInputField(2)}
        </div>
      </div>
    </div>
  );
}

export default React.memo(AutoFocus); 