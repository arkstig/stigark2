import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

export default function Aside() {
  return (
    <aside>
      <ul className="social">
        <li>
          <a href="mailto:stig.ark@gmail.com">
            <FontAwesomeIcon icon={faAt} className="fa-solid fa-at fa-lg" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/stigark/">
            <FontAwesomeIcon
              className="fa-brands fa-linkedin-in fa-lg"
              icon={faLinkedinIn}
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/arkstig/">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-brands fa-github fa-lg"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/stigark">
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-brands fa-instagram fa-lg"
            />
          </a>
        </li>
      </ul>
    </aside>
  )
}
