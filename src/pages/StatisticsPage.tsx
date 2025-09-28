import React, { useEffect, useState } from 'react';

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

  // Mock intersection observer hook
  const [isVisible] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isVisible, hasAnimated]);

  // Animation counter hook
  const useCountAnimation = (endValue: number, shouldAnimate: boolean) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!shouldAnimate) return;

      const duration = 2000;
      const startTime = Date.now();
      const startValue = 0;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [endValue, shouldAnimate]);

    return count;
  };

  const projectsCount = useCountAnimation(7, hasAnimated);
  const volumeCount = useCountAnimation(4.2, hasAnimated);
  const revenueCount = useCountAnimation(61, hasAnimated);

  const projectsData = [
    { name: 'Nodez', revenue: '$17,735', volume: '$850K' },
    { name: 'Beat', revenue: '$12,123', volume: '$1.1 Million' },
    { name: 'Blocklance', revenue: '$2,020', volume: '$300K' },
    { name: 'Orax', revenue: '$4,472', volume: '$92K' },
    { name: 'AxisLink', revenue: '$3,500', volume: '$250K' },
    { name: 'Zentium', revenue: '$12,697', volume: '$1.1 Million' },
    { name: 'Rollback', revenue: '$8,663', volume: '$530K' },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #F9FEF1 0%, #E8F5E8 50%, #D8F3D8 100%)',
        borderRadius: '30px',
      }}
    >
      {/* Global Pixelated Mesh Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `url("${pixelatedNoiseDataUrl}")`,
          backgroundSize: '120px 120px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
          filter: 'contrast(280%) brightness(160%) hue-rotate(20deg)',
          zIndex: 1,
        }}
      />

      {/* statShade replacement - Same chunky mesh effect as buttons with smooth edge fade */}
      <div
        className="absolute top-0 left-0 hidden md:block pointer-events-none"
        style={{
          zIndex: 5,
          width: '820px',
          height: '500px',
        }}
      >
        {/* Base gradient background similar to button */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 20% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 20% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* Same chunky mesh overlay as buttons with smooth fade */}
        <div
          className="absolute inset-0"
          style={{
            background: `url("${pixelatedNoiseDataUrl}")`,
            backgroundSize: '40px 40px',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'hard-light',
            filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
            animation: 'noiseFlow 8s linear infinite',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 20% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 20% 30%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>

      {/* Black Corner Section with Slanted Edge and Rounded Bottom-Right - Fixed Responsive */}
      <div className="absolute top-0 left-0" style={{ zIndex: 10 }}>
        {/* Desktop version */}
        <div className="hidden md:block">
          <svg width="550" height="100" viewBox="0 0 550 100">
            <path
              d="M 0 0 L 530 0 L 460 82 L 464 74 C 460 90 435 100 420 100 L 0 100 Z"
              fill="#000000"
            />
          </svg>
        </div>

        {/* Mobile version - FIXED to stick to left edge */}
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

        {/* "Statistics" text - properly positioned for all screen sizes */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          {/* Mobile positioning - FIXED to always stay at left */}
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
                className="text-white font-medium tracking-tight"
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
              className="text-white text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight"
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

      {/* Main Content Container - Responsive */}
      <div
        className="relative flex flex-col md:flex-row md:items-start md:justify-between px-4 md:px-8 lg:px-20 min-h-screen pb-2 md:pb-0"
        style={{ zIndex: 8 }}
      >
        {/* Left Side - Statistics - Move to bottom on mobile */}
        <div className="flex-1 max-w-md pt-8 md:pt-48 order-2 md:order-1">
          {/* Stats - Row layout on mobile, column on desktop */}
          <div className="flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-10 justify-between md:justify-start">
            {/* Total Projects */}
            <div className="flex-1 md:flex-none text-center md:text-left">
              <div
                className="font-medium mb-2 text-3xl md:text-7xl"
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                }}
              >
                {projectsCount}
              </div>
              <div className="text-[#000] font-medium text-xs md:text-base">
                Total Projects
                <br />
                Incubated
              </div>
            </div>

            {/* Total Volume */}
            <div className="flex-1 md:flex-none text-center md:text-left">
              <div
                className="font-medium mb-2 text-3xl md:text-7xl"
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                }}
              >
                ${volumeCount.toFixed(1)} mil
              </div>
              <div className="text-[#000] font-medium text-xs md:text-base">
                Total Volume
                <br />
                Generated
              </div>
            </div>

            {/* Total Revenue */}
            <div className="flex-1 md:flex-none text-center md:text-left">
              <div
                className="font-medium mb-2 text-3xl md:text-7xl"
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                }}
              >
                ${revenueCount} k
              </div>
              <div className="text-[#000] font-medium text-xs md:text-base">
                Total Revenue
                <br />
                Generated
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Projects Table - Move to top on mobile with proper spacing */}
        <div className="flex-1 max-w-full md:max-w-2xl order-1 md:order-2 mt-24 md:mt-10 ml-0 md:ml-0">
          {/* Header Section - Properly spaced from black shape */}
          <div
            className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8"
            style={{
              marginTop: '10px',
              marginBottom: '60px',
              paddingLeft: '0px',
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

            {/* Desktop Learn More Button with noise effect */}
            <div className="hidden md:block relative">
              <button
                className="relative text-white font-semibold px-6 md:px-8 py-3 transition-all duration-300 transform hover:scale-105 text-sm md:text-base w-full md:w-auto overflow-hidden"
                style={{
                  borderRadius: '90px',
                  border: '1px solid #DAE339',
                  background:
                    'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
                  boxShadow:
                    '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
                }}
              >
                {/* Button Noise Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '40px 40px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'hard-light',
                    filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
                    borderRadius: '90px',
                    animation: 'noiseFlow 8s linear infinite',
                  }}
                />
                <span className="relative z-10">Learn More</span>
              </button>

              {/* Trailing noise effect below button */}
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 pointer-events-none"
                style={{
                  width: '120%',
                  height: '60px',
                  background: `url("${pixelatedNoiseDataUrl}")`,
                  backgroundSize: '40px 40px',
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'multiply',
                  filter: 'contrast(250%) brightness(120%) hue-rotate(10deg)',
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                  animation: 'noiseFlow 8s linear infinite',
                  borderRadius: '0 0 50% 50%',
                }}
              />
            </div>
          </div>

          {/* Table Card */}
          <div className="backdrop-blur-sm rounded-2xl">
            {/* Table Header - Adjusted grid layout */}
            <div className="flex justify-between items-center mb-4 pb-4 px-2 md:px-0">
              {/* Project column */}
              <div
                className="flex-shrink-0 w-20 md:w-30 text-base md:text-2xl font-medium"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                }}
              >
                Project
              </div>

              {/* Revenue column */}
              <div
                className="flex-shrink-0 w-20 md:w-30 text-base md:text-2xl font-medium"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                }}
              >
                Revenue
              </div>

              {/* Volume column - aligned with other headers */}
              <div
                className="flex-shrink-0 w-25 md:w-35 text-base md:text-2xl font-medium text-right"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                }}
              >
                Volume
              </div>
            </div>

            {/* Table Rows - Adjusted layout */}
            <div className="space-y-2">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 md:py-3 px-2 md:px-0 border-b border-[#CDCDCD]"
                  style={{
                    animation: hasAnimated ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none',
                  }}
                >
                  {/* Project name */}
                  <div
                    className="flex-shrink-0 w-20 md:w-30 text-xs md:text-lg"
                    style={{
                      color: '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontWeight: 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
                    }}
                  >
                    {project.name}
                  </div>

                  {/* Revenue */}
                  <div
                    className="flex-shrink-0 w-20 md:w-30 text-xs md:text-lg"
                    style={{
                      color: '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontWeight: 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
                    }}
                  >
                    {project.revenue}
                  </div>

                  {/* Volume - positioned to the far right with more space */}
                  <div
                    className="flex-shrink-0 w-25 md:w-35 text-xs md:text-lg text-right"
                    style={{
                      color: '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontWeight: 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
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

      {/* Mobile Learn More Button with noise effect */}
      <div className="relative block md:hidden px-4 pb-4 -mt-[40px]" style={{ zIndex: 10 }}>
        <div className="flex justify-center">
          <div className="relative">
            <button
              className="relative text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 text-sm w-full max-w-xs overflow-hidden"
              style={{
                borderRadius: '90px',
                border: '1px solid #DAE339',
                background:
                  'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
                boxShadow:
                  '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
              }}
            >
              {/* Mobile Button Noise Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: `url("${pixelatedNoiseDataUrl}")`,
                  backgroundSize: '35px 35px',
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'hard-light',
                  filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
                  borderRadius: '90px',
                  animation: 'noiseFlow 8s linear infinite',
                }}
              />
              <span className="relative z-10">Learn More</span>
            </button>

            {/* Mobile Trailing noise effect below button */}
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 pointer-events-none"
              style={{
                width: '80%',
                height: '50px',
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '35px 35px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'multiply',
                filter: 'contrast(250%) brightness(120%) hue-rotate(10deg)',
                maskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
                animation: 'noiseFlow 8s linear infinite',
                borderRadius: '0 0 40% 40%',
              }}
            />
          </div>
        </div>
      </div>

      {/* statEndShade replacement - Same chunky mesh effect as buttons with smooth edge fade (smaller) */}
      <div
        className="absolute bottom-0 right-0 hidden md:block pointer-events-none"
        style={{
          zIndex: 5,
          width: '250px',
          height: '200px',
        }}
      >
        {/* Base gradient background similar to button */}
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

        {/* Same chunky mesh overlay as buttons with smooth fade */}
        <div
          className="absolute inset-0"
          style={{
            background: `url("${pixelatedNoiseDataUrl}")`,
            backgroundSize: '40px 40px',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'hard-light',
            filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
            animation: 'noiseFlow 8s linear infinite',
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

export default StatisticsPage;
