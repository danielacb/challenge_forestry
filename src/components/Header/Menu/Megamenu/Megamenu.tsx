import { useTranslation } from 'react-i18next'

import { useEffect } from 'react'
import Button from '../../../Button'
import Grid from '../../../Grid'
import ArrowIcon from '../../../Icons/Arrow'
import ProfileIcon from '../../../Icons/Profile'
import { topLinks, bottomLinks } from './links'

import styles from './styles.module.scss'

type Props = {
  isOpen: boolean
  closeMenu: () => void
}

export default function Megamenu({ isOpen, closeMenu }: Props) {
  const { t } = useTranslation()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div className={`${styles.megamenu} ${isOpen ? styles.open : `closed`}`}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <Grid>
          <div className={styles.buttonContainer}>
            <Button onClick={closeMenu} icon={<MenuIconClose />}>
              {t('menu.close')}
            </Button>
          </div>
          <div className={styles.menusContainer}>
            {topLinks.map((links, linksIndex) => (
              <nav key={links.baseLink} className={styles.menu}>
                <li>
                  <a href="#" className={styles.baseMenuLink}>
                    {t(`megamenu.topLinks.${linksIndex}.baseLink`)}
                    <ArrowIcon size="36" />
                  </a>
                </li>
                {links.links.map((link, linkIndex) => (
                  <li key={link}>
                    <a href="#">
                      {t(`megamenu.topLinks.${linksIndex}.links.${linkIndex}`)}
                    </a>
                  </li>
                ))}
              </nav>
            ))}
            <nav className={styles.nav}>
              {bottomLinks.map((link, index) => (
                <a href="#" key={link} className={styles.baseMenuLink}>
                  {t(`megamenu.bottomLinks.${index}`)}
                  <ArrowIcon size="36" />
                </a>
              ))}
            </nav>
            <div className={styles.loginButton}>
              <Button variant="secondary" icon={<ProfileIcon />}>
                {t('menu.signIn')}
              </Button>
            </div>
          </div>
        </Grid>
      </div>
    </div>
  )
}

function MenuIconClose() {
  return (
    <div className={styles.closeIcon}>
      <i className={styles.line} />
    </div>
  )
}
