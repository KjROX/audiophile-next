import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import LandingPageProducts from '@/components/LandingPageProducts'
import BrandPromotion from '@/components/BrandPromotion'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <Categories />
      <LandingPageProducts />
      <BrandPromotion />
      <Footer />
    </div>
  )
}
