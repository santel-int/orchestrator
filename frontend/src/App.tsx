import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [connected, setConnected] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBackendMessage = async () => {
      try {
        // Use environment variable or fallback to localhost
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000'
        const response = await fetch(backendUrl)
        if (response.ok) {
          const data = await response.json()
          setMessage(data.message)
          setConnected(true)
          setError(null)
        } else {
          setError('Failed to connect to backend')
          setConnected(false)
        }
      } catch (err) {
        setError('Failed to connect to backend')
        setConnected(false)
      }
    }

    fetchBackendMessage()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ 
            color: connected ? 'green' : 'red',
            fontWeight: 'bold'
          }}>
            {connected ? '✓ Connected to backend' : '✗ Not connected to backend'}
          </p>
          {message && (
            <p style={{ marginTop: '0.5rem' }}>
              Message from backend: <strong>{message}</strong>
            </p>
          )}
          {error && (
            <p style={{ color: 'red', marginTop: '0.5rem' }}>
              {error}
            </p>
          )}
        </div>
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
    </>
  )
}

export default App
