import { useState, useEffect } from 'react'

function Containers() {
  const [response, setResponse] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        setLoading(true)
        const backendUrl = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${backendUrl}/containers`)
        const data = await res.json()
        setResponse(JSON.stringify(data, null, 2))
      } catch (error) {
        setResponse(`Error: ${error}`)
      } finally {
        setLoading(false)
      }
    }
    fetchContainers()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>Containers</h1>
      <pre>{response}</pre>
    </>
  )
}

export default Containers

