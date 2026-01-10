import { Code2, Bug, Lock, Trophy } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function About() {
  const { theme } = useTheme();
  
  const highlights = [
    {
      icon: Bug,
      title: 'Bug Hunting',
      description: 'IDOR vulnerability discovered in Palo Alto Networks',
    },
    {
      icon: Lock,
      title: 'Penetration Testing',
      description: 'Expert in OWASP Top 10 methodologies and security assessments',
    },
    {
      icon: Trophy,
      title: 'CTF Competitions',
      description: '10+ competitions with top 10 finishes',
    },
    {
      icon: Code2,
      title: 'Security Research',
      description: 'Active research on emerging threats and vulnerabilities',
    },
  ];

  return (
    <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About Me
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Cybersecurity enthusiast pursuing Bachelor of Technology in Computer Science with specialization in Cybersecurity at Parul University.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`border rounded-lg p-6 transition-all card-hover ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                      : 'bg-white border-slate-200 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className={`border rounded-lg p-8 ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <p className={`leading-relaxed mb-4 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm a dedicated cybersecurity enthusiast currently pursuing my Bachelor of Technology in Computer Science 
              with a specialization in Cybersecurity at Parul University. My passion lies in identifying vulnerabilities 
              and strengthening digital defenses.
            </p>
            <p className={`leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              With hands-on experience in penetration testing, vulnerability assessment, and security research, I'm actively 
              contributing to the cybersecurity community through bug bounty programs and CTF competitions. I discovered 
              a critical IDOR vulnerability in Palo Alto Networks systems through responsible disclosure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}