import { Route, Routes } from 'react-router-dom'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import ScrollToTop from './components/Scrolltotop'
import Layout from './layout/Layout'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Ommeg from './pages/Ommeg'
import Portfolio from './pages/Portfolio'
import { getEvents } from './lib/services/eventService'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const getEventData = async () => {
    const events = await getEvents()
    console.log(events)
  }

  return (
    <>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="ommeg" element={<Ommeg />} />
        </Route>
      </Routes>
      <Aside />
      <button type="button" onClick={getEventData}>
        Hent data
      </button>
      <Footer />
    </>
  )
}
