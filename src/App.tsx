import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import About from './skills/About'
import Contact from './skills/Contact'
import Home from './skills/Home'
import PrivacyPolicy from './skills/PrivacyPolicy'
import Services from './skills/Services'
import TermsAndConditions from './skills/TermsAndConditions'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
