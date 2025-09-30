import React, { useState, useEffect } from 'react';
import { Shield, UserCheck, Wifi, Droplet, FileCheck, Network, Users, Lock } from 'lucide-react';

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    // Auto-rotate through cards for ambient animation
    const interval = setInterval(() => {
      setActiveCard((prev) => {
        if (prev === null || prev >= 7) return 0;
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Launches',
      description: 'Smart contract audits &\nstress testing.',
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: 'Whitelist Access',
      description: 'Early entry for premium\ncommunity members.',
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'KOL Network',
      description: 'Visibility through\nprofessional influencers.',
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: 'Liquidity Support',
      description: 'Initial LP provision,\nrepayable post-launch.',
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: 'KYC Services',
      description: 'Compliance via Assure\nDeFi.',
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: 'Industry Connections',
      description: 'Access to trusted\nblockchain partners.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Advisory + Community',
      description: 'Active moderation +\nstrategy guidance.',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Vault Accountability',
      description: '30-day vault with community-\ncontrolled fund releases.',
    },
  ];

  // Title styles as inline style object
  const titleStyle = {
    color: '#FFF',
    fontFamily: '"TT Firs Neue Trl", "Inter", sans-serif',
    fontSize: '72px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '90%',
    letterSpacing: '-2.16px',
  };

  // Mobile title style
  const mobileTitleStyle = {
    ...titleStyle,
    fontSize: '48px',
    letterSpacing: '-1.44px',
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gradientTextStyle = {
    background: 'linear-gradient(100.72deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
  };

  return (
    <div className="min-h-0 lg:min-h-screen bg-black text-white overflow-hidden">
      {/* Removed animated background particles */}

      {/* Hero Section with slide-in animation */}
      <div
        className={`relative pt-8 pb-8 px-6 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 md:px-12 lg:px-24 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
          <div>
            <div
              className="mb-4 text-sm font-medium animate-shimmer"
              style={{
                ...gradientTextStyle,
                backgroundSize: '200% 100%',
                animation: 'shimmer 3s linear infinite',
              }}
            >
              Your Launchpad to Success in Blockchain & DeFi
            </div>
            <h1 className="animate-text-reveal" style={isMobile ? mobileTitleStyle : titleStyle}>
              <span className="inline-block animate-slide-in-left">Our</span>{' '}
              <span
                className="inline-block animate-slide-in-right"
                style={{ animationDelay: '0.2s' }}
              >
                Services
              </span>
            </h1>
          </div>
          <p
            className={`text-gray-400 max-w-3xl text-base leading-relaxed mt-8 md:mt-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            Genesis Incubations, together with <br className="hidden md:block" /> SparkStarter.com,
            ensures secure, transparent, <br className="hidden md:block" /> and community-driven
            token launches — from <br className="hidden md:block" /> audits to marketing and funding
            support.
          </p>
        </div>
      </div>

      {/* Services Grid with staggered entrance */}
      <div className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl p-5 flex transform transition-all duration-700
                  ${isMobile ? 'min-h-[140px] items-center' : 'min-h-[280px] flex-col'}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeCard === index ? 'scale-105' : 'scale-100'}
                  hover:scale-105 hover:z-10`}
                style={{
                  overflow: 'hidden',
                  background:
                    activeCard === index
                      ? 'linear-gradient(192deg, #1A1A1A 9.1%, #252525 91.25%)'
                      : 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  boxShadow:
                    activeCard === index
                      ? '0 0 0 1px rgba(218, 227, 57, 0.15), 0 0 30px rgba(218, 227, 57, 0.1)'
                      : 'none',
                  animationDelay: `${index * 0.1}s`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Icon box with rotation animation */}
                <div className={isMobile ? 'flex-shrink-0 mr-4' : 'absolute top-5 left-5'}>
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transform transition-all duration-500 relative overflow-hidden
                        ${activeCard === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}`}
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.50)',
                        border:
                          activeCard === index
                            ? '1px solid rgba(218, 227, 57, 0.5)'
                            : '1px solid #303030',
                        backdropFilter: 'blur(10px)',
                        animation:
                          activeCard === index ? 'icon-float 3s ease-in-out infinite' : 'none',
                      }}
                    >
                      <div
                        className={`transition-all duration-300 ${
                          activeCard === index ? 'scale-125' : 'scale-100'
                        }`}
                        style={{ color: activeCard === index ? '#DAE339' : '#ffffff' }}
                      >
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className={isMobile ? 'flex-1 relative z-10' : 'mt-auto relative z-10'}>
                  <h3
                    className={`text-lg font-semibold mb-1.5 transition-all duration-300 ${
                      activeCard === index ? 'text-green-400' : 'text-white'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-gray-500 text-sm leading-relaxed whitespace-pre-line transition-all duration-300 ${
                      activeCard === index ? 'text-gray-400' : 'text-gray-500'
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes icon-float {
          0%, 100% {
            transform: translateY(0) rotate(12deg);
          }
          50% {
            transform: translateY(-5px) rotate(12deg);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
