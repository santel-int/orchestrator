import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import type { EnvVar } from "../types/container"
import Loader from "../components/ui/Loader"

type ContainerDetails = {
  id: string
  name: string
  git_url: string
  git_branch: string
  env_vars?: EnvVar[]
}

export default function Container() {
  const { id } = useParams<{ id: string }>()
  const [container, setContainer] = useState<ContainerDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContainer = async () => {
      if (!id) {
        setError("No container ID provided")
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const backendUrl = import.meta.env.VITE_BACKEND_URL
        const response = await fetch(`${backendUrl}/containers/${id}`)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch container: ${response.statusText}`)
        }
        
        const data = await response.json()
        setContainer(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load container")
      } finally {
        setLoading(false)
      }
    }

    fetchContainer()
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center">
        <Loader />
      </div>
    )
  }

  if (error || !container) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Container Details</h1>
        <p className="text-red-500 mt-4">{error || "Container not found"}</p>
        <Link to="/containers" className="text-blue-500 mt-4 inline-block">
          Back to Containers
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl grid gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Container Details</h1>
        <p className="text-sm text-gray-500 mt-1">
          View container information and configuration.
        </p>
      </div>

      <div className="grid gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Name</h2>
          <p className="text-gray-900">{container.name}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Git URL</h2>
          <p className="text-gray-900">{container.git_url}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Git Branch</h2>
          <p className="text-gray-900">{container.git_branch}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Environment Variables</h2>
          {container.env_vars && container.env_vars.length > 0 ? (
            <div className="grid gap-2">
              {container.env_vars.map((envVar, index) => (
                <div key={index} className="text-gray-900">
                  <span className="font-mono">{envVar.key}</span> = <span className="font-mono">{envVar.value}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No environment variables configured</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <Link to="/containers" className="text-blue-500">
          Back to Containers
        </Link>
      </div>
    </div>
  )
}
