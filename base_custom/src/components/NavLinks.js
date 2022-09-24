import { NavLink } from 'react-router-dom'

export default function NavLinks() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#ffe26a' : '#FCFCFC',
  })

  return (
    <nav className="navigasjon-web">
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
    </nav>
  )
}
