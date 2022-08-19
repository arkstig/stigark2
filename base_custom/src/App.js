import { createContext, useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import { RiSunLine, RiSunFill, RiMoonFill, RiMoonLine } from 'react-icons/ri'
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
    setTimeout(() => setLoading(false), 4000)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {loading === false ? (
        <div id={theme}>
          <Navigation />
          <div className="switch">
            <ReactSwitch
              offColor="#ffe26a"
              onColor="#120e37"
              offHandleColor="#120e37"
              onHandleColor="#ffe26a"
              handleDiameter={36}
              height={40}
              width={70}
              borderRadius={80}
              activeBoxShadow="0px 0px 1px 2px #fffc35"
              uncheckedIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 20,
                    color: '#ED0B70',
                    paddingRight: 2,
                  }}
                >
                  <RiSunLine />
                </div>
              }
              checkedIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 20,
                    color: '#FFE26A',
                  }}
                >
                  <RiMoonLine />
                </div>
              }
              uncheckedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    fontSize: 18,
                    color: '#FFE26A',
                  }}
                >
                  <RiMoonFill />
                </div>
              }
              checkedHandleIcon={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    color: '#ED0B70',
                    fontSize: 18,
                  }}
                >
                  <RiSunFill />
                </div>
              }
              className="react-switch"
              id="small-radius-switch"
              onChange={toggleTheme}
              checked={theme === 'light'}
            />
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
