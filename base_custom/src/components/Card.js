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
  imageUrl,
}) {
  const path = `/portfolio/${slug}`

  console.log(slug)
  return (
    <article>
      <div className="informasjon">
        <p className="ingress">Utvalgt arbeid</p>
        <h1>{title}</h1>
        <p>{ingress}</p>
        <ul>
          {kategorier.map((kategori) => (
            <li key={kategori}>
              <span className="lineUp">
                <div className="circle" />
                {kategori.charAt(0).toUpperCase() + kategori.slice(1)}
              </span>
            </li>
          ))}
        </ul>
        <div className="buttons">
          <a href={path}>
            <button type="button">Case Study</button>
          </a>
          <div>
            <a href={live} target="_blank" rel="noreferrer">
              <button type="button" className="www">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="fa-solid fa-arrow-up-right-from-square"
                />
              </button>
            </a>
            <a href={reddit} target="_blank" rel="noreferrer">
              <button type="button" className="github">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fa-brands fa-github fa-lg"
                />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="bilde"
      />
    </article>
  )
}
