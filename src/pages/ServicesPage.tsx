// ServicesPage.tsx
import React from 'react';
import { SecureIcon } from '../assets/icons/SecureIcon';
import { WhitelistIcon } from '../assets/icons/WhitelistIcon';
import { NetworkIcon } from '../assets/icons/NetworkIcon';
import { LiquidityIcon } from '../assets/icons/LiquidityIcon';
import { KYCIcon } from '../assets/icons/KYCIcon';
import { IndustryIcon } from '../assets/icons/IndustryIcon';
import { GroupIcon } from '../assets/icons/GroupIcon';
import VaultIcon from '../assets/icons/VaultIcon';

const ServicesPage: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
          <div>
            <div className="mb-4 text-green-400 text-sm font-medium">
              Your Launchpad to Success in Blockchain & DeFi
            </div>
            <h1 style={isMobile ? mobileTitleStyle : titleStyle}>Our Services</h1>
          </div>
          <p className="text-gray-400 max-w-3xl text-base leading-relaxed mt-8 md:mt-8">
            Genesis Incubations, together with <br className="hidden md:block" /> SparkStarter.com,
            ensures secure, transparent, <br className="hidden md:block" /> and community-driven
            token launches — from <br className="hidden md:block" /> audits to marketing and funding
            support.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 md:px-12 lg:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 flex overflow-hidden
                  ${isMobile ? 'min-h-[140px] items-center' : 'min-h-[280px] flex-col'}`}
                style={{
                  background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {/* Rough grainy surface mist - primary layer */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '40px 40px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'multiply',
                    filter: 'contrast(120%) brightness(130%)',
                    opacity: 0.4,
                    animation: 'noiseFlow 20s linear infinite',
                  }}
                />

                {/* Additional rough texture overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '25px 25px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay',
                    filter: 'contrast(150%) brightness(110%) blur(0.3px)',
                    opacity: 0.25,
                    animation: 'noiseFlow 15s linear infinite reverse',
                  }}
                />

                {/* Icon box - position changes based on mobile/desktop */}
                <div className={isMobile ? 'flex-shrink-0 mr-4' : 'absolute top-5 left-5'}>
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 relative overflow-hidden"
                      style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.50)',
                        border: '1px solid #303030',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {/* Greenish mesh effect for icon that completely dissolves into black */}
                      <div
                        className="absolute"
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
                          filter: 'contrast(180%) brightness(120%) hue-rotate(80deg) blur(2px)',
                          borderRadius: '50%',
                          opacity: 0.3,
                          maskImage:
                            'radial-gradient(circle at center, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)',
                          WebkitMaskImage:
                            'radial-gradient(circle at center, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)',
                        }}
                      />
                      <div className="relative z-10">{service.icon}</div>
                    </div>

                    {/* Downward flow effect that dissolves completely */}
                    <div
                      className="absolute pointer-events-none"
                      style={{
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '36px',
                        height: '32px',
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '14px 14px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'screen',
                        filter: 'contrast(180%) brightness(120%) hue-rotate(80deg) blur(2.5px)',
                        opacity: 0.25,
                        maskImage:
                          'radial-gradient(ellipse 70% 100% at center top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.03) 70%, rgba(0,0,0,0.01) 85%, rgba(0,0,0,0) 100%)',
                        WebkitMaskImage:
                          'radial-gradient(ellipse 70% 100% at center top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.03) 70%, rgba(0,0,0,0.01) 85%, rgba(0,0,0,0) 100%)',
                        borderRadius: '50%',
                        animation: 'noiseFlow 10s linear infinite',
                      }}
                    />
                  </div>
                </div>

                {/* Text content - position changes based on mobile/desktop */}
                <div className={isMobile ? 'flex-1 relative z-10' : 'mt-auto relative z-10'}>
                  <h3 className="text-lg font-semibold mb-1.5 text-white group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                </div>

                {/* Bottom rough surface mist - heavy grain texture */}
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
                    filter: 'contrast(140%) brightness(90%)',
                    opacity: 0.18,
                    maskImage:
                      'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                    WebkitMaskImage:
                      'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                    animation: 'noiseFlow 12s linear infinite',
                  }}
                />

                {/* Rough grainy corner accumulations */}
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
                    filter: 'contrast(130%) brightness(100%) blur(0.5px)',
                    opacity: 0.2,
                    borderRadius: '30%',
                    maskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                    animation: 'noiseFlow 16s linear infinite reverse',
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
                    filter: 'contrast(130%) brightness(100%) blur(0.5px)',
                    opacity: 0.2,
                    borderRadius: '30%',
                    maskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                    WebkitMaskImage:
                      'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                    animation: 'noiseFlow 16s linear infinite',
                  }}
                />

                {/* Enhanced mist effect - always visible (previously hover state) */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '120px 120px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'soft-light',
                    filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
                    animation: 'noiseFlow 8s linear infinite',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animation for downward flowing noise effect */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes noiseFlow {
            0% {
              background-position: 0px 0px;
            }
            100% {
              background-position: 0px 40px;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default ServicesPage;
