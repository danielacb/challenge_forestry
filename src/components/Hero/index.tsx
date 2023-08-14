import Grid from '../Grid'
import ListLink from '../ListLink'
import { links } from './links'
import styles from './styles.module.scss'

export default function Hero() {
  return (
    <section>
      <Grid>
        <div className={styles.heroImage} />
        <div className={styles.textContainer}>
          <h1>Allskog er et samvirke av og for skogeiere</h1>
          <p className="lead">
            Vi er en robust organisasjon med høy kompetanse innen alle
            skogtjenester du trenger som skogeier.
          </p>
        </div>
      </Grid>
      <Grid>
        <div className={styles.links}>
          {links.map((link) => (
            <ListLink key={link} href="#">
              {link}
            </ListLink>
          ))}
        </div>
      </Grid>
    </section>
  )
}
