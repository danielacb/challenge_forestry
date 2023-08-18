import { useRef, useState } from 'react'
import Grid from '../Grid'
import StatisticsCard from './StatisticsCard/intex'
import styles from './styles.module.scss'

export default function Statistics() {
  const [activeSlide, setActiveSlide] = useState(0)
  const slidesRef = useRef<HTMLElement>(null)

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

  const slideDots = Array.from({ length: 3 }, (_, index) => (
    <button
      key={index}
      className={activeSlide === index ? 'active' : ''}
      onClick={() => navigateToSlide(index)}
    />
  ))

  return (
    <Grid>
      <section ref={slidesRef} className={styles.statistics}>
        <StatisticsCard number={70} label="skogeierlag" />
        <StatisticsCard number={7.6} label="andelseiere" />
        <StatisticsCard number="1 million" label="skogeierlag" />
      </section>
      <div className={styles.dots}>{slideDots}</div>
    </Grid>
  )
}
