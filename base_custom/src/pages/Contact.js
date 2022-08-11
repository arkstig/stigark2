import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleName = (event) => {
    setName(event.currentTarget.value)
  }
  const handleEmail = (event) => {
    setEmail(event.currentTarget.value)
  }
  const handleMessage = (event) => {
    setMessage(event.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '' || email === '' || message === '') {
      document.getElementById('formError').innerHTML = 'Fyll ut alle felter'
    } else {
      document.getElementById('formError').innerHTML = 'E-posten ble sendt!'
      setName('')
      setEmail('')
      setMessage('')
    }
  }
  return (
    <div className="kontakt">
      <div className="kontaktinfo">
        <p className="ingress">Kontakt</p>
        <h1>Send meg en melding</h1>
        <p>
          Skriv en linje eller to til meg under. Legg gjerne igjen et
          telefonnummer også, så ringer jeg så fort jeg ser meldingen din!
          <span className="under3">Ser frem til å høre fra deg!</span>
        </p>
      </div>
      <form>
        <div className="inputs">
          <div className="input1">
            <label htmlFor="navn">
              <span className="under4">Navn:</span>
            </label>

            <input
              onChange={handleName}
              type="text"
              id="navn"
              className="navn"
              name="navn"
            />
          </div>
          <div className="input2">
            <label htmlFor="epost">
              <span className="under4">E-post:</span>
            </label>

            <input
              onChange={handleEmail}
              type="email"
              id="epost"
              className="epost"
              name="epost"
            />
          </div>
        </div>
        <label htmlFor="melding">
          <span className="under4">Melding:</span>
        </label>
        <textarea
          className="melding"
          rows="8"
          cols="50"
          name="melding"
          id="melding"
          onChange={handleMessage}
        />
        <button onClick={handleSubmit} className="submit" type="submit">
          Send melding!
        </button>
        {/* TODO: Bruk ved error */}
        <p id="formError" data-testid="form_error" />
        {/* {name === '' || email === '' ? (
          <p id="formError" data-testid="form_error">Fyll ut alle felter med *</p>
        ) : (
          <p data-testid="form_error" />
        )} */}
        {/* <p data-testid="form_error">Fyll ut alle felter med *</p> */}
        {/* TODO: Bruk ved suksess */}
        {sent.showMessage && (
          <p id="formSuccess" data-testid="form_success">
            Skjema sendt
          </p>
        )}
      </form>
    </div>
  )
}
