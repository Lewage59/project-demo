import { useEffect, useState, useRef, useCallback } from "react";

/**
 * Demo 目的：测试在 useEffect 中使用监听 callback 函数中，依赖更新问题测试和解决。
 * @returns 
 */
export default function DemoUseEffectCallback() {
  const [count, setCount] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    console.log("use-effect-callback element clicked", count);
  }, [count]);

  useEffect(() => {
    const divElement = divRef.current;

    if (divElement) {
      divElement.addEventListener("click", handleClick);
    }

    return () => {
      if (divElement) {
        divElement.removeEventListener("click", handleClick);
      }
    };
  }, [handleClick]);

  return (
    <div className="use-effect-callback" ref={divRef}>
      <button onClick={() => setCount(count + 1)}>
        点击了 {count} 次
      </button>
    </div>
  );
}