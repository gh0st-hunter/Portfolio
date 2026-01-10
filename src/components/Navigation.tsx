import { Shield, Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-slate-950/90 border-slate-800' : 'bg-white/90 border-slate-200'} backdrop-blur-sm border-b z-50`} style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-500" />
            <span className="font-semibold text-lg" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>Ankit Singh</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${theme === 'dark' ? 'text-slate-300 hover:text-emerald-500' : 'text-slate-700 hover:text-emerald-600'} transition-colors`}
                style={{ fontFamily: 'Consolas, "Courier New", monospace' }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-100 hover:bg-slate-200'} transition-colors`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-emerald-500" />
              ) : (
                <Moon className="w-5 h-5 text-emerald-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-emerald-500" />
              ) : (
                <Moon className="w-5 h-5 text-emerald-600" />
              )}
            </button>
            <button
              className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block py-2 ${theme === 'dark' ? 'text-slate-300 hover:text-emerald-500' : 'text-slate-700 hover:text-emerald-600'} transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}