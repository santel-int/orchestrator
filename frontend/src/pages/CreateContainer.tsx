import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function CreateContainer() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [gitUrl, setGitUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL
      const response = await fetch(`${backendUrl}/containers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          git_url: gitUrl,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.detail || 'Failed to create container')
      }

      // Redirect to containers page on success
      navigate('/containers')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-3xl font-bold text-gray-900">Create Container</h1>
      </div>
      
      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Enter container name"
            />
          </div>

          <div>
            <label htmlFor="gitUrl" className="block text-sm font-medium text-gray-700 mb-2">
              Git URL
            </label>
            <input
              type="url"
              id="gitUrl"
              value={gitUrl}
              onChange={(e) => setGitUrl(e.target.value)}
              required
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="https://github.com/user/repo.git"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border-2 border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={loading}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Button style="primary" color="blue">
                {loading ? 'Creating...' : 'Create Container'}
              </Button>
            </button>
            <button
              type="button"
              onClick={() => navigate('/containers')}
              disabled={loading}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Button style="outline" color="gray">
                Cancel
              </Button>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

