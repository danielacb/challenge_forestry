import { useTranslation } from 'react-i18next'

import Grid from '../Grid'
import NewsCard from './NewsCard'

import styles from './styles.module.scss'

export default function NewsSection() {
  const { t } = useTranslation()

  return (
    <Grid>
      <section className={styles.wrapper}>
        <h2>{t('newsSection.title')}</h2>
        <div className={styles.cards}>
          {[0, 1, 2].map((index) => (
            <NewsCard
              key={index}
              imageUrl={`/news-${index + 1}.jpg`}
              imageAlt={t(`newsSection.news.${index}.imageAlt`)}
              datePublished="2023-04-17"
              title={t(`newsSection.news.${index}.title`)}
              subtitle={t(`newsSection.news.${index}.subtitle`)}
              link="https://danielacb.com/"
            />
          ))}
        </div>
      </section>
    </Grid>
  )
}
