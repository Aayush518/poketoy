import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Link({ href, children, onClick }: LinkProps) {
  return (
    <a 
      href={href} 
      className="group flex items-center text-sm md:text-base font-medium tracking-wide relative px-4 py-2 transition-all duration-300 hover:text-yellow-400"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 rounded-lg transition-colors duration-300" />
      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300" />
      {children}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow-400/50 group-hover:w-full transition-all duration-300 rounded-full" />
    </a>
  );
}