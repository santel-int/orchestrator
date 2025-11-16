import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import type { EnvVar, Port } from "../types/container"
import Loader from "../components/ui/Loader"
import ContainerDetails from "../components/forms/ContainerDetails"

type ContainerData = {
  id: string
  name: string
  git_url: string
  git_branch: string
  env_vars?: EnvVar[]
  ports?: Port[]
}

export default function Container() {
  const { id } = useParams<{ id: string }>()
  const [container, setContainer] = useState<ContainerData | null>(null)
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
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl grid gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Container Details</h1>
        <p className="text-sm text-gray-500 mt-1">
          Edit container information and configuration.
        </p>
      </div>

      <ContainerDetails
        submitButtonText="Update Container"
        containerId={container.id}
        initialData={{
          name: container.name,
          git_url: container.git_url,
          git_branch: container.git_branch,
          env_vars: container.env_vars || [],
          ports: container.ports || [],
        }}
      />
    </div>
  )
}
