import { NavLink } from 'react-router-dom'

export default function Ommeg() {
  return (
    <article className="home ommeg">
      <p className="ingress">Om meg</p>
      <h1>Hei, </h1>

      <p>
        mitt navn er Stig Ark, jeg er opprinnelig fra Oslo, men bor nå i Halden,
        hvor jeg går siste året på min Bachelor innen Digitale medier og design,
        på Høgskolen i Østfold.
      </p>
      <p>
        Jeg har hatt en passion for webutvikling siden jeg satt med Adobe
        Dreamweaver, flash og Photoshop på gutterommet mitt når jeg var 12 år
        gammel. På videregående, gikk jeg salg og service og min studentbedrift
        vant beste nettside i bedrifts NM som jeg hadde laget i Dreamweaver.
      </p>
      <p>
        Når voksenlivet startet ble hobbyen min satt på hylla en stund. Etter at
        jeg fant tilbake til hobbyen min, så har jeg skjønt at dette er det jeg
        vil bruke tiden min til å jobbe med hver dag, for min hobby er hva som
        gir meg glede.
      </p>
      <p>
        Min passion er å forvirkeliggjøre visjoner og å skape ting fra null til
        noe visuelt. Det gir meg stor glede å kunne utvikle meg hele tiden, lære
        meg mer, å føle på mestring og stolthet over det jeg skaper. Jeg har et
        øye for estetikk, det kan man se i mine fotografier og design. Jeg
        setter også stor pris på den berg og dalbanen som kommer med å jobbe med
        problemløsning.
      </p>
      <p>
        For øvrigt vil jeg beskrive meg selv som lærevillig, detaljorientert,
        nørdete, visuell, jeg setter også pris på ærlighet, kommunikasjon og
        samarbeidsvilje.
      </p>
      <p>
        Jeg koser meg med å jobbe med Front-end rammeverk, CSS, HTML, Javascript
        og design for å utvikle. Jeg gleder meg til å jobbe og fordype meg
        videre innen webutvikling og alt som hører til.
      </p>
      <div className="divOmmeg" />
      <div className="buttonOmmeg">
        <NavLink to="/contact">
          <button type="button">Kontakt meg!</button>
        </NavLink>
      </div>
    </article>
  )
}
