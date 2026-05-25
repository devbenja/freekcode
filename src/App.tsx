import { Navigation } from './components/Navigation';
import { Hero }       from './components/Hero';
import { Services }   from './components/Services';
import { WhyUs }      from './components/WhyUs';
import { Process }    from './components/Process';
import { Projects }   from './components/Projects';
import { Locations }  from './components/Locations';
import { FinalCTA }   from './components/FinalCTA';
import { Footer }     from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 overflow-x-hidden">
      <Navigation />
      <main className="relative">
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Locations />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}