// 优化后的身份证号格式化函数
export function formatIdCard(input: string): string {
  // 只保留数字和大写X
  let raw = input.replace(/[^0-9Xx]/g, '').toUpperCase().slice(0, 18);
  if (!raw) return '';
  // 直接用切片拼接
  const part1 = raw.slice(0, 6);
  const part2 = raw.slice(6, 14);
  const part3 = raw.slice(14);
  let result = part1;
  if (part2) result += ' ' + part2;
  if (part3) result += ' ' + part3;
  return result.trim();
} 