import ContainerDetails from "../components/forms/ContainerDetails"

export default function CreateContainer() {
  return (
    <div className="w-full max-w-3xl grid gap-4">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Create Container</h1>
        <p className="text-sm text-gray-500 mt-1">
          Create a new container from a Git repository.
        </p>
      </div>

      <ContainerDetails submitButtonText="Create Container" />
    </div>
  )
}
