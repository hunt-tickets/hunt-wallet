import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import { WalletPage } from './pages/WalletPage'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/ticket/:token" element={<WalletPage />} />
            <Route path="/" element={<WalletPage />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
