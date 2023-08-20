import { useTranslation } from 'react-i18next'

import Button from '../Button'
import Grid from '../Grid'
import EventCard from './EventCard'

import styles from './styles.module.scss'

export default function UpcomingEvents() {
  const { t } = useTranslation()

  return (
    <Grid>
      <section className={styles.wrapper}>
        <h2>{t('upcomingEvents.title')}</h2>
        {[0, 1].map((index) => (
          <EventCard
            key={index}
            title={t(`upcomingEvents.events.${index}.title`)}
            description={t(`upcomingEvents.events.${index}.description`)}
            location={t(`upcomingEvents.events.${index}.location`)}
            schedule={t(`upcomingEvents.events.${index}.schedule`)}
            date={index % 2 ? ['2023-05-24', '2023-05-25'] : '2023-05-09'}
            link="https://danielacb.com/"
          />
        ))}
        <Button variant="secondary">{t('upcomingEvents.button')}</Button>
      </section>
    </Grid>
  )
}
