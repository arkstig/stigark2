import ReactTooltip from 'react-tooltip'

export default function Card({ title, ingress, slug, kategorier, imageUrl }) {
  const path = `/portfolio/${slug}`

  console.log(slug)
  return (
    <article>
      <div className="informasjon">
        <p className="ingress">Utvalgt arbeid</p>
        <h2>{title}</h2>
        <p>{ingress}</p>
        <ul>
          {kategorier.map((kategori) => (
            <li key={kategori}>
              <span className="lineUp">
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
              effect="float"
              place="bottom"
            >
              Se prosessen.
            </ReactTooltip>
          </a>
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
