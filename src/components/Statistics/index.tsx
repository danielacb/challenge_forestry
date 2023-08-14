import Grid from '../Grid'
import StatisticsCard from './StatisticsCard/intex'
import styles from './styles.module.scss'

export default function Statistics() {
  return (
    <Grid>
      <section className={styles.statistics}>
        <StatisticsCard number={70} label="skogeierlag" />
        <StatisticsCard number={7.6} label="andelseiere" />
        <StatisticsCard number="1 million" label="skogeierlag" />
      </section>
    </Grid>
  )
}
