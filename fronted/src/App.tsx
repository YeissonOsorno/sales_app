import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientPage from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
