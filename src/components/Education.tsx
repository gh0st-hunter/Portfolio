import { GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Education() {
  const { theme } = useTheme();

  return (
    <section id="education" className={`py-20 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Education
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Academic foundation in cybersecurity and computer science.
          </p>

          <div className={`border rounded-lg p-8 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-start gap-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-lg flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-emerald-500" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Parul University</h3>
                <p className={`text-lg mb-2 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  Bachelor of Technology in Computer Science (Cybersecurity)
                </p>
                <p className={`mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  September 2023 - August 2027
                </p>
                <p className={`mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Specialization in Information Security, Threat Mitigation, Digital Defense, and Vulnerability Analysis
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    Network Security
                  </span>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    Ethical Hacking
                  </span>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    Cloud Computing
                  </span>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                  }`}>
                    Cryptography
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
