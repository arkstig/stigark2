import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip'

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
          <a data-tip data-for="ePost" href="mailto:stig.ark@gmail.com">
            <FontAwesomeIcon icon={faAt} className="fa-solid fa-at fa-lg" />
          </a>
          <ReactTooltip
            backgroundColor="#ed0b70"
            textColor="black"
            id="ePost"
            place="right"
            effect="float"
            width="100px"
            overridePosition={() => ({ left: 40, top: -10 })}
          >
            Send meg en epost!
          </ReactTooltip>
        </li>
        <li>
          <a
            data-tip
            data-for="linkedIn"
            href="https://www.linkedin.com/in/stigark/"
          >
            <FontAwesomeIcon
              className="fa-brands fa-linkedin-in fa-lg"
              icon={faLinkedinIn}
            />
          </a>
          <ReactTooltip
            backgroundColor="#ed0b70"
            textColor="black"
            id="linkedIn"
            place="right"
            effect="float"
            width="100px"
            overridePosition={() => ({ left: 40, top: 50 })}
          >
            Besøk min LinkedIn!
          </ReactTooltip>
        </li>
        <li>
          <a data-tip data-for="gitHub2" href="https://github.com/arkstig/">
            <FontAwesomeIcon
              icon={faGithub}
              className="fa-brands fa-github fa-lg"
            />
          </a>
          <ReactTooltip
            backgroundColor="#ed0b70"
            textColor="black"
            id="gitHub2"
            place="right"
            effect="float"
            width="100px"
            overridePosition={() => ({ left: 40, top: 100 })}
          >
            Besøk min Github!
          </ReactTooltip>
        </li>
        <li>
          <a
            data-tip
            data-for="instaGram"
            href="https://www.instagram.com/stigark"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="fa-brands fa-instagram fa-lg"
            />
          </a>
          <ReactTooltip
            backgroundColor="#ed0b70"
            textColor="black"
            id="instaGram"
            place="right"
            effect="float"
            width="100px"
            overridePosition={() => ({ left: 40, top: 160 })}
          >
            Besøk min instagram!
          </ReactTooltip>
        </li>
      </ul>
    </aside>
  )
}
