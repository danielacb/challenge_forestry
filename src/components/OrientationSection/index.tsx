import { useTranslation } from 'react-i18next'

import Grid from '../Grid'
import OrientationCard from './OrientationCard'

import styles from './styles.module.scss'

export default function OrientationSection() {
  const { t } = useTranslation()

  return (
    <Grid>
      <section className={styles.wrapper}>
        {[0, 1].map((index) => (
          <OrientationCard
            key={index}
            title={t(`orientationCard.${index}.title`)}
            description={t(`orientationCard.${index}.description`)}
            link={t(`orientationCard.${index}.link`)}
          />
        ))}
      </section>
    </Grid>
  )
}
