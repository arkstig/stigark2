import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Aside from './components/Aside'
import Footer from './components/Footer'
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
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navigation />
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
    </ThemeContext.Provider>
  )
}
