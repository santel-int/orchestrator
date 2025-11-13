import { Plus, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

type ContainerResponse = {
  id: string
  name: string
}

function Containers() {
  const [response, setResponse] = useState<ContainerResponse[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        setLoading(true)
        const backendUrl = import.meta.env.VITE_BACKEND_URL
        const res = await fetch(`${backendUrl}/containers`)
        const data = await res.json()
        setResponse(data)
      } catch (error) {
        setResponse([{ id: 'error', name: `Error: ${error}` }])
      } finally {
        setLoading(false)
      }
    }
    fetchContainers()
  }, [])

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-gray-900">Containers</h1>

        <Link to="/containers/create">
          <Button style="secondary" color="gray">
            <Plus />
            Create Container
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {loading && (
          <div className="col-span-full flex justify-center">
            <Loader />
          </div>
        )}
        {!loading && response.map((container: ContainerResponse) => (
            <Card key={container.id} className="hover:bg-gray-100 hover:border-gray-300 flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-500">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold leading-none">{container.name}</h2>
                <p className="text-sm text-gray-400 leading-none">{container.id}</p>
              </div>
            </Card>
        ))}
        {!loading && response.length === 0 && (
          <div className="text-gray-400 col-span-full flex justify-center">
            <p>No containers found.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Containers

