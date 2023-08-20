import { useTranslation } from 'react-i18next'

import Grid from '../Grid'
import ListLink from '../ListLink'
import { links } from './links'

import styles from './styles.module.scss'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section>
      <Grid>
        <div className={styles.heroImage} />
        <div className={styles.textContainer}>
          <h1>{t('hero.title')}</h1>
          <p className="lead">{t('hero.text')}</p>
        </div>
      </Grid>
      <Grid>
        <div className={styles.links}>
          {links.map((link, index) => (
            <ListLink key={link} href="#">
              {t(`hero.links.${index}`)}
            </ListLink>
          ))}
        </div>
      </Grid>
    </section>
  )
}
