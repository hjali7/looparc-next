import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Process from '@/components/Process'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Portfolio />
        <Process />
        <ContactForm />
      </main>
      
      <footer className="text-center py-8 border-t border-border">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} LoopArc. تمام حقوق محفوظ است.
        </p>
      </footer>
    </div>
  );
}
