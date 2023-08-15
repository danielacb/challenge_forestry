import formatDate from '../../../utils/formatDate'
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
  return (
    <a className={styles.card} href={link}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <time className="subheading" dateTime={datePublished}>
        {formatDate(datePublished, true)}
      </time>
      <h4>{title}</h4>
      <p className="body">{subtitle}</p>
      <ArrowIcon />
    </a>
  )
}
