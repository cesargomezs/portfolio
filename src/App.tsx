import Navbar from './components/navigation/navbar';
import Home from './components/sections/home';
import About from './components/sections/about';

import Contact from './components/sections/contact';
import './styles/main.css';
import './styles/scroll/scroll.js';
import './styles/App.css';
import { Experience } from './components/sections/experience.js';
import { useAppSelector } from './components/redux/hooks.ts';
import PortafolioSection from './components/sections/portafolioSection';
 

function App() {
  const locale = useAppSelector((state) => state.localizer.locale);
  return (
    <>
      <Navbar />
      <main>
        <Home locale={locale}/>
        <About locale={locale}  />
        <PortafolioSection locale={locale} />
        <Contact locale={locale}/>
        <Experience locale={locale} />
        
      </main>
      
    </>
  );
}

export default App;
