import Navbar from './components/navigation/navbar';

import Home from './components/sections/home';
import About from './components/sections/about';
import PortafolioSection from './components/sections/portafolioSection';
import Contact from './components/sections/contact';
import Footer from './components/navigation/footer';
import './styles/main.css';
import './styles/scroll/scroll.js';
import './styles/App.css';
import { Experience } from './components/sections/experience.js';
import { useAppSelector } from './components/redux/hooks.ts';
 

function App() {
  const locale = useAppSelector((state) => state.localizer.locale);
  return (
    <>
      <img
        className="background-image"
        src="fondo.png"
        alt="Background Image"
      />
      <Navbar />
      <main>
        <Home/>
        <About />
        <PortafolioSection />
        <Contact />
        <Experience locale={locale} />
        
      </main>
      
    </>
  );
}

export default App;
