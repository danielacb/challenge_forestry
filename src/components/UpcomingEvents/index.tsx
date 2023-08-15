import Button from '../Button'
import Grid from '../Grid'
import EventCard from './EventCard'
import styles from './styles.module.scss'

export default function UpcomingEvents() {
  return (
    <Grid>
      <section className={styles.wrapper}>
        <h2>Kommende arrangementer</h2>
        <EventCard
          title="Temakveld: Etablering av nytt sagbruk i Vefsn"
          description="Vefsn skogeierlag inviterer til temakveld, etablering av nytt sagbruk i Vefsn."
          location="Mosjøen videregående skole avd. Marka (Landbruksskolen)"
          schedule="Kl. 09.00-15.00 begge dager"
          date="2023-05-09"
          link="https://danielacb.com/"
        />
        <EventCard
          title="Elgbeitetaksering i Hattfjelldal, 24. og 25. mai 2023"
          date={['2023-05-24', '2023-05-25']}
          description="Kurset bygger på «Veileder og standard for taksering av elgbeite i skog» – utviklet av Skogkurs"
          location="Fjellfolkets Hus, Adr. Hattfjelldalsvollen 1, Hattfjelldal."
          schedule="Kl. 09.00-15.00 begge dager"
          link="https://danielacb.com/"
        />
        <Button variant="secondary">Se alle arrangementer</Button>
      </section>
    </Grid>
  )
}
