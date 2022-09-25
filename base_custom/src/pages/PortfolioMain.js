import { useState, useEffect } from 'react'
import CardMain from '../components/CardMain'
import { getPortfoliosMain } from '../lib/services/eventService'

export default function PortfolioMain() {
  const [portfoliosMain, setPortfoliosMain] = useState('')

  useEffect(() => {
    try {
      const getPortfoliosMainData = async () => {
        const data = await getPortfoliosMain()
        setPortfoliosMain(data)
      }
      getPortfoliosMainData()
    } catch (error) {
      // Sender feilmelding tilbake om noe går galt
      throw new Error(error)
    }
  }, [])

  return (
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
  )
}
