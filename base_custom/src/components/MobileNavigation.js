import { NavLink } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

export default function MobileNavigation() {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <AiOutlineMenu
      className="hamburger"
      size="30px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  )

  const closeIcon = (
    <AiOutlineClose
      className="hamburger"
      size="30px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  )

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#ffe26a' : '#FCFCFC',
  })

  const closeMobileMenu = () => setOpen(false)

  return (
    <nav className="navigasjon-mobile">
      {open ? closeIcon : hamburgerIcon}
      {open && (
        <ul>
          <NavLink onClick={() => closeMobileMenu()} style={linkStyle} to="/">
            <li>Hjem</li>
          </NavLink>

          <NavLink
            onClick={() => closeMobileMenu()}
            style={linkStyle}
            to="/portfolioMain"
          >
            <li>Arbeid</li>
          </NavLink>

          <NavLink
            onClick={() => closeMobileMenu()}
            style={linkStyle}
            to="/ommeg"
          >
            <li>Om meg</li>
          </NavLink>

          <NavLink
            onClick={() => closeMobileMenu()}
            style={linkStyle}
            to="/contact"
          >
            <li>Kontakt</li>
          </NavLink>
        </ul>
      )}
    </nav>
  )
}
