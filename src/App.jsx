import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div style={{ backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
