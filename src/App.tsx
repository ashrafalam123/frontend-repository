import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout'
import AboutUs from './pages/AboutUs'
import Information from './pages/Information'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Information />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
