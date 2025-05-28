import React, { useState, useRef } from 'react';
import { formatIdCard } from './formatIdCard';
import styles from './index.module.css';

// 校验身份证号（简单校验：长度18且全为数字或最后一位X/x）
const validateIdCard = (id: string) => {
  const val = id.replace(/\s/g, '');
  return /^\d{17}(\d|X|x)$/.test(val);
};

// 自动格式化身份证号输入框组件
const AutoFormatIdCardInput: React.FC = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(formatIdCard(input));
    setError('');
  };

  // 处理粘贴
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text');
    setValue(formatIdCard(paste));
    setError('');
  };

  // 失焦时校验
  const handleBlur = () => {
    setIsFocused(false);
    const raw = value.replace(/\s/g, '');
    if (raw.length === 0) {
      setError('');
      return;
    }
    if (!validateIdCard(raw)) {
      setError('身份证号格式有误');
    } else {
      setError('');
    }
  };

  // 聚焦时
  const handleFocus = () => {
    setIsFocused(true);
  };

  // 清空输入
  const handleClear = () => {
    setValue('');
    setError('');
    inputRef.current?.focus();
  };

  const rawValue = value.replace(/\s/g, '');
  const isValid = validateIdCard(rawValue);

  return (
    <div
      className={[
        styles.card,
        error ? styles.cardError : '',
        isFocused && !error ? styles.cardFocused : '',
      ].join(' ')}
    >
      <h2 className={styles.title}>自动格式化身份证号输入框</h2>
      <div className={styles.inputWrapper}>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPaste={handlePaste}
          maxLength={21} // 18位+2空格+1
          placeholder="请输入身份证号"
          className={[
            styles.input,
            isFocused ? styles.inputFocused : '',
            error ? styles.inputError : '',
          ].join(' ')}
        />
        {value && (
          <button
            onClick={handleClear}
            className={styles.clearBtn}
            aria-label="清空"
            type="button"
          >
            ×
          </button>
        )}
      </div>
      <div
        className={styles.info}
        style={{ color: error ? '#ff4d4f' : undefined }}
      >
        {error ? (
          <b>{error}</b>
        ) : (
          <>
            当前值（去除空格）：<b>{rawValue}</b>
            {isValid && rawValue.length === 18 && (
              <span className={styles.success}>✔ 输入完成</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// 页面导出
const AutoFormatIdCardInputDemo: React.FC = () => <AutoFormatIdCardInput />;

export default AutoFormatIdCardInputDemo;
