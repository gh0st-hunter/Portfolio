import { Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useState } from 'react';
import { CertificateModal } from './CertificateModal';

export function Certifications() {
  const { theme } = useTheme();
  const [rippleIndex, setRippleIndex] = useState<number | null>(null);
  const [selectedCert, setSelectedCert] = useState<{ title: string; imagePath: string } | null>(null);

  const certifications = [
    {
      icon: '🐛',
      title: 'Cybersecurity Foundation',
      issuer: 'Palo Alto Networks',
      imagePath: '/assets/certificates/cert1.jpg',
    },
    {
      icon: '🔐',
      title: 'Cryptography and Network Security',
      issuer: 'NPTEL',
      imagePath: '/assets/certificates/cert2.jpg',
    },
    {
      icon: '🛡️',
      title: 'Android Bug Bounty Hunting',
      issuer: 'EC-Council',
      imagePath: '/assets/certificates/cert3.jpg',
    },
    {
      icon: '🌊',
      title: 'Cyber Defence Strategies',
      issuer: 'IT Masters',
      imagePath: '/assets/certificates/cert4.jpg',
    },
    {
      icon: '☁️',
      title: 'Practical Introduction to Cloud Computing',
      issuer: 'EC-Council',
      imagePath: '/assets/certificates/cert5.jpg',
    },
    {
      icon: '💻',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      imagePath: '/assets/certificates/cert6.jpg',
    },
  ];

  const handleCertClick = (cert: { title: string; imagePath: string }, index: number) => {
    setRippleIndex(index);
    setTimeout(() => setRippleIndex(null), 600);
    setSelectedCert(cert);
  };

  return (
    <section id="certifications" className={`py-20 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Certifications
          </h2>
          <p className={`text-center mb-16 max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Professional certifications and training in cybersecurity. Click to view certificates.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <button
                key={index}
                onClick={() => handleCertClick(cert, index)}
                className={`border rounded-lg p-6 text-center transition-all card-hover ripple-effect cursor-pointer w-full ${
                  rippleIndex === index ? 'animate' : ''
                } ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/50'
                    : 'bg-white border-slate-200 hover:border-emerald-500/50'
                }`}
              >
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                {cert.issuer && (
                  <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {cert.issuer}
                  </p>
                )}
                <div className="mt-4 inline-flex items-center justify-center w-10 h-10 bg-emerald-500/10 rounded-full">
                  <Award className="w-5 h-5 text-emerald-500" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          imagePath={selectedCert.imagePath}
        />
      )}
    </section>
  );
}