import ArrowIcon from '../../Icons/Arrow'
import styles from './styles.module.scss'

type Props = {
  title: string
  description: string
  link: string
}

export default function OrientationCard({ title, description, link }: Props) {
  return (
    <a className={styles.card} href={link}>
      <h3>{title}</h3>
      <div className={styles.description}>
        <p className="body">{description}</p>
        <ArrowIcon className={styles.icon} />
      </div>
    </a>
  )
}
