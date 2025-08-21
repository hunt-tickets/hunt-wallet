import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WalletPage } from './pages/WalletPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ticket/:token" element={<WalletPage />} />
        <Route path="/" element={<WalletPage />} />
      </Routes>
    </Router>
  )
}

export default App
