import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AutoFormatIdCardInputDemo from './examples/auto-format-id-card-input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">首页</Link> |
        <Link to="/auto-format-id-card-input" style={{ marginLeft: 8 }}>自动格式化身份证输入框</Link>
      </nav>
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
