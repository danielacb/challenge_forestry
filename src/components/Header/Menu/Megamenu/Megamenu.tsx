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
              Lukk
            </Button>
          </div>
          <div className={styles.menusContainer}>
            {topLinks.map((links) => (
              <nav key={links.baseLink} className={styles.menu}>
                <li>
                  <a href="#" className={styles.baseMenuLink}>
                    {links.baseLink}
                    <ArrowIcon size="36" />
                  </a>
                </li>
                {links.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </nav>
            ))}
            <nav className={styles.nav}>
              {bottomLinks.map((link) => (
                <a href="#" key={link} className={styles.baseMenuLink}>
                  {link}
                  <ArrowIcon size="36" />
                </a>
              ))}
            </nav>
            <div className={styles.loginButton}>
              <Button variant="secondary" icon={<ProfileIcon />}>
                Logg inn
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
