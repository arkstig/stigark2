import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'
import { getPortfolioMain } from '../lib/services/eventService'
import Loading from '../components/Loading'

export default function CurrentPortfolioMain() {
  const [portfolioMain, setPortfolioMain] = useState(null)
  const { slug } = useParams()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      const getPortfolioMainData = async () => {
        setLoading(true)
        const data = await getPortfolioMain(slug)
        setPortfolioMain(data)
        setLoading(false)
      }
      getPortfolioMainData()
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
                  <h1>{portfolioMain?.title}</h1>
                </div>
                <div>
                  <p className="rightAlign">{portfolioMain?.ingress2}</p>
                  <span className="emneListe">{portfolioMain?.kategorier}</span>
                </div>
              </div>
              <div
                className="bildecs"
                style={{
                  backgroundImage: `url(${portfolioMain?.imageUrl})`,
                }}
              />
            </div>
          </article>

          <article className="casestudy2">
            <img
              src={portfolioMain?.imageUrl1}
              alt={portfolioMain?.image1?.caption1}
            />
            <div>
              <PortableText value={portfolioMain?.hovedinnhold} />
            </div>

            <img
              alt={portfolioMain?.image2?.caption2}
              src={portfolioMain?.imageUrl2}
            />
            <div>
              <PortableText value={portfolioMain?.hovedinnhold2} />
            </div>

            <img
              alt={portfolioMain?.image3?.caption3}
              src={portfolioMain?.imageUrl3}
            />
            <div>
              <PortableText value={portfolioMain?.hovedinnhold3} />
            </div>

            <img
              alt={portfolioMain?.image4?.caption4}
              src={portfolioMain?.imageUrl4}
            />
            <div>
              <PortableText value={portfolioMain?.hovedinnhold4} />
            </div>

            <img
              alt={portfolioMain?.image5?.caption5}
              src={portfolioMain?.imageUrl5}
            />
            <div>
              <PortableText value={portfolioMain?.hovedinnhold5} />
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
