import { Award, DollarSign, Target, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Achievements() {
  const { theme } = useTheme();
  
  const stats = [
    {
      icon: Target,
      value: '10+',
      label: 'CTF Competitions',
    },
    {
      icon: Award,
      value: '5',
      label: 'Certifications',
    },
    {
      icon: Users,
      value: '2',
      label: 'Internships',
    },
    {
      icon: DollarSign,
      value: 'Top 10',
      label: 'CTF Finishes',
    },
  ];

  const recentFindings = [
    {
      severity: 'Critical',
      title: 'IDOR Vulnerability in Palo Alto Networks',
      bounty: 'Responsible Disclosure',
      platform: 'Palo Alto Networks',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      severity: 'Achievement',
      title: 'Cybersecurity Intern at Hacktify',
      bounty: 'Feb 2025 - Mar 2025',
      platform: 'OWASP Top 10 Testing',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      severity: 'Achievement',
      title: 'Cybersecurity Intern at Edunet Foundation',
      bounty: 'Jan 2025 - Feb 2025',
      platform: 'Cloud Security & Automation',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      severity: 'High',
      title: 'CTF Competition Success',
      bounty: '10+ Competitions',
      platform: 'Top 10 Finishes',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      severity: 'Research',
      title: 'Active Security Research',
      bounty: 'Ongoing',
      platform: 'Emerging Threats & Exploits',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      severity: 'Achievement',
      title: 'Bug Bounty Programs',
      bounty: 'Active Participant',
      platform: 'Multiple Platforms',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
  ];

  return (
    <section id="achievements" className={`py-20 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Achievements
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Proven track record of discovering critical security vulnerabilities.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`border rounded-lg p-6 text-center ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="text-3xl font-bold text-emerald-500 mb-2">
                    {stat.value}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Recent Findings */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Recent Findings</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {recentFindings.map((finding, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-6 transition-all card-hover ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                      : 'bg-white border-slate-200 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span
                      className={`px-3 py-1 ${finding.bgColor} ${finding.color} text-xs font-semibold rounded-full`}
                    >
                      {finding.severity}
                    </span>
                    <span className="text-emerald-500 font-semibold">
                      {finding.bounty}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{finding.title}</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{finding.platform}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}