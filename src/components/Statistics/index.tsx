import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Grid from '../Grid'
import StatisticsCard from './StatisticsCard'
import styles from './styles.module.scss'

export default function Statistics() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slidesRef = useRef<HTMLElement>(null)
  const { t } = useTranslation()

  function onSlidesScroll() {
    const slides = slidesRef.current
    if (slides) {
      const slideWidth = slides.children[0].clientWidth
      const scrollLeft = slides.scrollLeft
      setActiveSlide(Math.floor(scrollLeft / slideWidth))
    }
  }

  useEffect(() => {
    const slides = slidesRef.current
    slides?.addEventListener('scroll', onSlidesScroll)

    return () => slides?.removeEventListener('scroll', onSlidesScroll)
  }, [])

  function navigateToSlide(index: number) {
    const slides = slidesRef.current

    if (slides) {
      const slideWidth = slides.children[0].clientWidth

      slides.scroll({
        left: index * slideWidth,
        behavior: 'smooth',
      })

      setActiveSlide(index)
    }
  }

  const slideDots = [0, 1, 2].map((index) => (
    <button
      key={index}
      className={activeSlide === index ? 'active' : ''}
      onClick={() => navigateToSlide(index)}
    />
  ))

  return (
    <Grid>
      <section ref={slidesRef} className={styles.statistics}>
        {[0, 1, 2].map((index) => (
          <StatisticsCard
            key={index}
            number={t(`statistics.${index}.number`)}
            label={t(`statistics.${index}.label`)}
          />
        ))}
      </section>
      <div className={styles.dots}>{slideDots}</div>
    </Grid>
  )
}
