import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import type { EnvVar, Port, Volume } from "../types/container"
import KeyValueSection from "../components/forms/KeyValueSection"
import Button from "../components/ui/Button"
import { TextInput, Label } from "../components/ui/Input"

export default function CreateContainer() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [gitUrl, setGitUrl] = useState("")
  const [gitBranch, setGitBranch] = useState("main")
  const [envVars, setEnvVars] = useState<EnvVar[]>([])
  const [ports, setPorts] = useState<Port[]>([])
  const [volumes, setVolumes] = useState<Volume[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL
      const response = await fetch(`${backendUrl}/containers`, {
        method: "POST",
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
        console.error("Failed to create container:", errorText)
      }
    } catch (error) {
      console.error("Error creating container:", error)
    }
  }

  const createItemHandler = <T extends Record<string, string>>(
    items: T[],
    setItems: (items: T[]) => void
  ) => ({
    onAdd: (newItem: T) => setItems([...items, newItem]),
    onRemove: (index: number) => setItems(items.filter((_, i) => i !== index)),
    onUpdate: (index: number, field: keyof T, value: string) => {
      const updated = [...items]
      updated[index] = { ...updated[index], [field]: value }
      setItems(updated)
    },
  })

  const envVarsHandler = createItemHandler(envVars, setEnvVars)
  const portsHandler = createItemHandler(ports, setPorts)
  // const volumesHandler = createItemHandler(volumes, setVolumes)

  return (
    <div className="w-full max-w-3xl grid gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create Container</h1>
        <p className="text-sm text-gray-500 mt-1">
          Create a new container from a Git repository.
        </p>
      </div>

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
          onAdd={() => envVarsHandler.onAdd({ key: "", value: "" })}
          onRemove={envVarsHandler.onRemove}
          onUpdate={(index, field, value) =>
            envVarsHandler.onUpdate(index, field, value)
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
          onAdd={() => portsHandler.onAdd({ host: "", container: "" })}
          onRemove={portsHandler.onRemove}
          onUpdate={(index, field, value) =>
            portsHandler.onUpdate(index, field, value)
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
          onAdd={() => volumesHandler.onAdd({ name: "", mountPath: "" })}
          onRemove={volumesHandler.onRemove}
          onUpdate={(index, field, value) =>
            volumesHandler.onUpdate(index, field, value)
          }
        /> */}

        <div className="flex gap-4">
          <button type="submit">
            <Button style="primary" color="blue">
              Create Container
            </Button>
          </button>
          <Link to="/containers">
            <Button style="secondary" color="gray">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
