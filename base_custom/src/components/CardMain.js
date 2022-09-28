import { useState } from 'react'

export default function CardMain({
  title,
  ingress,
  slug,
  kategorier,
  imageUrl,
}) {
  const [isHovering, setIsHovering] = useState(false)
  const path = `/portfolioMain/${slug}`

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <article>
      <div
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        className="bgPortfolio"
      >
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="bildeMain"
        >
          {isHovering && (
            <div className="informasjonMain">
              <h1>{title}</h1>
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
                </a>
              </div>
            </div>
          )}
          <div className="informasjonMainMobile">
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
              </a>
            </div>
          </div>
          <div />
        </div>
      </div>
    </article>
  )
}
