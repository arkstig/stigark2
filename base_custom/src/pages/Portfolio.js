import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
  return (
    <div className="portfolios">
      <article>
        <div className="informasjon">
          <p className="ingress">Utvalgt arbeid</p>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elite sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur.
          </p>
          <ul>
            <li>HTML</li>
            <div className="circle" />
            <li>CSS</li>
            <div className="circle" />
            <li>React</li>
            <div className="circle" />
            <li>Sanity</li>
            <div className="circle" />
            <li>Javascript</li>
            <div className="circle" />
            <li>Github</li>
          </ul>
          <div className="buttons">
            <button type="button">
              <a href="casestudy.html">Case Study</a>
            </button>
            <div>
              <button type="button" className="www">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="fa-solid fa-arrow-up-right-from-square"
                />
              </button>
              <button type="button" className="github">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fa-brands fa-github fa-lg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="bilde" />
      </article>
      <article>
        <div className="bilde2" />
        <div className="informasjon2">
          <p className="ingress">Utvalgt arbeid</p>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elite sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur.
          </p>
          <ul>
            <li>HTML</li>
            <div className="circle" />
            <li>CSS</li>
            <div className="circle" />
            <li>React</li>
            <div className="circle" />
            <li>Sanity</li>
            <div className="circle" />
            <li>Javascript</li>
            <div className="circle" />
            <li>Github</li>
          </ul>
          <div className="buttons">
            <button type="button">Case Study</button>
            <div>
              <button type="button" className="www">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="fa-solid fa-arrow-up-right-from-square"
                />
              </button>
              <button type="button" className="github">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fa-brands fa-github fa-lg"
                />
              </button>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="informasjon">
          <p className="ingress">Utvalgt arbeid</p>
          <h1>Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elite sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur.
          </p>
          <ul>
            <li>HTML</li>
            <div className="circle" />
            <li>CSS</li>
            <div className="circle" />
            <li>React</li>
            <div className="circle" />
            <li>Sanity</li>
            <div className="circle" />
            <li>Javascript</li>
            <div className="circle" />
            <li>Github</li>
          </ul>
          <div className="buttons">
            <button type="button">Case Study</button>
            <div>
              <button type="button" className="www">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="fa-solid fa-arrow-up-right-from-square"
                />
              </button>
              <button type="button" className="github">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fa-brands fa-github fa-lg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="bilde" />
      </article>
    </div>
  )
}
