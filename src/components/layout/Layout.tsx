import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import ScrollProgress from './ScrollProgress';
import { useUIStore } from '../../store';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useUIStore();

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    // Set body background color and prevent horizontal scroll
    document.body.style.backgroundColor = '#000000';
    document.body.style.overflowX = 'hidden';
    document.body.style.maxWidth = '100vw';
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.maxWidth = '100vw';
  }, [theme]);

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden ${theme === 'dark' ? 'dark' : ''}`}
      style={{
        backgroundColor: '#000000',
        padding: '10px',
        width: '100%',
        maxWidth: '100vw',
        boxSizing: 'border-box',
      }}
    >
      {/* <ScrollProgress /> */}
      <Navigation />

      <main
        className="relative rounded-lg overflow-hidden overflow-x-hidden"
        style={{
          backgroundColor: '#000',
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
