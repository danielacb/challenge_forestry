import Grid from '../Grid'
import ArrowIcon from '../Icons/Arrow'
import styles from './styles.module.scss'

export default function PhotoBlock() {
  return (
    <div className={styles.wrapper}>
      <Grid>
        <div className={styles.imageContainer}>
          <img
            src="/photo-block.jpg"
            alt="A pile of logs with blue and red paint on them."
          />
        </div>
      </Grid>
      <Grid>
        <a href="#" className={styles.textBlock}>
          <h2>Lyst til å bli andelseier i Allskog?</h2>
          <p>
            Hvis du eier skog, kan du melde deg inn i Allskog. Da blir du
            medeier av skogfellesskapet i Norge.
          </p>
          <ArrowIcon />
        </a>
      </Grid>
    </div>
  )
}
