import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Grid from '../Grid'
import ProfileIcon from '../Icons/Profile'
import Menu from './Menu'

import styles from './styles.module.scss'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className={styles.wrapper}>
      <Grid>
        <a className={styles.link} href="/">
          <img className={styles.logo} src="/logo.svg" alt="Logo" />
        </a>
        <div className={styles.buttonsContainer}>
          <Button variant="search">{t('header.search')}</Button>
          <Button variant="secondary" icon={<ProfileIcon />}>
            {t('header.signIn')}
          </Button>
          <Menu />
        </div>
      </Grid>
    </header>
  )
}
