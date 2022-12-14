import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'
import { getPortfolio } from '../lib/services/eventService'
import Loading from '../components/Loading'
import Image from '../components/Image'
import Youtube from '../components/youtube'

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
  console.log(portfolio)

  const components = {
    types: {
      image: Image,
      youtube: Youtube,
    },
  }

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
            <div>
              <PortableText
                value={portfolio?.hovedinnhold}
                components={components}
              />
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
