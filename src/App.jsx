if (typeof global === 'undefined') {
  window.global = window;
}

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Stages from './components/Stages';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Stages />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
