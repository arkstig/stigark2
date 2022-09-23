import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer>
      <div className="footer2">
        Laget av Stig Ark{' '}
        <FontAwesomeIcon icon={faCopyright} className="fa-solid fa-copyright" />{' '}
        2022
      </div>
      <div className="footer1" />{' '}
    </footer>
  )
}
