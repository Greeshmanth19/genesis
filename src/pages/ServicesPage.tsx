// ServicesPage.tsx
import React from 'react';
// Import all icon components
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
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 text-green-400 text-sm font-medium">
            Your Launchpad to Success in Blockchain & DeFi
          </div>
          <h1 style={isMobile ? mobileTitleStyle : titleStyle}>Our Services</h1>
          <p className="text-gray-400 max-w-3xl text-base leading-relaxed mt-8">
            Genesis Incubations, together with SparkStarter.com, ensures secure, transparent, and
            community-driven token launches — from audits to marketing and funding support.
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
                className="group relative rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 min-h-[280px] flex flex-col"
                style={{
                  background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {/* Icon box at top-left */}
                <div className="absolute top-5 left-5">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300"
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.50)',
                      border: '1px solid #303030',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Text content at bottom */}
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold mb-1.5 text-white group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
