import React, { useEffect, useState } from 'react';

const StatisticsPage = () => {
  // Mock intersection observer hook
  const [isVisible, setIsVisible] = useState(true);
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
        position: 'relative',
      }}
    >
      {/* statShade.png Image - Positioned at top left */}
      <div
        className="absolute top-0 left-0"
        style={{
          zIndex: 5,
          width: '820px',
          height: 'auto',
        }}
      >
        <img
          src={require('../assets/Images/statShade.png')}
          alt="Statistics decoration"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
      {/* Black Corner Section with Slanted Edge and Rounded Bottom-Right */}a
      <div
        className="absolute top-0 left-0"
        style={{
          width: '550px',
          height: '100px',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        {/* SVG for custom angled shape */}
        <svg
          width="550"
          height="100"
          viewBox="0 0 550 100"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <path
            d="M 0 0 L 530 0 L 460 82 L 464 74 C 460 90 435 100 420 100 L 0 100 Z"
            fill="#000000"
          />
        </svg>

        {/* "Get in Touch" text */}
        <div
          className="absolute top-0 left-0 text-white flex items-center"
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: '100px',
          }}
        >
          <h2
            style={{
              fontSize: '62px',
              fontFamily: '"TT Firs Neue", sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.02em',
            }}
          >
            Statistics
          </h2>
        </div>
      </div>
      {/* Main Content Container */}
      <div className="flex items-start justify-between px-8 lg:px-20 min-h-screen">
        {/* Left Side - Statistics */}
        <div className="flex-1 max-w-md pt-48">
          {/* Stats */}
          <div className="space-y-10">
            {/* Total Projects */}
            <div>
              <div
                className="text-7xl font-medium mb-2"
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontSize: '72px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                }}
              >
                {projectsCount}
              </div>
              <div className="text-[#000] text-md font-medium">
                Total Projects
                <br />
                Incubated
              </div>
            </div>

            {/* Total Volume */}
            <div>
              <div
                className="text-6xl font-medium mb-2"
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontSize: '72px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                }}
              >
                ${volumeCount.toFixed(1)} mil
              </div>
              <div className="text-[#000] text-md font-medium">
                Total Volume
                <br />
                Generated
              </div>
            </div>

            {/* Total Revenue */}
            <div>
              <div
                className="text-6xl font-medium mb-2"
                style={{
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontSize: '72px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                }}
              >
                ${revenueCount} k
              </div>
              <div className="text-[#000] text-md font-medium">
                Total Revenue
                <br />
                Generated
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Projects Table */}
        <div className="flex-1 max-w-2xl">
          {/* Header Section - Aligned with black section */}
          <div
            className="flex items-center justify-between mb-8"
            style={{ marginTop: '30px', marginBottom: '70px' }}
          >
            <h2
              className="text-black"
              style={{
                fontSize: '45px',
                fontFamily: '"TT Firs Neue", sans-serif',
                fontWeight: 500,
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              Projects Incubated
              <br />& statistics
            </h2>

            <div>
              <button
                className="text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
                style={{
                  borderRadius: '90px',
                  border: '1px solid #DAE339',
                  background:
                    'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
                  boxShadow:
                    '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Table Card */}
          <div className="backdrop-blur-sm rounded-2xl">
            {/* Table Header - Adjusted grid layout */}
            <div className="flex justify-between items-center mb-6 pb-4">
              {/* Project column */}
              <div
                className="flex-shrink-0"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                  width: '120px',
                }}
              >
                Project
              </div>

              {/* Revenue column */}
              <div
                className="flex-shrink-0"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                  width: '120px',
                }}
              >
                Revenue
              </div>

              {/* Volume column - aligned with other headers */}
              <div
                className="flex-shrink-0"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  fontSize: '24px',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                  width: '140px',
                  textAlign: 'right',
                }}
              >
                Volume
              </div>
            </div>

            {/* Table Rows - Adjusted layout */}
            <div className="space-y-4">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3"
                  style={{
                    animation: hasAnimated ? `fadeInUp 0.5s ease-out ${index * 0.1}s both` : 'none',
                    borderBottom: '1px solid #CDCDCD',
                  }}
                >
                  {/* Project name */}
                  <div
                    className="flex-shrink-0"
                    style={{
                      color: '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
                      width: '120px',
                    }}
                  >
                    {project.name}
                  </div>

                  {/* Revenue */}
                  <div
                    className="flex-shrink-0"
                    style={{
                      color: '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
                      width: '120px',
                    }}
                  >
                    {project.revenue}
                  </div>

                  {/* Volume - positioned to the far right with more space */}
                  <div
                    className="flex-shrink-0"
                    style={{
                      color: '#000',
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontSize: '18px',
                      fontWeight: 400,
                      lineHeight: '90%',
                      letterSpacing: '-0.54px',
                      width: '140px',
                      textAlign: 'right',
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
      {/* statEndShade.png Image - Positioned at bottom end */}
      <div
        className="absolute bottom-0 right-0"
        style={{
          zIndex: 5,
          width: '300px',
          height: 'auto',
        }}
      >
        <img
          src={require('../assets/Images/statEndShade.png')}
          alt="Statistics bottom decoration"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </div>
      {/* Add keyframe animation */}
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
        `,
        }}
      />
    </div>
  );
};

export default StatisticsPage;
