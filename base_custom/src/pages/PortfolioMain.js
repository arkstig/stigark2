import { useState, useEffect } from 'react'
import CardMain from '../components/CardMain'
import Loading from '../components/Loading'
import { getPortfoliosMain } from '../lib/services/eventService'

export default function PortfolioMain() {
  const [portfoliosMain, setPortfoliosMain] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      const getPortfoliosMainData = async () => {
        setLoading(true)
        const data = await getPortfoliosMain()
        setPortfoliosMain(data)
        setLoading(false)
      }
      getPortfoliosMainData()
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
        <div className="container2">
          <article className="home">
            <p className="ingress">Arbeid</p>
            <h1>Litt av mitt nyeste arbeid og student prosjekter.</h1>
            <p>Siden er under konstruksjon. Mer kommer fortløpende.</p>
          </article>
          <div className="portfoliosMain">
            {portfoliosMain &&
              portfoliosMain?.map((portfolio) => (
                <CardMain
                  key={portfolio.id}
                  title={portfolio.title}
                  ingress={portfolio.ingress}
                  live={portfolio.live}
                  reddit={portfolio.reddit}
                  slug={portfolio.portfoliosSlug}
                  kategorier={portfolio.kategoriSet}
                  imageUrl={portfolio.imageUrl}
                  colorcode={portfolio.colorcode}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
