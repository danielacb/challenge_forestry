import formatDate from '../../../utils/formatDate'
import AlarmIcon from '../../Icons/Alarm'
import ArrowIcon from '../../Icons/Arrow'
import CalendarIcon from '../../Icons/Calendar'
import PinIcon from '../../Icons/Pin'
import styles from './styles.module.scss'

type Props = {
  title: string
  date: string | [string, string]
  description: string
  location: string
  schedule: string
  link: string
}

export default function EventCard({
  title,
  date,
  description,
  location,
  schedule,
  link,
}: Props) {
  return (
    <a className={styles.card} href={link}>
      <div className={styles.col}>
        <time className={styles.date}>{formatDate(date)}</time>
        <h4>{title}</h4>
      </div>
      <div className={styles.col}>
        <p className="body">{description}</p>
        <div className={styles.info}>
          <PinIcon />
          {location}
        </div>
        <div className={styles.info}>
          <CalendarIcon />
          {formatDate(date)}
        </div>
        <div className={styles.info}>
          <AlarmIcon />
          {schedule}
        </div>
      </div>
      <ArrowIcon />
    </a>
  )
}
