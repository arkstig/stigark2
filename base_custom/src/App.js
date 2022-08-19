import { createContext, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Loading from './components/Loading'
import Navigation from './components/Navigation'
import ScrollToTop from './components/Scrolltotop'
import Layout from './layout/Layout'
import Contact from './pages/Contact'
import CurrentPortfolio from './pages/CurrentPortfolio'
import Home from './pages/Home'
import Ommeg from './pages/Ommeg'
import Portfolio from './pages/Portfolio'

export const ThemeContext = createContext(null)
export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {loading === false ? (
        <div id={theme}>
          <Navigation />
          <div className="switch">
            <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
          </div>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio">
                <Route index element={<Portfolio />} />
                <Route path=":slug" element={<CurrentPortfolio />} />
              </Route>
              <Route path="/ommeg" element={<Ommeg />} />
            </Route>
          </Routes>
          <Aside />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </ThemeContext.Provider>
  )
}
