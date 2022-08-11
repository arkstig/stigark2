import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <article className="home">
      <p className="ingress">Hei, mitt navn er</p>
      <h1>Stig Ark.</h1>
      <h2>
        Jeg <span className="under1">designer</span> og{' '}
        <span className="under2">utvikler</span> digitale produkter.
      </h2>
      <p>
        Jeg er en front-end utvikler/designer med fokus på brukeropplevelse, god
        informasjonsarkitektur og tilgjengelighet.
      </p>
      <Link to="/portfolio">
        <button type="button">Se mitt arbeid!</button>
      </Link>
    </article>
  )
}
