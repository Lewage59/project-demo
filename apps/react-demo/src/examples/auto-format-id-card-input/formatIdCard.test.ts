import { describe, it, expect } from 'vitest';
import { formatIdCard } from './formatIdCard';

describe('formatIdCard', () => {
  it('正常身份证号格式化', () => {
    expect(formatIdCard('123456199001011234')).toBe('123456 19900101 1234');
  });

  it('输入带有空格和小写x', () => {
    expect(formatIdCard('123456 19900101 123x')).toBe('123456 19900101 123X');
  });

  it('输入超长截断', () => {
    expect(formatIdCard('1234561990010112345678')).toBe('123456 19900101 1234');
  });

  it('输入不足6位', () => {
    expect(formatIdCard('123')).toBe('123');
  });

  it('输入6-14位', () => {
    expect(formatIdCard('1234567')).toBe('123456 7');
    expect(formatIdCard('1234561990')).toBe('123456 1990');
  });

  it('输入14-18位', () => {
    expect(formatIdCard('1234561990010112')).toBe('123456 19900101 12');
  });

  it('输入有非法字符', () => {
    expect(formatIdCard('abc123456-1990x0101-1234xyz')).toBe('123456 1990X0101 1234');
  });

  it('输入为空', () => {
    expect(formatIdCard('')).toBe('');
  });
}); 