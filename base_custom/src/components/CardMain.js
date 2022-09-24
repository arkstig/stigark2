export default function CardMain({
  title,
  ingress,
  slug,
  kategorier,
  imageUrl,
}) {
  const path = `/portfolioMain/${slug}`

  return (
    <article>
      <div className="bgPortfolio">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="bildeMain"
        >
          <div className="informasjonMain">
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
