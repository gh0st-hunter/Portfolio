import { Mail, Github, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Contact() {
  const { theme } = useTheme();
  
  const socialLinks = [
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://x.com/_hunter_00_',
      username: '@_hunter_00_',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/gh0st-hunter',
      username: 'gh0st-hunter',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ankit-kumar-singh-081035320',
      username: 'ankit-kumar-singh',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ankitkrsingh2603@gmail.com',
      username: 'ankitkrsingh2603@gmail.com',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm always interested in discussing cybersecurity opportunities, bug bounty programs, and security research.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`border rounded-lg p-6 transition-all card-hover group ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                      : 'bg-white border-slate-200 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{link.label}</div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{link.username}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className={`border rounded-lg p-8 text-center ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500/10 rounded-full mb-4">
              <MessageSquare className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Available for Security Consulting
            </h3>
            <p className={`mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              I offer penetration testing, security audits, and consulting services 
              for organizations looking to strengthen their security posture.
            </p>
            <p className={`mb-6 text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
              📍 Vadodara, Gujarat, India
            </p>
            <a
              href="mailto:ankitkrsingh2603@gmail.com"
              className={`inline-block px-8 py-3 font-semibold rounded-lg transition-all btn-active ${
                theme === 'dark'
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}