import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <footer className={`border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'} py-8`}>
        <div className={`container mx-auto px-4 text-center text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
          <p>&copy; 2025 Ankit Kumar Singh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}