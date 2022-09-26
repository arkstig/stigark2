import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ReactSwitch from 'react-switch'
import { RiSunLine, RiSunFill, RiMoonFill, RiMoonLine } from 'react-icons/ri'
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
import PortfolioMain from './pages/PortfolioMain'
import CurrentPortfolioMain from './pages/CurrentPortfolioMain'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
  }

  return (
    <div id={theme}>
      <Navigation />
      <div className="switch">
        <ReactSwitch
          offColor="#ffffff"
          onColor="#111111"
          offHandleColor="#111111"
          onHandleColor="#F6F6F6"
          handleDiameter={26}
          height={30}
          width={55}
          borderRadius={2}
          activeBoxShadow="0px 0px 1px 2px #fffc35"
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                color: '#111111',
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
                fontSize: 15,
                color: '#ffffff',
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
                fontSize: 13,
                color: '#ffffff',
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
                color: '#111111',
                fontSize: 13,
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
          <Route path="/portfolioMain">
            <Route index element={<PortfolioMain />} />
            <Route path=":slug" element={<CurrentPortfolioMain />} />
          </Route>
          <Route path="/ommeg" element={<Ommeg />} />
        </Route>
      </Routes>
      <Aside />
      <Footer />
    </div>
  )
}
