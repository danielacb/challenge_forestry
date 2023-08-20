import { useTranslation } from 'react-i18next'

import Grid from '../Grid'
import SearchInput from './SearchInput'

import styles from './styles.module.scss'

export default function SearchBlock() {
  const { t } = useTranslation()
  return (
    <Grid>
      <form className={styles.searchBlock}>
        <h2>{t('searchBlock.title')}</h2>
        <p className="body">{t('searchBlock.text')}</p>
        <SearchInput placeholder={t('searchBlock.input')} />
      </form>
    </Grid>
  )
}
