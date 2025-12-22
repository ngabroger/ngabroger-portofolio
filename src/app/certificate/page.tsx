'use client';
import { useState } from 'react';
import { certificates } from '@/app/data/certificates';
import {
  IconWorld,
  IconDeviceMobile,
  IconCode,
  IconApps,
  IconCertificate,
  IconExternalLink,
  IconX,
} from '@tabler/icons-react';

const categories = ['All', 'Mobile', 'Web', 'Etc'] as const;

const categoryIcons = {
  All: IconApps,
  Mobile: IconDeviceMobile,
  Web: IconWorld,
  Etc: IconCode,
};

const getCertificatesByCategory = (category: string) => {
  if (category === 'All') return certificates;
  return certificates.filter((cert) => cert.category === category);
};

export default function CertificatePage() {
  const [selected, setSelected] = useState<string>('All');
  const [filteredCerts, setFilteredCerts] = useState(certificates);
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelected(category);
    setFilteredCerts(getCertificatesByCategory(category));
  };

  return (
    <div className="w-full min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Certificates
            </span>
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
            A showcase of my professional development journey through various courses and
            certifications in mobile development, web technologies, and programming fundamentals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selected === category
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white shadow-lg shadow-yellow-900/30'
                    : 'bg-neutral-800/50 text-neutral-400 hover:bg-neutral-700/50 hover:text-white border border-neutral-700/50'
                }`}
              >
                <Icon size={18} />
                {category === 'Etc' ? 'Others' : category}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-md ${
                    selected === category ? 'bg-white/20' : 'bg-neutral-700/50'
                  }`}
                >
                  {getCertificatesByCategory(category).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCerts.map((cert, index) => (
            <div
              key={cert.name}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-xl hover:from-yellow-600/20 hover:to-orange-600/20 transition-all duration-300"
            >
              <div className="bg-background rounded-xl overflow-hidden h-full">
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] bg-neutral-800/50 overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder-cert.png';
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="flex items-center gap-1 text-white text-sm font-medium px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <IconExternalLink size={14} />
                      View Certificate
                    </span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-2 right-2">
                    <span
                      className={`px-2 py-1 rounded-md text-[10px] font-medium backdrop-blur-sm ${
                        cert.category === 'Mobile'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : cert.category === 'Web'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                      }`}
                    >
                      {cert.category}
                    </span>
                  </div>
                </div>
                {/* Certificate Info */}
                <div className="p-4">
                  <h3 className="text-white font-medium text-sm group-hover:text-yellow-500 transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCerts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-neutral-600 mb-4">
              <IconCertificate size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No certificates found</h3>
            <p className="text-neutral-400">Try selecting a different category.</p>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: 'Total Certificates',
              value: certificates.length,
              color: 'yellow',
            },
            {
              label: 'Mobile Development',
              value: getCertificatesByCategory('Mobile').length,
              color: 'green',
            },
            {
              label: 'Web Development',
              value: getCertificatesByCategory('Web').length,
              color: 'blue',
            },
            {
              label: 'Other Skills',
              value: getCertificatesByCategory('Etc').length,
              color: 'purple',
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-xl"
            >
              <div className="bg-background p-4 rounded-xl text-center">
                <p
                  className={`text-3xl font-bold ${
                    stat.color === 'yellow'
                      ? 'text-yellow-500'
                      : stat.color === 'green'
                      ? 'text-green-500'
                      : stat.color === 'blue'
                      ? 'text-blue-500'
                      : 'text-purple-500'
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-neutral-500 text-xs mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Certificate Preview */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-700"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
            >
              <IconX size={20} />
            </button>
            {/* Certificate Image */}
            <div className="relative">
              <img
                src={selectedCert.img}
                alt={selectedCert.name}
                className="w-full h-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder-cert.png';
                }}
              />
            </div>
            {/* Certificate Info */}
            <div className="p-6 border-t border-neutral-800">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{selectedCert.name}</h3>
                  <span
                    className={`inline-block mt-2 px-2.5 py-1 rounded-md text-xs font-medium ${
                      selectedCert.category === 'Mobile'
                        ? 'bg-green-500/20 text-green-400'
                        : selectedCert.category === 'Web'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-purple-500/20 text-purple-400'
                    }`}
                  >
                    {selectedCert.category}
                  </span>
                </div>
                <a
                  href={selectedCert.img}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 rounded-lg text-white text-sm font-medium transition-all"
                >
                  <IconExternalLink size={16} />
                  Open Full Size
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
