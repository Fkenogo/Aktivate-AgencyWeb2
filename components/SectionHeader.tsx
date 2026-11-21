
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center', dark = false }) => {
  return (
    <header className={`mb-12 md:mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 
        className={`text-[32px] md:text-[48px] font-bold leading-[1.2] mb-6 tracking-[-0.02em] ${
          dark ? 'text-white' : 'text-[#0A0A0A]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-[18px] md:text-[20px] max-w-[800px] leading-[1.6] ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-[#F5F5F5]' : 'text-[#2D2D2D]'}`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default SectionHeader;
