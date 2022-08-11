import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useScrollListener from '../hooks/useScrollListener'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#ED0B70' : '#FFE26A',
  })

  const [navClassList, setNavClassList] = useState([])
  const scroll = useScrollListener()

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = []

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('header-bar--hidden')

    setNavClassList(_classList)
  }, [scroll.y, scroll.lastY])

  return (
    <header className={navClassList.join(' ')}>
      <NavLink style={linkStyle} to="/">
        <span className="logo">SA</span>
      </NavLink>
      <nav>
        <ul className="navigasjon">
          <NavLink style={linkStyle} to="/">
            <li>Hjem</li>
          </NavLink>

          <NavLink style={linkStyle} to="/portfolio">
            <li>Portefølje</li>
          </NavLink>

          <NavLink style={linkStyle} to="/ommeg">
            <li>Om meg</li>
          </NavLink>

          <NavLink style={linkStyle} to="/contact">
            <li>Kontakt</li>
          </NavLink>
        </ul>
        <a href="index.html">
          <div className="cv">Curriculum Vitae</div>
        </a>
      </nav>
    </header>
  )
}
