import ArrowIcon from '../../Icons/Arrow'
import styles from './styles.module.scss'

type Props = {
  imageUrl: string
  imageAlt: string
  datePublished: string
  title: string
  subtitle: string
  link: string
}

export default function NewsCard({
  imageUrl,
  imageAlt,
  datePublished,
  title,
  subtitle,
  link,
}: Props) {
  function formatDate() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const date = new Date(datePublished)

    const day = date.getUTCDate()
    const month = monthNames[date.getUTCMonth()]
    const year = date.getUTCFullYear()

    return `${day}. ${month} ${year}`
  }

  return (
    <a className={styles.card} href={link}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <time className="subheading" dateTime={datePublished}>
        {formatDate()}
      </time>
      <h4>{title}</h4>
      <p className="body">{subtitle}</p>
      <ArrowIcon />
    </a>
  )
}
