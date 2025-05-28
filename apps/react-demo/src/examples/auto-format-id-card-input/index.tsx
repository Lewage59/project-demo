import React, { useState } from 'react';
import { formatIdCard } from './formatIdCard';

// 自动格式化身份证号输入框组件
const AutoFormatIdCardInput: React.FC = () => {
  const [value, setValue] = useState('');

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(formatIdCard(input));
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #eee', borderRadius: 8 }}>
      <h2>自动格式化身份证号输入框</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength={21} // 18位+2空格+1
        placeholder="请输入身份证号"
        style={{ width: '100%', fontSize: 18, padding: 8, letterSpacing: 2 }}
      />
      <div style={{ marginTop: 16, color: '#888' }}>
        当前值（去除空格）：<b>{value.replace(/\s/g, '')}</b>
      </div>
    </div>
  );
};

// 页面导出
const AutoFormatIdCardInputDemo: React.FC = () => <AutoFormatIdCardInput />;

export default AutoFormatIdCardInputDemo;
