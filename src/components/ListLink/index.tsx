import { AnchorHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import ArrowIcon from '../Icons/Arrow'

type Props = {
  href: string
  children: string
} & AnchorHTMLAttributes<HTMLAnchorElement>

export default function ListLink({ href, children, ...props }: Props) {
  return (
    <a className={styles.link} href={href} {...props}>
      <ArrowIcon />
      {children}
      <ArrowIcon color="white" />
    </a>
  )
}
