import React from 'react';
import { cn } from '@/lib/utils';
import { IconBriefcase, IconUser, IconCode } from '@tabler/icons-react';
interface CompanyCardsProps {
  className?: string;
}

export const CompanyCards: React.FC<CompanyCardsProps> = ({ className }) => {
  const companies = [
    {
      name: 'Experience',
      icon: <IconBriefcase size={28} stroke={1.5} className="text-[#00fff7]" />,
      title: '5+ Years',
    },
    {
      name: 'Available',
      icon: <IconUser size={28} stroke={1.5} className="text-[#00fff7]" />,
      title: 'Full-time',
    },
    {
      name: 'Project',
      icon: <IconCode size={28} stroke={1.5} className="text-[#00fff7]" />,
      title: '100+',
    },
  ];

  return (
    <div className={cn('w-full px-4 sm:px-0 sm:max-w-[600px] md:w-[600px]', className)}>
      <div className="bg-neutral-900/90 backdrop-blur-sm rounded-xl p-6 flex flex-row justify-between items-center shadow-lg ">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center justify-center py-1 px-2 sm:p-3 md:p-4"
          >
            <div className="mb-1">{company.icon}</div>
            <h3 className="text-xs sm:text-sm text-neutral-300 font-medium">{company.name}</h3>
            <p className="text-white text-xs sm:text-sm md:text-lg font-semibold whitespace-nowrap">
              {company.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
