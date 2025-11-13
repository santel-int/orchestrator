import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Containers from './pages/Containers'
import CreateContainer from './pages/CreateContainer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="containers" element={<Containers />} />
        <Route path="containers/create" element={<CreateContainer />} />

        <Route path="*" />
      </Route>
    </Routes>
  )
}

export default App
