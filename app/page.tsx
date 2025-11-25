import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-slate-950">
      {/* Animated background grid - Mission Control aesthetic */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>
      
      {/* Radial gradient overlays for depth */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />
      
      {/* Content sections */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
        <ContactForm />
        <Footer />
      </div>
    </main>
  )
}
