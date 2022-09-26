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
    <div className="gridHome">
      <article className="home">
        <p className="ingress">Hjem</p>
        <h2>Jeg utvikler og designer digitale produkter.</h2>
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
        
      </div>
    </div>

  )
}
