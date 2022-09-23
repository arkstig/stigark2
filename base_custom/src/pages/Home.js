import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Card from '../components/Card'

import { getPortfolios } from '../lib/services/eventService'

export default function Home() {
  const [portfolios, setPortfolios] = useState('')

  useEffect(() => {
    try {
      const getPortfoliosData = async () => {
        const data = await getPortfolios()
        setPortfolios(data)
      }
      getPortfoliosData()
    } catch (error) {
      // Sender feilmelding tilbake om noe går galt
      throw new Error(error)
    }
  }, [])
  return (
    <>
      <article className="home">
        <p className="ingress">Hei, mitt navn er</p>
        <h1>Stig Ark.</h1>
        <h2>
          Jeg <span className="under1">designer</span> og{' '}
          <span className="under2">utvikler</span> digitale produkter.
        </h2>
        <p>
          Jeg er en front-end utvikler/designer med fokus på brukeropplevelse,
          god informasjonsarkitektur, responsivt design basert på innhold og
          tilgjengelighet. Velkommen til min personlige nettside og portefølje.
        </p>
        <Link to="/portfolio">
          <button type="button">Se mitt arbeid!</button>
        </Link>
      </article>
      <div className="portfolios">
        {portfolios &&
          portfolios?.map((portfolio) => (
            <Card
              key={portfolio.id}
              title={portfolio.title}
              ingress={portfolio.ingress}
              live={portfolio.live}
              reddit={portfolio.reddit}
              slug={portfolio.portfoliosSlug}
              kategorier={portfolio.kategoriSet}
              imageUrl={portfolio.imageUrl}
            />
          ))}
      </div>
      <div>
        <Link to="/portfolioMain">
          <button>Se hele porteføljen</button>
        </Link>
      </div>
    </>
  )
}
