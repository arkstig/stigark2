import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useParams, NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPortfolios } from '../lib/services/eventService'

export default function CurrentPortfolio() {
  const [portfolios, setPortfolios] = useState('')
  const { portfoliosSlug } = useParams()

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

  const currentPortfolio =
    portfolios &&
    portfolios?.filter((portfolio) => portfoliosSlug.includes(portfolio.slug))

  return (
    <div id="casestudy">
      <article>
        <div className="informasjon4">
          <div className="tilbake">
            <a href="portfolio.html">
              <p>
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  className="fa-solid fa-arrow-left-long"
                />{' '}
                Tilbake til porteføljen
              </p>
            </a>
          </div>
          <p className="ingress">Case study</p>
          <h1>Lorem ipsum</h1>

          <div className="bildecs" />
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
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
      </article>
    </div>
  )
}
