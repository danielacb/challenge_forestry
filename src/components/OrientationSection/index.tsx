import Grid from '../Grid'
import OrientationCard from './OrientationCard'
import styles from './styles.module.scss'

export default function OrientationSection() {
  return (
    <Grid>
      <section className={styles.wrapper}>
        <OrientationCard
          title="Skal du plante ny skog?"
          description="Etter hogst skal det plantes innen tre år. Skal du plante selv denne sesongen, må du bestille planter innen 15. april."
          link="https://danielacb.com/"
        />
        <OrientationCard
          title="Er skogen moden for hogst? Avtal hogst nå."
          description="Vurderer du å ta ut tømmer fra skogen din? Ta gjerne en prat med en av våre dyktige skogbruksledere. Fra oss i Allskog får du solid veiledning, basert på skogfaglig erfaring og kunnskap."
          link="https://danielacb.com/"
        />
      </section>
    </Grid>
  )
}
