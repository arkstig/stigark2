import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useParams, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
                <NavLink to="/portfolio">
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
              <h1>{portfolio?.title}</h1>
              <div
                className="bildecs"
                style={{
                  backgroundImage: `url(${portfolio?.imageUrl})`,
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
