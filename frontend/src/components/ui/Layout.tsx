import { Link, Outlet } from 'react-router-dom'
import Button from './Button'
import { Boxes } from 'lucide-react'

export default function Layout() {
  return (
    <div className="min-h-screen">
      <nav className="py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <Button style="ghost" color="gray">
              <Boxes />
              Orchestrator
            </Button>
          </Link>
          <div className="flex">
            <Link to="/containers">
              <Button style="ghost" color="blue">
                Containers
              </Button>
            </Link>
            <Link to="/volumes">
              <Button style="ghost" color="blue">
                Volumes
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 pb-4">
        <Outlet />
      </main>
    </div>
  )
}
