import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import Button from '../../Button'
import SearchIcon from '../../Icons/Search'

export default function SearchInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" {...props} />
      <Button type="submit" icon={<SearchIcon color="white" />}>
        Søk
      </Button>
    </div>
  )
}
