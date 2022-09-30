import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { getPortfolios } from '../lib/services/eventService'
import Loading from '../components/Loading'

export default function Home() {
  const [portfolios, setPortfolios] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      const getPortfoliosData = async () => {
        setLoading(true)
        const data = await getPortfolios()
        setPortfolios(data)
        setLoading(false)
      }
      getPortfoliosData()
    } catch (error) {
      // Sender feilmelding tilbake om noe går galt
      throw new Error(error)
    }
  }, [])
  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="gridHome">
          <article className="home">
            <p className="ingress">Hjem</p>
            <h1>Jeg utvikler og designer digitale produkter.</h1>
            <p>Siden er under konstruksjon.</p>
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
        </div>
      )}
    </div>
  )
}
