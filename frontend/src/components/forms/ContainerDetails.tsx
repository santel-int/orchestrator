import { useState, useEffect } from "react"
import { TextInput, Label } from "../ui/Input"
import KeyValueSection from "./KeyValueSection"
import type { EnvVar, Port } from "../../types/container"
import { Button } from "../ui"
import { Link, useNavigate } from "react-router-dom"

type ContainerDetailsProps = {
  submitButtonText: string
  containerId?: string
  initialData?: {
    name: string
    git_url: string
    git_branch: string
    env_vars?: EnvVar[]
    ports?: Port[]
  }
}

export default function ContainerDetails({ submitButtonText, containerId, initialData }: ContainerDetailsProps) {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [gitUrl, setGitUrl] = useState("")
  const [gitBranch, setGitBranch] = useState("main")
  const [envVars, setEnvVars] = useState<EnvVar[]>([])
  const [ports, setPorts] = useState<Port[]>([])
  // const [volumes, setVolumes] = useState<Volume[]>([])

  // Load initial data when in edit mode
  useEffect(() => {
    if (initialData) {
      setName(initialData.name || "")
      setGitUrl(initialData.git_url || "")
      setGitBranch(initialData.git_branch || "main")
      setEnvVars(initialData.env_vars || [])
      setPorts(initialData.ports || [])
    }
  }, [initialData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL
      const url = containerId 
        ? `${backendUrl}/containers/${containerId}`
        : `${backendUrl}/containers`
      const method = containerId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          git_url: gitUrl,
          git_branch: gitBranch,
          env_vars: envVars,
          ports: ports,
          // volumes: volumes,
        }),
      })

      if (response.ok) {
        navigate("/containers")
      } else {
        const errorText = await response.text()
        console.error(`Failed to ${containerId ? 'update' : 'create'} container:`, errorText)
      }
    } catch (error) {
      console.error(`Error ${containerId ? 'updating' : 'creating'} container:`, error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-2">

          <div>
            <Label htmlFor="name">Name</Label>
            <TextInput
              id="name"
              value={name}
              onChange={setName}
              required
              placeholder="hello-world"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="md:col-span-2">
              <Label htmlFor="gitUrl">Git URL</Label>
              <TextInput
                id="gitUrl"
                value={gitUrl}
                onChange={setGitUrl}
                required
                placeholder="https://github.com/user/repository"
              />
            </div>
            <div className="md:col-span-1">
              <Label htmlFor="gitBranch">Git Branch</Label>
              <TextInput
                id="gitBranch"
                value={gitBranch}
                onChange={setGitBranch}
                required
                placeholder="main"
              />
            </div>
          </div>
        </div>

        <KeyValueSection
          title="Environment Variables"
          description="Add environment variables for your container."
          items={envVars}
          field1Key="key"
          field1Label="Key"
          field1Placeholder="KEY_NAME"
          field2Key="value"
          field2Label="Value"
          field2Placeholder="value"
          separator="="
          onAdd={() => setEnvVars([...envVars, { key: "", value: "" }])}
          onRemove={(index) => setEnvVars(envVars.filter((_, i) => i !== index))}
          onUpdate={(index, field, value) =>
            setEnvVars(envVars.map((envVar, i) => i === index ? { ...envVar, [field]: value } : envVar))
          }
        />

        <KeyValueSection
          title="Exposed Ports"
          description="Specify ports to expose from your container."
          items={ports}
          field1Key="host"
          field1Label="Host"
          field1Placeholder="3000"
          field2Key="container"
          field2Label="Container"
          field2Placeholder="8080"
          separator=":"
          onAdd={() => setPorts([...ports, { host: "", container: "" }])}
          onRemove={(index) => setPorts(ports.filter((_, i) => i !== index))}
          onUpdate={(index, field, value) =>
            setPorts(ports.map((port, i) => i === index ? { ...port, [field]: value } : port))
          }
        />

        {/* <KeyValueSection
          title="Volumes"
          description="Mount shared volumes to your container."
          items={volumes}
          field1Key="name"
          field1Label="Volume Name"
          field1Placeholder="volume-name"
          field2Key="mountPath"
          field2Label="Mount Path"
          field2Placeholder="/path/in/container"
          separator="→"
          onAdd={() => setVolumes([...volumes, { name: "", mountPath: "" }])}
          onRemove={(index) => setVolumes(volumes.filter((_, i) => i !== index))}
          onUpdate={(index, field, value) =>
            setVolumes(volumes.map((volume, i) => i === index ? { ...volume, [field]: value } : volume))
          }
        /> */}

        <div className="flex gap-4">
          <button type="submit">
            <Button style="primary" color="blue">
              {submitButtonText}
            </Button>
          </button>
          <Link to="/containers">
            <Button style="secondary" color="gray">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
  )
}