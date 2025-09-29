import React, { useState, useEffect } from 'react';
import { SecureIcon } from '../assets/icons/SecureIcon';
import { WhitelistIcon } from '../assets/icons/WhitelistIcon';
import { NetworkIcon } from '../assets/icons/NetworkIcon';
import { LiquidityIcon } from '../assets/icons/LiquidityIcon';
import { KYCIcon } from '../assets/icons/KYCIcon';
import { IndustryIcon } from '../assets/icons/IndustryIcon';
import { GroupIcon } from '../assets/icons/GroupIcon';
import VaultIcon from '../assets/icons/VaultIcon';

const ServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate through cards for ambient animation
    const interval = setInterval(() => {
      setActiveCard(prev => {
        if (prev === null || prev >= 7) return 0;
        return prev + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <SecureIcon />,
      title: 'Secure Launches',
      description: 'Smart contract audits &\nstress testing.',
    },
    {
      icon: <WhitelistIcon />,
      title: 'Whitelist Access',
      description: 'Early entry for premium\ncommunity members.',
    },
    {
      icon: <NetworkIcon />,
      title: 'KOL Network',
      description: 'Visibility through\nprofessional influencers.',
    },
    {
      icon: <LiquidityIcon />,
      title: 'Liquidity Support',
      description: 'Initial LP provision,\nrepayable post-launch.',
    },
    {
      icon: <KYCIcon />,
      title: 'KYC Services',
      description: 'Compliance via Assure\nDeFi.',
    },
    {
      icon: <IndustryIcon />,
      title: 'Industry Connections',
      description: 'Access to trusted\nblockchain partners.',
    },
    {
      icon: <GroupIcon />,
      title: 'Advisory + Community',
      description: 'Active moderation +\nstrategy guidance.',
    },
    {
      icon: <VaultIcon />,
      title: 'Vault Accountability',
      description: '30-day vault with community-\ncontrolled fund releases.',
    },
  ];

  // Create rough, grainy surface mist effect with visible texture
  const pixelatedNoiseDataUrl = `data:image/svg+xml,${encodeURIComponent(`
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='turbulence' 
          baseFrequency='0.9' 
          numOctaves='4' 
          stitchTiles='stitch'
          seed='2'/>
        <feColorMatrix type="matrix" values="
          0.2 0.8 0.2 0 0.15
          0.3 0.9 0.3 0 0.15
          0.1 0.6 0.1 0 0.15
          0   0   0   1 0"/>
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='0.9'/>
    </svg>
  `)}`;

  // Title styles as inline style object
  const titleStyle: React.CSSProperties = {
    color: '#FFF',
    fontFamily: '"TT Firs Neue Trl", "Inter", sans-serif',
    fontSize: '72px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '90%',
    letterSpacing: '-2.16px',
  };

  // Mobile title style
  const mobileTitleStyle: React.CSSProperties = {
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

  const gradientTextStyle: React.CSSProperties = {
    background: 'linear-gradient(100.72deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block',
  };

  return (
    <div className="min-h-0 lg:min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-particle"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(218, 227, 57, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section with slide-in animation */}
      <div className={`relative pt-8 pb-8 px-6 md:pt-16 md:pb-12 lg:pt-20 lg:pb-16 md:px-12 lg:px-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
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
            <h1 
              className="animate-text-reveal"
              style={isMobile ? mobileTitleStyle : titleStyle}
            >
              <span className="inline-block animate-slide-in-left">Our</span>{' '}
              <span className="inline-block animate-slide-in-right" style={{ animationDelay: '0.2s' }}>Services</span>
            </h1>
          </div>
          <p className={`text-gray-400 max-w-3xl text-base leading-relaxed mt-8 md:mt-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
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
                className={`group relative rounded-2xl p-5 flex overflow-hidden transform transition-all duration-700
                  ${isMobile ? 'min-h-[140px] items-center' : 'min-h-[280px] flex-col'}
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${activeCard === index ? 'scale-105' : 'scale-100'}
                  hover:scale-105 hover:z-10`}
                style={{
                  background: activeCard === index 
                    ? 'linear-gradient(192deg, #1A1A1A 9.1%, #252525 91.25%)' 
                    : 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
                  border: activeCard === index 
                    ? '1px solid rgba(218, 227, 57, 0.3)' 
                    : '1px solid rgba(255, 255, 255, 0.05)',
                  animationDelay: `${index * 0.1}s`,
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={() => setActiveCard(index)}
              >
                {/* Animated pulse ring for active card */}
                {activeCard === index && (
                  <div className="absolute inset-0 animate-pulse-ring">
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        border: '1px solid rgba(218, 227, 57, 0.5)',
                        animation: 'pulse-expand 2s ease-out infinite',
                      }}
                    />
                  </div>
                )}

                {/* Rough grainy surface mist - primary layer with animation */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '40px 40px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'multiply',
                    opacity: 0.4,
                    animation: activeCard === index ? 'noiseFlow 8s linear infinite' : 'none',
                  }}
                />

                {/* Additional rough texture overlay with counter animation */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '25px 25px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay',
                    opacity: 0.25,
                    animation: activeCard === index ? 'noiseFlowReverse 12s linear infinite' : 'none',
                  }}
                />

                {/* Icon box with rotation animation */}
                <div className={isMobile ? 'flex-shrink-0 mr-4' : 'absolute top-5 left-5'}>
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transform transition-all duration-500 relative overflow-hidden
                        ${activeCard === index ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}`}
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.50)',
                        border: activeCard === index 
                          ? '1px solid rgba(218, 227, 57, 0.5)' 
                          : '1px solid #303030',
                        backdropFilter: 'blur(10px)',
                        animation: activeCard === index ? 'icon-float 3s ease-in-out infinite' : 'none',
                      }}
                    >
                      {/* Animated greenish mesh effect for icon */}
                      <div
                        className="absolute animate-spin-slow"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '52px',
                          height: '52px',
                          background: `url("${pixelatedNoiseDataUrl}")`,
                          backgroundSize: '18px 18px',
                          backgroundRepeat: 'repeat',
                          mixBlendMode: 'screen',
                          borderRadius: '50%',
                          opacity: activeCard === index ? 0.5 : 0.3,
                          maskImage:
                            'radial-gradient(circle at center, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)',
                          WebkitMaskImage:
                            'radial-gradient(circle at center, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)',
                          animationDuration: activeCard === index ? '4s' : '8s',
                        }}
                      />
                      <div className={`relative z-10 transition-all duration-300 ${
                        activeCard === index ? 'scale-125' : 'scale-100'
                      }`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Animated downward flow effect */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '36px',
                        height: activeCard === index ? '48px' : '32px',
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '14px 14px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'screen',
                        opacity: activeCard === index ? 0.4 : 0.25,
                        maskImage:
                          'radial-gradient(ellipse 70% 100% at center top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.03) 70%, rgba(0,0,0,0.01) 85%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage:
                          'radial-gradient(ellipse 70% 100% at center top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.03) 70%, rgba(0,0,0,0.01) 85%, rgba(0,0,0,0) 100%)',
                        borderRadius: '50%',
                        animation: activeCard === index ? 'drip-flow 2s ease-in-out infinite' : 'none',
                        transition: 'all 0.5s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Text content with typewriter effect for active card */}
                <div className={isMobile ? 'flex-1 relative z-10' : 'mt-auto relative z-10'}>
                  <h3 className={`text-lg font-semibold mb-1.5 transition-all duration-300 ${
                    activeCard === index ? 'text-green-400' : 'text-white'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-500 text-sm leading-relaxed whitespace-pre-line transition-all duration-300 ${
                    activeCard === index ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {service.description}
                  </p>
                </div>

                {/* Bottom rough surface mist with wave animation */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '70%',
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '30px 30px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'screen',
                    opacity: activeCard === index ? 0.25 : 0.18,
                    maskImage:
                      'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage:
                      'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                    animation: activeCard === index ? 'wave-motion 3s ease-in-out infinite' : 'none',
                  }}
                />

                {/* Animated corner accumulations */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: '-5px',
                    left: '-5px',
                    width: '100px',
                    height: '100px',
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '20px 20px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay',
                    opacity: activeCard === index ? 0.3 : 0.2,
                    borderRadius: '30%',
                    maskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                    animation: activeCard === index ? 'corner-pulse 4s ease-in-out infinite' : 'none',
                    transition: 'opacity 0.5s ease',
                  }}
                />

                <div
                  className="absolute pointer-events-none"
                  style={{
                    bottom: '-5px',
                    right: '-5px',
                    width: '100px',
                    height: '100px',
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '20px 20px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay',
                    opacity: activeCard === index ? 0.3 : 0.2,
                    borderRadius: '30%',
                    maskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                    animation: activeCard === index ? 'corner-pulse 4s ease-in-out infinite reverse' : 'none',
                    transition: 'opacity 0.5s ease',
                  }}
                />

                {/* Enhanced mist effect for active card */}
                {activeCard === index && (
                  <div
                    className="absolute inset-0 pointer-events-none animate-fade-in"
                    style={{
                      background: `url("${pixelatedNoiseDataUrl}")`,
                      backgroundSize: '120px 120px',
                      backgroundRepeat: 'repeat',
                      mixBlendMode: 'soft-light',
                      filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
                      animation: 'mist-swirl 6s ease-in-out infinite',
                    }}
                  />
                )}

                {/* Glow effect for active card */}
                {activeCard === index && (
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(218, 227, 57, 0.1) 0%, transparent 70%)',
                      animation: 'glow-pulse 2s ease-in-out infinite',
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
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

          @keyframes float-particle {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.1;
            }
            25% {
              transform: translate(50px, -30px) scale(1.2);
              opacity: 0.2;
            }
            50% {
              transform: translate(-30px, 20px) scale(0.8);
              opacity: 0.15;
            }
            75% {
              transform: translate(20px, -50px) scale(1.1);
              opacity: 0.1;
            }
          }

          .animate-float-particle {
            animation: float-particle 20s ease-in-out infinite;
          }

          @keyframes noiseFlow {
            0% {
              background-position: 0px 0px;
            }
            100% {
              background-position: 0px 40px;
            }
          }

          @keyframes noiseFlowReverse {
            0% {
              background-position: 0px 40px;
            }
            100% {
              background-position: 0px 0px;
            }
          }

          @keyframes icon-float {
            0%, 100% {
              transform: translateY(0) rotate(12deg);
            }
            50% {
              transform: translateY(-5px) rotate(12deg);
            }
          }

          @keyframes drip-flow {
            0%, 100% {
              transform: translateX(-50%) translateY(0);
              opacity: 0.4;
            }
            50% {
              transform: translateX(-50%) translateY(10px);
              opacity: 0.2;
            }
          }

          @keyframes wave-motion {
            0%, 100% {
              transform: translateY(0) scaleY(1);
            }
            50% {
              transform: translateY(-5px) scaleY(1.1);
            }
          }

          @keyframes corner-pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 0.3;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.15;
            }
          }

          @keyframes mist-swirl {
            0%, 100% {
              transform: rotate(0deg) scale(1);
            }
            25% {
              transform: rotate(2deg) scale(1.05);
            }
            50% {
              transform: rotate(-1deg) scale(1);
            }
            75% {
              transform: rotate(1deg) scale(1.02);
            }
          }

          @keyframes glow-pulse {
            0%, 100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
          }

          @keyframes pulse-expand {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.1);
              opacity: 0;
            }
          }

          .animate-fade-in {
            animation: fadeIn 0.5s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }

          @keyframes spin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `,
        }}
      />
    </div>
  );
};

export default ServicesPage;