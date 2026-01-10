import { Shield, ArrowDown, Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TypingEffect } from './TypingEffect';
import { useState, useEffect } from 'react';

export function Hero() {
  const { theme } = useTheme();
  const [showTyping, setShowTyping] = useState(false);
  
  useEffect(() => {
    // Start typing effect after component mounts
    const timer = setTimeout(() => setShowTyping(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-full mb-6">
                <Shield className="w-8 h-8 text-emerald-500" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent heading-font min-h-[4.5rem]" style={{ fontFamily: 'Cambria, Georgia, serif' }}>
                {showTyping ? (
                  <TypingEffect text="Hi, It's Ankit" speed={80} />
                ) : (
                  <span className="opacity-0">Hi, It's Ankit</span>
                )}
              </h1>
              
              <p className={`text-xl md:text-2xl mb-4 heading-font ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`} style={{ fontFamily: 'Cambria, Georgia, serif' }}>
                {showTyping && (
                  <TypingEffect text="Security Researcher || Bug Bounty Hunter" speed={50} />
                )}
              </p>
              
              <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Passionate about information security, threat mitigation, and digital defense. 
                Specialized in penetration testing, vulnerability assessment, and ethical hacking.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className={`px-8 py-3 font-semibold rounded-lg transition-all btn-active ripple-effect ${
                    theme === 'dark' 
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950' 
                      : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  }`}
                >
                  Get In Touch
                </a>
                <a
                  href="/assets/resume.pdf"
                  download
                  className={`px-8 py-3 border font-semibold rounded-lg transition-all btn-active ripple-effect flex items-center gap-2 justify-center ${
                    theme === 'dark'
                      ? 'border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-emerald-500'
                      : 'border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-600'
                  }`}
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 md:order-2">
              <div className="profile-image-container">
                <div className="profile-glow"></div>
                <ImageWithFallback
                  src="/assets/profile.jpg"
                  alt="Ankit Kumar Singh"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-bounce">
            <a href="#about" className="inline-block">
              <ArrowDown className={`w-6 h-6 mx-auto ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}