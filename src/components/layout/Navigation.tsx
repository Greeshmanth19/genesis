import React, { useState, useEffect } from 'react';
import { useNavigationStore } from '../../store';
import { scrollToElement } from '../../lib/utils';

const Navigation: React.FC = () => {
  const { activeSection, setActiveSection } = useNavigationStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="absolute z-50 w-full">
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Left Section - Logo and Nav Items */}
            <div className="flex items-center justify-between gap-[280px]">
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
              <div className="flex items-center gap-4">
                <a href="#" className="transition-transform hover:scale-110">
                  <img
                    src={require('../../assets/Images/icon1.png')}
                    alt="Icon 1"
                    className="h-9 w-9"
                    style={{ height: '35px', width: '35px' }}
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <img
                    src={require('../../assets/Images/icon2.png')}
                    alt="Icon 2"
                    className="h-9 w-9"
                    style={{ height: '35px', width: '35px' }}
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <img
                    src={require('../../assets/Images/icon3.png')}
                    alt="Icon 3"
                    className="h-9 w-9"
                    style={{ height: '35px', width: '35px' }}
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <img
                    src={require('../../assets/Images/icon4.png')}
                    alt="Icon 4"
                    className="h-9 w-9"
                    style={{ height: '35px', width: '35px' }}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Contact Button with Black Background and Gradient Inner Element */}
          <div
            className="absolute top-0 right-0"
            style={{
              width: '250px',
              height: '60px',
              overflow: 'hidden',
              zIndex: 60,
            }}
          >
            {/* Outer SVG for black background shape */}
            <svg
              width="250"
              height="60"
              viewBox="0 0 250 60"
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
              }}
            >
              <path
                d="M 250 0 L 0 0 L 45 54 L 43 45 C 40 54 50 60 60 60 L 250 60 Z"
                fill="#000000"
              />
            </svg>

            {/* Inner SVG for gradient shape with padding */}
            <svg
              width="220"
              height="60"
              viewBox="0 0 240 50"
              style={{
                position: 'absolute',
                top: '-2px',
                right: '20px',
              }}
            >
              <defs>
                <linearGradient
                  id="contactGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                  gradientTransform="rotate(101)"
                >
                  <stop offset="-3.32%" stopColor="#DAE339" />
                  <stop offset="51.06%" stopColor="#00B935" />
                  <stop offset="105.44%" stopColor="#DAE339" />
                </linearGradient>
                <filter id="contactShadow" x="-50%" y="-50%" width="200%" height="200%">
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="0"
                    floodColor="rgba(103, 178, 51, 0.60)"
                  />
                  <feDropShadow dx="0" dy="0" stdDeviation="0" floodColor="rgba(0, 235, 0, 0.20)" />
                  <feDropShadow
                    dx="0"
                    dy="16"
                    stdDeviation="15"
                    floodColor="rgba(113, 173, 77, 0.40)"
                  />
                </filter>
              </defs>
              <path
                d="M 240 0 L 5 0 L 45 44 L 43 38 C 40 44 50 50 60 50 L 240 50 Z"
                fill="url(#contactGradient)"
                stroke="#DAE339"
                strokeWidth="1"
                filter="url(#contactShadow)"
                style={{
                  boxShadow: '0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
                }}
              />
            </svg>

            {/* Contact Us text - Positioned in the center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => handleNavClick('contact')}
                className="text-white font-medium transition-all duration-300"
                style={{
                  fontSize: '13px',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                }}
              >
                <span className="relative z-10">Contact Us</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src={require('../../assets/Images/genesisLogo.png')}
                alt="Genesis"
                className="h-8 w-6"
                style={{ height: '32px', width: '24px' }}
              />
              <img
                src={require('../../assets/Images/genesisText.png')}
                alt="Genesis"
                className="h-5"
                style={{ height: '20px' }}
              />
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1 mr-4"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              ></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Full screen menu with gradient background */}
          <div
            className="fixed inset-0 w-full h-full transition-all duration-300 flex flex-col"
            style={{
              background:
                'linear-gradient(180deg, rgba(240, 240, 240, 0.95) 0%, rgba(218, 227, 57, 0.3) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between px-6 py-4 pt-8 flex-shrink-0">
              <div className="flex items-center gap-2">
                <img
                  src={require('../../assets/Images/genesisLogo.png')}
                  alt="Genesis"
                  className="h-8 w-6"
                  style={{ height: '32px', width: '24px' }}
                />
                <img
                  src={require('../../assets/Images/genesisText.png')}
                  alt="Genesis"
                  className="h-5"
                  style={{ height: '20px' }}
                />
              </div>

              {/* Close X button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Navigation Items - Takes up available space */}
            <div className="flex-1 px-6 mt-8 relative overflow-hidden">
              {/* Background image with dissolved/fade effect */}
              <div
                className="absolute inset-0 -inset-x-6"
                style={{
                  backgroundImage: `url(${require('../../assets/Images/bgMainShade.png')})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.6,
                  maskImage:
                    'radial-gradient(ellipse 120% 80% at center center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 120% 80% at center center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.3) 80%, transparent 100%)',
                }}
              />

              {/* Navigation items with relative positioning */}
              <div className="relative z-10 space-y-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left text-black font-medium text-2xl transition-colors hover:text-gray-700"
                    style={{
                      fontSize: '24px',
                      fontWeight: '500',
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Icons and Contact Button - Fixed at bottom */}
            <div className="flex-shrink-0 px-6 pb-8">
              <div className="flex items-center justify-center gap-8 mb-6">
                <a href="#" className="transition-transform hover:scale-110">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <img src={require('../../assets/Images/icon1.png')} alt="Icon 1" />
                  </div>
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <img
                      src={require('../../assets/Images/icon2.png')}
                      alt="Icon 2"
                      className="h-12 w-12"
                    />
                  </div>
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <img
                      src={require('../../assets/Images/icon3.png')}
                      alt="Icon 4"
                      className="h-12 w-12"
                    />
                  </div>
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <img
                      src={require('../../assets/Images/icon4.png')}
                      alt="Icon 4"
                      className="h-12 w-12"
                    />
                  </div>
                </a>
              </div>

              {/* Contact Button */}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-4 px-6 rounded-full font-medium text-white transition-all duration-300"
                style={{
                  background:
                    'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
                  boxShadow: '0 4px 15px rgba(113, 173, 77, 0.4)',
                  fontSize: '16px',
                  fontWeight: '500',
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
