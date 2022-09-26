import { useState, useEffect } from 'react'
import CardMain from '../components/CardMain'
import { getPortfoliosMain } from '../lib/services/eventService'
import Loading from '../components/Loading'

export default function PortfolioMain() {
  const [portfoliosMain, setPortfoliosMain] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      const getPortfoliosMainData = async () => {
        setLoading(false)
        const data = await getPortfoliosMain()
        setPortfoliosMain(data)
        setLoading(true)
      }
      getPortfoliosMainData()
    } catch (error) {
      // Sender feilmelding tilbake om noe går galt
      throw new Error(error)
    }
  }, [])

  if (!portfoliosMain && loading) return <Loading />

  return (
    <>
      <article className="home">
        <p className="ingress">Arbeid</p>
        <h2>Litt av mitt nyeste arbeid og student prosjekter.</h2>
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
    </>
  )
}
