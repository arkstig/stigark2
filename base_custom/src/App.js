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

export default function App() {
  // Write JavaScript, use Hooks, add state and more

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
      <Footer />
    </>
  )
}
