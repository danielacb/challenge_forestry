import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.scss'
import SearchIcon from '../Icons/Search'

type Props = {
  icon?: ReactNode
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'search'
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({
  icon,
  children,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      <span>{children}</span>
      {!!icon && icon}
      {variant === 'search' && <SearchIcon />}
    </button>
  )
}
