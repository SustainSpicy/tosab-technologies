import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IndustriesPage from './pages/IndustriesPage'
import FAQPage from './pages/FAQPage'
import CaseStudiesPage from './pages/CaseStudiesPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/faqs" element={<FAQPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
      </Routes>
    </Router>
  )
}

export default App