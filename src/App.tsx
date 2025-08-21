import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { WalletPage } from './pages/WalletPage'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Router>
        <Routes>
          <Route path="/ticket/:token" element={<WalletPage />} />
          <Route path="/" element={<WalletPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
