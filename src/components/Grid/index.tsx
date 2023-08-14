import { ReactNode } from 'react'
import styles from './styles.module.scss'

type Props = {
  children: ReactNode
}

export default function Grid({ children }: Props) {
  return <div className={styles.grid}>{children}</div>
}
