import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Card({
  title,
  ingress,
  live,
  reddit,
  slug,
  kategorier,
}) {
  console.log(kategorier)
  return (
    <article>
      <div className="informasjon">
        <p className="ingress">Utvalgt arbeid</p>
        <h1>{title}</h1>
        <p>{ingress}</p>
        <ul>
          {kategorier.map((kategori) => (
            <li key={kategori}>{kategori}</li>
          ))}
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
  )
}
