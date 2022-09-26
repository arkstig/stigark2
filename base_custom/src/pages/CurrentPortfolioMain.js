import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
                    Tilbake til porteføljen
                  </p>
                </NavLink>
              </div>
              <p className="ingress">Case study</p>
              <h2>{portfolioMain?.title}</h2>
              <div
                className="bildecs"
                style={{
                  backgroundImage: `url(${portfolioMain?.imageUrl})`,
                }}
              />
            </div>
          </article>

          <article className="casestudy2">
            <h2>Lorem ipsum</h2>
            <p className="ingress2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elite sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </article>
        </div>
      )}
    </div>
  )
}
