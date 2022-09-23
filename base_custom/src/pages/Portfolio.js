import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Card from '../components/Card'

import { getPortfolios } from '../lib/services/eventService'

export default function Portfolio() {
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

  console.log(portfolios)
  return (
    <>
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
