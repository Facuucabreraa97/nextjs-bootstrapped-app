import Header from '@/components/landing/Header'
import HeroSection from '@/components/landing/HeroSection'
import CourseDetails from '@/components/landing/CourseDetails'
import CryptoSegments from '@/components/landing/CryptoSegments'
import Footer from '@/components/landing/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CourseDetails />
        <CryptoSegments />
      </main>
      <Footer />
    </div>
  )
}
