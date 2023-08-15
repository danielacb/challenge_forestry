import Button from '../Button'
import Grid from '../Grid'
import NewsCard from './NewsCard'
import styles from './styles.module.scss'

export default function NewsSection() {
  return (
    <Grid>
      <section className={styles.wrapper}>
        <h2>Nyheter</h2>
        <div className={styles.cards}>
          <NewsCard
            imageUrl="/news-1.jpg"
            imageAlt="An excavator with a load of logs on it."
            datePublished="2023-04-17"
            title="Går med rekordoverskudd: – Skogeiere har vært lojale til samvirket"
            subtitle="Allskog legger bak seg et av mest innbringende år noensinne som konsern. For femte år på rad kan 7 500 skogeiere nord for Stad og Dovre få utbetalt utbytte fra samvirket."
            link="#"
          />
          <NewsCard
            imageUrl="/news-2.jpg"
            imageAlt="A chainsaw and a pair of safety glasses laying on the ground."
            datePublished="2023-04-17"
            title="Bruk rabatten din på kurs i norsk PEFC-skogstantard"
            subtitle="Skal du hogge selv og levere tømmer? Nå får alle som driver i skogen tilbud om kurs i den nye skogstandarden. Som andelseier i ALLSKOG får du kurset til rabattert pris."
            link="#"
          />
          <NewsCard
            imageUrl="/news-3.jpg"
            imageAlt="Lichen on a tree near a river.	"
            datePublished="2023-04-17"
            title="Dette bør du vite om nye miljøhensyn i skogen "
            subtitle="Alt tømmer som ALLSKOG omsetter, er miljøsertifisert etter Norsk PEFC Skogstandard. Industrien og for forbrukerne skal vite at virket kommer fra skog drevet på bærekraftig vis. "
            link="#"
          />
        </div>
        <Button variant="secondary">Se alle nyheter</Button>
      </section>
    </Grid>
  )
}
