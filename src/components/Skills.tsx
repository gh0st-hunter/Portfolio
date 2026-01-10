import { Globe, Code, Database, Terminal, Network, Smartphone } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';

export function Skills() {
  const { theme } = useTheme();
  const [rippleIndex, setRippleIndex] = useState<number | null>(null);
  
  const skillCategories = [
    {
      icon: Globe,
      title: 'Web Security',
      skills: ['Penetration Testing', 'Vulnerability Assessment', 'OWASP Top 10', 'Threat Analysis', 'Incident Response'],
    },
    {
      icon: Terminal,
      title: 'Security Tools',
      skills: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'OWASP ZAP', 'Nikto', 'SQLMap', 'John the Ripper', 'Hashcat'],
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'Bash', 'SQL', 'C', 'JavaScript'],
    },
    {
      icon: Database,
      title: 'Specializations',
      skills: ['Bug Bounty Hunting', 'CTF Competitions', 'Security Research', 'Exploit Development'],
    },
    {
      icon: Smartphone,
      title: 'Mobile & Android',
      skills: ['Android Security', 'Bug Bounty Hunting', 'APK Analysis', 'Mobile Penetration Testing'],
    },
    {
      icon: Network,
      title: 'Cloud & DevSecOps',
      skills: ['AWS', 'Azure', 'Cloud Security', 'Infrastructure Security'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Skills & Expertise
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            A comprehensive toolkit for identifying and exploiting security vulnerabilities.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`border rounded-lg p-6 transition-all card-hover ripple-effect cursor-pointer ${
                    rippleIndex === index ? 'animate' : ''
                  } ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                      : 'bg-white border-slate-200 hover:border-emerald-500/50'
                  }`}
                  onClick={() => {
                    setRippleIndex(index);
                    setTimeout(() => setRippleIndex(null), 600);
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-500/10 rounded-lg">
                      <Icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 text-sm rounded-full transition-transform hover:scale-110 ${
                          theme === 'dark'
                            ? 'bg-slate-800 text-slate-300'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}