import Grid from '../Grid'
import SearchInput from './SearchInput'
import styles from './styles.module.scss'
export default function SearchBlock() {
  return (
    <Grid>
      <form className={styles.searchBlock}>
        <h2>Finn din skogbruksleder</h2>
        <p className="body">Søk etter region, fylke eller kommune</p>
        <SearchInput placeholder="Skriv søkeord" />
      </form>
    </Grid>
  )
}
