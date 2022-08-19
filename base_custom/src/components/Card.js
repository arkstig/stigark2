import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'

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
            <button data-tip data-for="caseStudy" type="button">
              Case Study
            </button>
            <ReactTooltip
              backgroundColor="#ed0b70"
              textColor="black"
              id="caseStudy"
              effect="solid"
              place="bottom"
            >
              Se prosessen.
            </ReactTooltip>
          </a>
          <div>
            <a href={live} target="_blank" rel="noreferrer">
              <button data-tip data-for="wwwW" type="button" className="www">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="fa-solid fa-arrow-up-right-from-square"
                />
              </button>
              <ReactTooltip
                backgroundColor="#ed0b70"
                textColor="black"
                id="wwwW"
                effect="solid"
                place="bottom"
              >
                Se prosjektet live.
              </ReactTooltip>
            </a>
            <a href={reddit} target="_blank" rel="noreferrer">
              <button
                data-tip
                data-for="gitHub"
                type="button"
                className="github"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fa-brands fa-github fa-lg"
                />
              </button>
              <ReactTooltip
                backgroundColor="#ed0b70"
                textColor="black"
                id="gitHub"
                effect="solid"
                place="bottom"
              >
                Se koden på github.
              </ReactTooltip>
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
