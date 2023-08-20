import { useTranslation } from 'react-i18next'

import Grid from '../Grid'
import ArrowIcon from '../Icons/Arrow'

import styles from './styles.module.scss'

export default function PhotoBlock() {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <Grid>
        <div className={styles.imageContainer}>
          <img src="/photo-block.jpg" alt={t('photoBlock.imgAltText')} />
        </div>
      </Grid>
      <Grid>
        <a href="#" className={styles.textBlock}>
          <h2>{t('photoBlock.title')}</h2>
          <p>{t('photoBlock.text')}</p>
          <ArrowIcon />
        </a>
      </Grid>
    </div>
  )
}
