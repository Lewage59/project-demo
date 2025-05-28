import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import AutoFormatIdCardInputDemo from './examples/auto-format-id-card-input'
import styles from './App.module.css'

function Nav() {
  const location = useLocation();
  return (
    <nav className={styles.navbar}>
      <Link
        to="/"
        className={location.pathname === '/' ? styles.active : ''}
      >首页</Link>
      <Link
        to="/auto-format-id-card-input"
        className={location.pathname === '/auto-format-id-card-input' ? styles.active : ''}
      >自动格式化身份证输入框</Link>
    </nav>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div>
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        } />
        <Route path="/auto-format-id-card-input" element={<AutoFormatIdCardInputDemo />} />
      </Routes>
    </Router>
  )
}

export default App
