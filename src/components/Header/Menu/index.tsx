import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Megamenu from './Megamenu/Megamenu'
import Button from '../../Button'

import styles from './styles.module.scss'

export default function Menu() {
  const { t } = useTranslation()

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className={styles.wrapper}>
      <Megamenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      <Button
        variant="primary"
        icon={<MenuIconHamburger />}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {t('menu.menu')}
      </Button>
    </div>
  )
}

function MenuIconHamburger() {
  return (
    <div className={styles.hamburguer}>
      <i className={styles.line} />
      <i className={styles.line} />
      <i className={styles.line} />
    </div>
  )
}
