import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Divider = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50 my-8" />
);

function App() {
  return (
    <div className="bg-dark min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
