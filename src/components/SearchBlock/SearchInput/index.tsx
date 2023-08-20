import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import Button from '../../Button'
import SearchIcon from '../../Icons/Search'
import { useTranslation } from 'react-i18next'

export default function SearchInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" {...props} />
      <Button type="submit" icon={<SearchIcon color="white" />}>
        {t('searchBlock.button')}
      </Button>
    </div>
  )
}
