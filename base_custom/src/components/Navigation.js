import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import ReactTooltip from 'react-tooltip'
import useScrollListener from '../hooks/useScrollListener'

export default function Navigation() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#ffe26a' : '#FCFCFC',
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
        <span className="logo">Stig Ark</span>
      </NavLink>
      <nav>
        <ul className="navigasjon">
          <NavLink style={linkStyle} to="/">
            <li>Hjem</li>
          </NavLink>

          <NavLink style={linkStyle} to="/portfolioMain">
            <li>Arbeid</li>
          </NavLink>

          <NavLink style={linkStyle} to="/ommeg">
            <li>Om meg</li>
          </NavLink>

          <NavLink style={linkStyle} to="/contact">
            <li>Kontakt</li>
          </NavLink>
        </ul>
        
        {/* <a data-tip data-for="cV" href="index.html">
          <div className="cv">Curriculum Vitae</div>
        </a>
        <ReactTooltip
          backgroundColor="#ed0b70"
          textColor="black"
          id="cV"
          effect="float"
          place="bottom"
        >
          Last ned min CV.
        </ReactTooltip> */}
      </nav>
    </header>
  )
}
