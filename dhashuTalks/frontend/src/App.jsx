import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePage from './pages/Home/Home.jsx'
import AboutPage from './pages/About/About.jsx'
import ServicesPage  from './pages/Services/Services.jsx'
import FooterPage from './pages/Footer/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    <ServicesPage />
    <AboutPage />
    <FooterPage />

    </>
  )
}

export default App
