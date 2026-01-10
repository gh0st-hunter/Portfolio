import { Briefcase, MapPin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Experience() {
  const { theme } = useTheme();

  const experiences = [
    {
      title: 'Cybersecurity Intern',
      company: 'Hacktify Cyber Security',
      location: 'Gujarat, India',
      date: 'Feb 2025 - Mar 2025',
      responsibilities: [
        'Applied advanced threat detection techniques and security protocols to identify vulnerabilities',
        'Conducted penetration testing following OWASP Top 10 methodologies',
        'Developed incident response procedures and security documentation',
        'Analyzed security logs and network traffic for threat detection',
      ],
      skills: ['OWASP', 'Penetration Testing', 'Threat Detection'],
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Edunet Foundation',
      location: 'Remote',
      date: 'Jan 2025 - Feb 2025',
      responsibilities: [
        'Performed comprehensive security assessments on cloud infrastructure',
        'Developed automated scripts for vulnerability scanning using Python',
        'Researched emerging cybersecurity threats and mitigation strategies',
        'Created educational materials on cybersecurity fundamentals',
      ],
      skills: ['Python', 'Cloud Security', 'Automation'],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional experience in cybersecurity and threat analysis.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`border rounded-lg p-6 ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className={`font-medium mb-1 ${theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className={`flex items-center gap-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                      <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                        {exp.date}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className={`space-y-2 mb-4 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 text-xs rounded-full ${
                        theme === 'dark'
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'bg-emerald-100 text-emerald-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
