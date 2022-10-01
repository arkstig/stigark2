import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'
import { getPortfolio } from '../lib/services/eventService'
import Loading from '../components/Loading'

export default function CurrentPortfolio() {
  const [portfolio, setPortfolio] = useState(null)
  const { slug } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      const getPortfolioData = async () => {
        setLoading(true)
        const data = await getPortfolio(slug)
        setPortfolio(data)
        setLoading(false)
      }
      getPortfolioData()
    } catch (error) {
      // Sender feilmelding tilbake om noe går galt
      throw new Error(error)
    }
  }, [slug])
  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
        <div className="casestudy">
          <article>
            <div className="informasjon4">
              <div className="tilbake">
                <NavLink to="/portfolioMain">
                  <p>
                    <FontAwesomeIcon
                      icon={faArrowLeftLong}
                      className="fa-solid fa-arrow-left-long"
                    />{' '}
                    Tilbake til arbeid
                  </p>
                </NavLink>
              </div>
              <div className="containerArticleCasestudy">
                <div>
                  <p className="ingress">Case study</p>
                  <h1>{portfolio?.title}</h1>
                </div>
                <div>
                  <p className="rightAlign">{portfolio?.ingress2}</p>
                  <span className="emneListe">{portfolio?.kategorier}</span>
                </div>
              </div>
              <div
                className="bildecs"
                style={{
                  backgroundImage: `url(${portfolio?.imageUrl})`,
                }}
              />
            </div>
          </article>

          <article className="casestudy2">
            <img src={portfolio?.imageUrl1} alt={portfolio?.image1?.caption1} />
            <div>
              <PortableText value={portfolio?.hovedinnhold} />
            </div>

            <img alt={portfolio?.image2?.caption2} src={portfolio?.imageUrl2} />
            <div>
              <PortableText value={portfolio?.hovedinnhold2} />
            </div>

            <img alt={portfolio?.image3?.caption3} src={portfolio?.imageUrl3} />
            <div>
              <PortableText value={portfolio?.hovedinnhold3} />
            </div>

            <img alt={portfolio?.image4?.caption4} src={portfolio?.imageUrl4} />
            <div>
              <PortableText value={portfolio?.hovedinnhold4} />
            </div>

            <img alt={portfolio?.image5?.caption5} src={portfolio?.imageUrl5} />
            <div>
              <PortableText value={portfolio?.hovedinnhold5} />
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
