import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickInfoBar from './components/QuickInfoBar'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import BarberPoleStory from './components/BarberPoleStory'
import Contact from './components/Contact'
import BookingCTA from './components/BookingCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuickInfoBar />
        <About />
        <Services />
        <Gallery />
        <BarberPoleStory />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
