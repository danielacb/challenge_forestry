import Button from '../Button'
import Grid from '../Grid'
import ProfileIcon from '../Icons/Profile'
import Menu from './Menu'
import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Grid>
        <a className={styles.link} href="/">
          <img className={styles.logo} src="/logo.svg" alt="Logo" />
        </a>
        <div className={styles.buttonsContainer}>
          <Button variant="search">Søk</Button>
          <Button variant="secondary" icon={<ProfileIcon />}>
            Logg inn
          </Button>
          <Menu />
        </div>
      </Grid>
    </header>
  )
}
