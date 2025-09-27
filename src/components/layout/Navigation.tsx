import React, { useState, useEffect } from 'react';
import { useNavigationStore } from '../../store';
import { scrollToElement } from '../../lib/utils';

const Navigation: React.FC = () => {
  const { activeSection, setActiveSection } = useNavigationStore();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'statistics', label: 'Statistics' },
    { id: 'revenue', label: 'RevShare' },
    { id: 'tokenomics', label: 'Tokenomics' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = ['home', 'services', 'statistics', 'revenue', 'partners', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <nav
      className="absolute z-50"
      style={{
        backgroundColor: '#F9FEF1',
        top: '10px',
        left: '10px',
        right: '10px',
        borderTopLeftRadius: '30px',
        borderTopRightRadius: '30px',
        overflow: 'hidden', // This ensures the border radius is visible
      }}
    >
      <div
        className="relative mx-auto px-6"
        style={{
          backgroundColor: '#F9FEF1',
          maxWidth: '1400px',
          borderTopLeftRadius: '30px',
          borderTopRightRadius: '30px',
        }}
      >
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-[50px]">
            <div className="flex items-center gap-3">
              <img
                src={require('../../assets/Images/genesisLogo.png')}
                alt="Genesis"
                className="h-8 w-8"
                style={{ height: '42px', width: '32px' }}
              />
              <img
                src={require('../../assets/Images/genesisText.png')}
                alt="Genesis"
                className="h-6"
                style={{ height: '24px' }}
              />
            </div>
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-gray-800 hover:text-gray-900 font-medium text-sm transition-colors relative"
                  style={{
                    fontSize: '15px',
                    letterSpacing: '0.01em',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-5">
            {/* Social Icons */}
            <a href="#" className="transition-transform hover:scale-110">
              <img
                src={require('../../assets/Images/icon1.png')}
                alt="Icon 1"
                className="h-5 w-5"
                style={{ height: '20px', width: '20px' }}
              />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <img
                src={require('../../assets/Images/icon2.png')}
                alt="Icon 2"
                className="h-5 w-5"
                style={{ height: '20px', width: '20px' }}
              />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <img
                src={require('../../assets/Images/icon3.png')}
                alt="Icon 3"
                className="h-5 w-5"
                style={{ height: '20px', width: '20px' }}
              />
            </a>
            <a href="#" className="transition-transform hover:scale-110">
              <img
                src={require('../../assets/Images/icon4.png')}
                alt="Icon 4"
                className="h-5 w-5"
                style={{ height: '20px', width: '20px' }}
              />
            </a>

            {/* Contact Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="relative text-white font-medium px-8 py-2.5 transition-all hover:scale-105 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #8FD14F 0%, #5FBF3F 100%)',
                fontSize: '15px',
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
