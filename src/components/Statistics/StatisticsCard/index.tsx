import styles from './styles.module.scss'

type Props = {
  number: string | number
  label: string
}

export default function StatisticsCard({ number, label }: Props) {
  return (
    <div className={styles.card}>
      <span className={styles.number}>{number}</span>
      <span className={styles.labels}>{label}</span>
    </div>
  )
}
