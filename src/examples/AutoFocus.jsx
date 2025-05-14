import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './AutoFocus.module.css'

function AutoFocus() {
  // 전화번호 상태 관리
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [phone3, setPhone3] = useState('');

  // 입력 필드에 대한 ref 생성
  const phone1Ref = useRef(null);
  const phone2Ref = useRef(null);
  const phone3Ref = useRef(null);
  
  // 모든 입력 필드를 배열로 관리
  const phoneRefs = [phone1Ref, phone2Ref, phone3Ref];

  // body 배경색을 변경하는 useEffect
  useEffect(() => {
    const originalBackgroundColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = 'white';
    
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  // 첫 번째 입력 필드로 자동 포커스
  useEffect(() => {
    if (phone1Ref.current) {
      phone1Ref.current.focus();
    }
  }, []);

  // 입력 필드 간 이동 함수
  const moveField = (currentIndex, direction) => {
    const targetIndex = currentIndex + direction;
    if (targetIndex >= 0 && targetIndex < phoneRefs.length) {
      phoneRefs[targetIndex].current.focus();
    }
  };

  // 입력값 변경 핸들러 함수
  const handleInputChange = (setter, value, index) => {
    // 숫자만 입력 가능하도록 필터링
    const filteredValue = value.replace(/[^0-9]/g, '');
    setter(filteredValue);
    
    // 최대 길이 입력 완료시 다음 필드로 자동 이동
    const maxLength = index === 0 ? 3 : 4;
    if (filteredValue.length === maxLength && index < phoneRefs.length - 1) {
      moveField(index, 1);
    }
  };

  // 키 입력 핸들러 함수
  const handleKeyDown = (e, index) => {
    const { key, target } = e;
    
    // 백스페이스 키 처리 (빈 필드에서)
    if (key === 'Backspace' && target.value === '' && index > 0) {
      moveField(index, -1);
    } 
    // 오른쪽 화살표 키 처리 (커서가 맨 뒤에 있을 때)
    else if (key === 'ArrowRight' && 
             target.selectionStart === target.value.length && 
             index < phoneRefs.length - 1) {
      moveField(index, 1);
    } 
    // 왼쪽 화살표 키 처리 (커서가 맨 앞에 있을 때)
    else if (key === 'ArrowLeft' && 
             target.selectionStart === 0 && 
             index > 0) {
      moveField(index, -1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.phoneForm}>
        <h2>전화번호 입력</h2>
        <div className={styles.inputContainer}>
          <input
            type="tel"
            ref={phone1Ref}
            value={phone1}
            onChange={(e) => handleInputChange(setPhone1, e.target.value, 0)}
            onKeyDown={(e) => handleKeyDown(e, 0)}
            maxLength={3}
            className={styles.phoneInput}
            placeholder="010"
            inputMode="numeric"
            pattern="[0-9]*"
            aria-label="전화번호 앞자리"
          />
          <span className={styles.separator} aria-hidden="true">-</span>
          <input
            type="tel"
            ref={phone2Ref}
            value={phone2}
            onChange={(e) => handleInputChange(setPhone2, e.target.value, 1)}
            onKeyDown={(e) => handleKeyDown(e, 1)}
            maxLength={4}
            className={styles.phoneInput}
            placeholder="0000"
            inputMode="numeric"
            pattern="[0-9]*"
            aria-label="전화번호 중간자리"
          />
          <span className={styles.separator} aria-hidden="true">-</span>
          <input
            type="tel"
            ref={phone3Ref}
            value={phone3}
            onChange={(e) => handleInputChange(setPhone3, e.target.value, 2)}
            onKeyDown={(e) => handleKeyDown(e, 2)}
            maxLength={4}
            className={styles.phoneInput}
            placeholder="0000"
            inputMode="numeric"
            pattern="[0-9]*"
            aria-label="전화번호 뒷자리"
          />
        </div>
        {phone1 && phone2 && phone3 && (
          <div className={styles.result}>
            입력된 전화번호: {phone1}-{phone2}-{phone3}
          </div>
        )}
      </div>
    </div>
  );
}

export default AutoFocus 