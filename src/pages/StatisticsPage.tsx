import React, { useEffect, useState, useRef } from 'react';

const StatisticsPage = () => {
  // Create the same seamless chunky, thick greenish pixelated mesh noise effect
  const pixelatedNoiseDataUrl = `data:image/svg+xml,${encodeURIComponent(`
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='fractalNoise' 
          baseFrequency='0.45' 
          numOctaves='3' 
          stitchTiles='stitch'
          seed='5'/>
        <feColorMatrix type="matrix" values="
          0.2 0.8 0.2 0 0.1
          0.3 0.9 0.3 0 0.1
          0.1 0.6 0.1 0 0.1
          0   0   0   1 0"/>
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='0.7'/>
    </svg>
  `)}`;

  // Animation states
  const [isVisible] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [pulseActive, setPulseActive] = useState(true);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  // Animated counter with elastic easing
  const useCountAnimation = (endValue: number, shouldAnimate: boolean, decimals: number = 0) => {
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
      if (!shouldAnimate) return;

      const duration = 2500;
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        // Elastic easing for bounce effect
        const elasticOut = (t: number) => {
          const p = 0.3;
          return Math.pow(2, -10 * t) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) + 1;
        };

        const easeValue = progress < 0.5 ? progress * 2 : elasticOut(progress);

        const currentCount = startValue + (endValue - startValue) * easeValue;

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setIsComplete(true);
        }
      };

      requestAnimationFrame(updateCount);
    }, [endValue, shouldAnimate, decimals]);

    return { count, isComplete };
  };

  const projects = useCountAnimation(7, hasAnimated);
  const volume = useCountAnimation(4.2, hasAnimated, 1);
  const revenue = useCountAnimation(61, hasAnimated);

  const projectsData = [
    { name: 'Nodez', revenue: '$17,735', volume: '$850K', trend: 'up' },
    { name: 'Beat', revenue: '$12,123', volume: '$1.1 Million', trend: 'up' },
    { name: 'Blocklance', revenue: '$2,020', volume: '$300K', trend: 'down' },
    { name: 'Orax', revenue: '$4,472', volume: '$92K', trend: 'stable' },
    { name: 'AxisLink', revenue: '$3,500', volume: '$250K', trend: 'up' },
    { name: 'Zentium', revenue: '$12,697', volume: '$1.1 Million', trend: 'up' },
    { name: 'Rollback', revenue: '$8,663', volume: '$530K', trend: 'stable' },
  ];

  // Button style object
  const buttonStyle: React.CSSProperties = {
    borderRadius: '90px',
    border: '1px solid #DAE339',
    background: 'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
    boxShadow:
      '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
    outline: 'none',
    WebkitAppearance: 'none' as any,
    MozAppearance: 'none' as any,
    appearance: 'none' as any,
    WebkitTapHighlightColor: 'transparent' as any,
    touchAction: 'manipulation' as any,
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
    transform: 'none',
  };

  return (
    <div
      className="relative min-h-0 lg:min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F9FEF1 0%, #E8F5E8 50%, #D8F3D8 100%)',
        borderRadius: '30px',
        minHeight: 'fit-content',
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              top: `${30 + i * 20}%`,
              left: `${70 + i * 10}%`,
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(218, 227, 57, 0.08) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animationDelay: `${i * 3}s`,
              animationDuration: `${20 + i * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Global Pixelated Mesh Noise Overlay with animation */}
      <div
        className="absolute inset-0 pointer-events-none animate-noise-shift"
        style={{
          background: `url("${pixelatedNoiseDataUrl}")`,
          backgroundSize: '120px 120px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
          filter: 'contrast(280%) brightness(160%) hue-rotate(20deg)',
          zIndex: 1,
        }}
      />

      {/* Animated statShade with rotation */}
      <div
        className="absolute top-0 left-0 hidden md:block pointer-events-none animate-float-rotate"
        style={{
          zIndex: 5,
          width: '820px',
          height: '500px',
          transform: 'rotate(15deg)',
          top: '-100px',
        }}
      >
        {/* Base gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(96.56deg, color(display-p3 0.863 0.890 0.357) -10.21%, color(display-p3 0.271 0.714 0.286) 105.8%)',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 20% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 20% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Animated mesh overlay */}
        <div
          className="absolute inset-0 animate-mesh-flow"
          style={{
            background: `url("${pixelatedNoiseDataUrl}")`,
            backgroundSize: '40px 40px',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'hard-light',
            filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 20% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 20% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      {/* Black Corner Section with animated entrance */}
      <div
        className={`absolute top-0 left-0 transition-all duration-1000 ${
          hasAnimated ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ zIndex: 10 }}
      >
        {/* Desktop version */}
        <div className="hidden md:block">
          <svg width="550" height="100" viewBox="0 0 550 100">
            <path
              d="M 0 0 L 530 0 L 460 82 L 464 74 C 460 90 435 100 420 100 L 0 100 Z"
              fill="#000000"
            />
          </svg>
        </div>

        {/* Mobile version */}
        <div className="block md:hidden" style={{ width: '100vw', position: 'relative', left: 0 }}>
          <svg
            width="100%"
            height="70"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
            style={{
              display: 'block',
              minWidth: '100vw',
            }}
          >
            <path d="M 0 0 L 70 0 L 62 17 L 63 15 C 62 18 59 20 57 20 L 0 20 Z" fill="#000000" />
          </svg>
        </div>

        {/* "Statistics" text with typewriter effect */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          {/* Mobile positioning */}
          <div className="block md:hidden w-full h-full flex items-center">
            <div
              style={{
                position: 'absolute',
                left: '50px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '200px',
                textAlign: 'left',
                zIndex: 20,
              }}
            >
              <h2
                className={`text-white font-medium tracking-tight ${hasAnimated ? 'animate-typewriter' : 'opacity-0'}`}
                style={{
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: '34px',
                  letterSpacing: '-0.02em',
                }}
              >
                Statistics
              </h2>
            </div>
          </div>
          {/* Desktop positioning */}
          <div className="hidden md:block pl-20 lg:pl-28">
            <h2
              className={`text-white text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight ${
                hasAnimated ? 'animate-typewriter' : 'opacity-0'
              }`}
              style={{
                fontFamily: '"TT Firs Neue", sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
            >
              Statistics
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div
        className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between px-4 md:px-8 lg:px-20"
        style={{
          zIndex: 8,
          paddingBottom: '40px',
        }}
      >
        {/* Left Side - Statistics with continuous wave animation */}
        <div className="flex-1 max-w-md pt-8 md:pt-32 lg:pt-48 order-2 lg:order-1">
          <div className="flex flex-row lg:flex-col space-x-6 lg:space-x-0 lg:space-y-8 xl:space-y-10 justify-between lg:justify-start">
            {/* Total Projects */}
            <div
              className={`flex-1 lg:flex-none text-center lg:text-left transition-all duration-700 animate-stat-wave ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <div
                className={`font-medium mb-2 text-3xl lg:text-7xl ${projects.isComplete ? 'animate-number-bounce' : ''}`}
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                  animation: projects.isComplete
                    ? 'gradient-shift 4s ease-in-out infinite'
                    : 'none',
                }}
              >
                {Math.floor(projects.count)}
              </div>
              <div className="text-[#000] font-medium text-xs lg:text-base">
                Total Projects
                <br />
                Incubated
              </div>
            </div>

            {/* Total Volume */}
            <div
              className={`flex-1 lg:flex-none text-center lg:text-left transition-all duration-700 animate-stat-wave ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.8s' }}
            >
              <div
                className={`font-medium mb-2 text-3xl lg:text-7xl ${volume.isComplete ? 'animate-number-bounce' : ''}`}
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                  animation: volume.isComplete
                    ? 'gradient-shift 4s ease-in-out infinite 0.5s'
                    : 'none',
                }}
              >
                ${volume.count.toFixed(1)} mil
              </div>
              <div className="text-[#000] font-medium text-xs lg:text-base">
                Total Volume
                <br />
                Generated
              </div>
            </div>

            {/* Total Revenue */}
            <div
              className={`flex-1 lg:flex-none text-center lg:text-left transition-all duration-700 animate-stat-wave ${
                hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '1.6s' }}
            >
              <div
                className={`font-medium mb-2 text-3xl lg:text-7xl ${revenue.isComplete ? 'animate-number-bounce' : ''}`}
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                  animation: revenue.isComplete
                    ? 'gradient-shift 4s ease-in-out infinite 1s'
                    : 'none',
                }}
              >
                ${Math.floor(revenue.count)} k
              </div>
              <div className="text-[#000] font-medium text-xs lg:text-base">
                Total Revenue
                <br />
                Generated
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Projects Table with animations */}
        <div className="flex-1 max-w-full md:max-w-2xl order-1 md:order-2 mt-24 md:mt-10 ml-0 md:ml-0">
          {/* Header Section */}
          <div
            className={`flex flex-col md:flex-row md:items-center md:justify-between mb-5 md:mb-[60px] transition-all duration-700 ${
              hasAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{
              marginTop: '10px',
              animationDelay: '0.2s',
            }}
          >
            <h2
              className="text-black text-2xl md:text-5xl font-medium leading-tight tracking-tight"
              style={{
                fontFamily: '"TT Firs Neue", sans-serif',
              }}
            >
              Projects Incubated
              <br />& statistics
            </h2>

            {/* Desktop Learn More Button with hover effect */}
            <div className="hidden md:block relative">
              <button
                className="button-reset relative text-white font-semibold px-6 md:px-8 py-3 text-sm md:text-base w-full md:w-auto overflow-hidden hover:scale-105 active:scale-95"
                style={buttonStyle}
                tabIndex={-1}
              >
                {/* Button Noise Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '40px 40px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'hard-light',
                    borderRadius: '90px',
                  }}
                />
                <span className="relative z-10 pointer-events-none">Learn More</span>
              </button>

              {/* Trailing noise effect with animation */}
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 pointer-events-none animate-drip"
                style={{
                  width: '140%',
                  height: '80px',
                  background: `url("${pixelatedNoiseDataUrl}")`,
                  backgroundSize: '40px 40px',
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'multiply',
                  opacity: 0.6,
                  filter: 'contrast(180%) brightness(110%) hue-rotate(10deg) blur(0.5px)',
                  maskImage:
                    'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0) 90%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.45) 15%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0) 90%)',
                  borderRadius: '0 0 60% 60%',
                }}
              />
            </div>
          </div>

          {/* Table Card with hover effects */}
          <div className="backdrop-blur-sm rounded-2xl">
            {/* Table Header */}
            <div className="flex justify-between items-center mb-4 pb-4 px-2 md:px-0">
              <div
                className="flex-1 text-left font-medium animate-fade-in-up"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                  fontSize: 'clamp(16px, 2vw, 24px)',
                  animationDelay: '0.8s',
                }}
              >
                Project
              </div>

              <div
                className="flex-1 text-center font-medium animate-fade-in-up"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                  fontSize: 'clamp(16px, 2vw, 24px)',
                  animationDelay: '0.9s',
                }}
              >
                Revenue
              </div>

              <div
                className="flex-1 text-right font-medium animate-fade-in-up"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                  fontSize: 'clamp(16px, 2vw, 24px)',
                  animationDelay: '1s',
                }}
              >
                Volume
              </div>
            </div>

            {/* Table Rows with staggered animations and hover */}
            <div className="space-y-2">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center py-2 md:py-3 px-2 md:px-0 border-b border-[#CDCDCD] transition-all duration-300 cursor-pointer
                    ${hoveredProject === index ? 'bg-green-50 scale-105 shadow-lg' : ''}
                  `}
                  style={{
                    animation: hasAnimated
                      ? `slideInRight 0.5s ease-out ${0.8 + index * 0.1}s both`
                      : 'none',
                    transform:
                      hoveredProject === index ? 'translateX(10px) scale(1.02)' : 'translateX(0)',
                  }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project name without trend indicator */}
                  <div
                    className="flex-1 text-left"
                    style={{
                      color: hoveredProject === index ? '#00B935' : '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontWeight: hoveredProject === index ? 500 : 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
                      fontSize: 'clamp(12px, 1.5vw, 18px)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {project.name}
                  </div>

                  {/* Revenue */}
                  <div
                    className="flex-1 text-center"
                    style={{
                      color: hoveredProject === index ? '#DAE339' : '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontWeight: hoveredProject === index ? 600 : 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
                      fontSize: 'clamp(12px, 1.5vw, 18px)',
                    }}
                  >
                    {project.revenue}
                  </div>

                  {/* Volume */}
                  <div
                    className="flex-1 text-right"
                    style={{
                      color: hoveredProject === index ? '#00B935' : '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontWeight: hoveredProject === index ? 600 : 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
                      fontSize: 'clamp(12px, 1.5vw, 18px)',
                    }}
                  >
                    {project.volume}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Learn More Button */}
      <div className="relative block md:hidden px-4 pb-4" style={{ zIndex: 10, marginTop: 'auto' }}>
        <div className="flex justify-center">
          <div className="relative">
            <button
              className="button-reset relative text-white font-semibold px-8 py-3 text-sm w-full max-w-xs overflow-hidden active:scale-95"
              style={buttonStyle}
              tabIndex={-1}
            >
              {/* Mobile Button Noise Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `url("${pixelatedNoiseDataUrl}")`,
                  backgroundSize: '35px 35px',
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'hard-light',
                  filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
                  borderRadius: '90px',
                }}
              />
              <span className="relative z-10 pointer-events-none">Learn More</span>
            </button>

            {/* Mobile Trailing noise effect */}
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 pointer-events-none animate-drip"
              style={{
                width: '100%',
                height: '70px',
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '35px 35px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'multiply',
                opacity: 0.5,
                filter: 'contrast(160%) brightness(100%) hue-rotate(10deg) blur(0.3px)',
                maskImage:
                  'radial-gradient(ellipse 90% 90% at 50% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.05) 65%, rgba(0,0,0,0.01) 80%, rgba(0,0,0,0) 95%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 90% 90% at 50% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 20%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.12) 50%, rgba(0,0,0,0.05) 65%, rgba(0,0,0,0.01) 80%, rgba(0,0,0,0) 95%)',
                animation: 'noiseFlow 8s linear infinite',
                borderRadius: '0 0 50% 50%',
              }}
            />
          </div>
        </div>
      </div>

      {/* Animated bottom right shade */}
      <div
        className="absolute bottom-0 right-0 hidden md:block pointer-events-none animate-pulse-slow"
        style={{}}
      >
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
            maskImage:
              'radial-gradient(ellipse 60% 70% at 75% 65%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 70% at 75% 65%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
          }}
        />

        <div
          className="absolute inset-0 animate-mesh-flow-reverse"
          style={{
            background: `url("${pixelatedNoiseDataUrl}")`,
            backgroundSize: '40px 40px',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'hard-light',
            filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
            maskImage:
              'radial-gradient(ellipse 40% 70% at 75% 65%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 60% 70% at 75% 65%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      {/* CSS Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes typewriter {
            from {
              width: 0;
              opacity: 0;
            }
            to {
              width: 100%;
              opacity: 1;
            }
          }

          .animate-typewriter {
            overflow: hidden;
            white-space: nowrap;
            animation: typewriter 1s steps(10) forwards;
          }

          @keyframes number-bounce {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          .animate-number-bounce {
            animation: number-bounce 0.5s ease-out;
          }

          @keyframes stat-wave {
            0%, 100% {
              transform: translateY(0) translateX(0) rotate(0deg);
            }
            25% {
              transform: translateY(-8px) translateX(3px) rotate(1deg);
            }
            50% {
              transform: translateY(0) translateX(-2px) rotate(0deg);
            }
            75% {
              transform: translateY(8px) translateX(2px) rotate(-1deg);
            }
          }

          .animate-stat-wave {
            animation: stat-wave 6s ease-in-out infinite;
          }

          @keyframes gradient-shift {
            0%, 100% {
              background-position: 0% 50%;
              filter: hue-rotate(0deg);
            }
            25% {
              background-position: 50% 50%;
              filter: hue-rotate(5deg);
            }
            50% {
              background-position: 100% 50%;
              filter: hue-rotate(-5deg);
            }
            75% {
              background-position: 50% 50%;
              filter: hue-rotate(3deg);
            }
          }

          @keyframes bounce-in {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          .animate-bounce-in {
            animation: bounce-in 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          @keyframes float-slow {
            0%, 100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.08;
            }
            33% {
              transform: translate(30px, -20px) scale(1.1);
              opacity: 0.12;
            }
            66% {
              transform: translate(-20px, 10px) scale(0.95);
              opacity: 0.06;
            }
          }

          .animate-float-slow {
            animation: float-slow 25s ease-in-out infinite;
          }

          @keyframes float-rotate {
            0%, 100% {
              transform: rotate(15deg) translateY(0);
            }
            50% {
              transform: rotate(18deg) translateY(-20px);
            }
          }

          .animate-float-rotate {
            animation: float-rotate 8s ease-in-out infinite;
          }

          @keyframes mesh-flow {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 40px 40px;
            }
          }

          .animate-mesh-flow {
            animation: mesh-flow 20s linear infinite;
          }

          @keyframes mesh-flow-reverse {
            0% {
              background-position: 40px 40px;
            }
            100% {
              background-position: 0 0;
            }
          }

          .animate-mesh-flow-reverse {
            animation: mesh-flow-reverse 15s linear infinite;
          }

          @keyframes noise-shift {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(10px);
            }
          }

          .animate-noise-shift {
            animation: noise-shift 30s ease-in-out infinite;
          }

          @keyframes drip {
            0%, 100% {
              transform: translate(-50%, 0) scaleY(1);
              opacity: 0.6;
            }
            50% {
              transform: translate(-50%, 5px) scaleY(1.1);
              opacity: 0.4;
            }
          }

          .animate-drip {
            animation: drip 3s ease-in-out infinite;
          }

          @keyframes pulse-slow {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.05);
            }
          }

          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
          }
          
          @keyframes noiseFlow {
            0% {
              background-position: 0px 0px;
            }
            100% {
              background-position: 0px 40px;
            }
          }
          
          /* Button styles preserved */
          .button-reset {
            outline: none !important;
            border: 1px solid #DAE339 !important;
            box-shadow: 0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset !important;
            -webkit-tap-highlight-color: transparent !important;
            -webkit-focus-ring-color: transparent !important;
            -moz-outline-radius: 90px !important;
          }
          
          .button-reset:focus,
          .button-reset:active,
          .button-reset:focus-visible,
          .button-reset::-moz-focus-inner {
            outline: none !important;
            border: 1px solid #DAE339 !important;
            box-shadow: 0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset !important;
          }
          
          button {
            -webkit-tap-highlight-color: transparent !important;
            -webkit-focus-ring-color: transparent !important;
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            touch-action: manipulation !important;
          }
        `,
        }}
      />
    </div>
  );
};

export default StatisticsPage;
