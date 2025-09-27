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
    // Set body background color
    document.body.style.backgroundColor = '#000000';
  }, [theme]);

  return (
    <div
      className={`relative min-h-screen ${theme === 'dark' ? 'dark' : ''}`}
      style={{
        backgroundColor: '#000000',
        padding: '10px',
      }}
    >
      {/* <ScrollProgress /> */}
      <Navigation />

      <main className="relative rounded-lg overflow-hidden" style={{ backgroundColor: '#000' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
