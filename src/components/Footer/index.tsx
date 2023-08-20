import { useTranslation } from 'react-i18next'

import Grid from '../Grid'
import FacebookIcon from '../Icons/Facebook'
import YoutubeIcon from '../Icons/Youtube'
import styles from './styles.module.scss'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <Grid>
      <footer className={styles.footer}>
        <a className={styles.link} href="/">
          <img className={styles.logo} src="/logo.svg" alt="Logo" />
        </a>
        <div className={styles.cols}>
          <div className={styles.col}>
            <span className={styles.title}>{t('footer.addressTitle')}</span>
            <span className={styles.text}>P Sherman,</span>
            <span className={styles.text}>42 Wallaby Way</span>
          </div>
          <div className={styles.col}>
            <span className={styles.title}>{t('footer.contactTitle')}</span>
            <span className={styles.text}>{t('footer.phone')}</span>
            <a className={styles.text} href="mailto:hireme@danielacb.com">
              contato@danielacb.com
            </a>
            <a className={styles.text} href="https://danielacb.com/">
              {t('footer.directions')}
            </a>
          </div>
          <div className={styles.col}>
            <span className={styles.title}>{t('footer.socialMediaTitle')}</span>
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
          <a href="https://danielacb.com/">DCB</a> © 2023 Daniela Barbosa DCB
        </div>
      </footer>
    </Grid>
  )
}
