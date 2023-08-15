import Grid from '../Grid'
import FacebookIcon from '../Icons/Facebook'
import YoutubeIcon from '../Icons/Youtube'
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <Grid>
      <footer className={styles.footer}>
        <a className={styles.link} href="/">
          <img className={styles.logo} src="/logo.svg" alt="Logo" />
        </a>
        <div className={styles.cols}>
          <div className={styles.col}>
            <span className={styles.title}>Adresse</span>
            <span className={styles.text}>Ingvald Ystgaards vei 13A,</span>
            <span className={styles.text}>7047 Trondheim</span>
          </div>
          <div className={styles.col}>
            <span className={styles.title}>Kontakt</span>
            <span className={styles.text}>Telefon: 73 500 123</span>
            <a className={styles.text} href="mailto:hireme@danielacb.com">
              firmapost@allskog.no
            </a>
            <a className={styles.text} href="https://danielacb.com/">
              Veibeskrivelse
            </a>
          </div>
          <div className={styles.col}>
            <span className={styles.title}>Følg oss</span>
            <a
              className={styles.social}
              href="https://danielacb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon /> Facebook
            </a>
            <a
              className={styles.social}
              href="https://danielacb.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon /> YouTube
            </a>
          </div>
        </div>
        <div className={styles.credits}>
          <a href="">Personvern</a> © 2013 Allskog SA
        </div>
      </footer>
    </Grid>
  )
}
