import './i18n'

import Header from './components/Header'
import Hero from './components/Hero'
import Statistics from './components/Statistics'
import SearchBlock from './components/SearchBlock'
import PhotoBlock from './components/PhotoBlock'
import OrientationSection from './components/OrientationSection'
import NewsSection from './components/NewsSection'
import UpcomingEvents from './components/UpcomingEvents'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Statistics />
      <SearchBlock />
      <PhotoBlock />
      <OrientationSection />
      <NewsSection />
      <UpcomingEvents />
      <Footer />
    </>
  )
}

export default App
