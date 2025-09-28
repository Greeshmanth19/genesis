import React from 'react';

const HomePage = () => {
  // Create seamless chunky, thick greenish pixelated mesh noise effect
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

  return (
    <div
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#F9FEF1] to-[#E8F5E8] px-8 lg:px-16 overflow-hidden"
      style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}
    >
      {/* Seamless Greenish Chunky Pixelated Mesh Noise Overlay - Spread more to the left */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-40%',
          right: '10%',
          top: '0%',
          bottom: '0%',
          background: `url("${pixelatedNoiseDataUrl}")`,
          backgroundSize: '120px 120px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply',
          filter: 'contrast(280%) brightness(160%) hue-rotate(20deg)',
          zIndex: 1,
        }}
      />

      {/* Left Side - Content */}
      <div
        className="relative flex-1 max-w-lg flex flex-col justify-center lg:mt-[120px] mt-20 order-1 lg:order-1"
        style={{ zIndex: 10 }}
      >
        <div>
          <div className="mb-2 lg:mb-6">
            <p
              className="mb-1 lg:mb-2"
              style={{
                color: '#000',
                fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '90%',
                letterSpacing: '-0.54px',
              }}
            >
              Genesis Incubations
            </p>
          </div>

          {/* Main Heading - Fixed font sizes */}
          <div className="mb-2 lg:mb-6">
            <h1>
              <span
                className="block lg:inline"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  fontSize: '62px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                }}
              >
                From Idea <br></br>to Successful <br></br> Token in{' '}
              </span>
              <span
                style={{
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  fontSize: '55px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                  background: 'linear-gradient(106deg, #DAE339 -4.38%, #00B935 37.94%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                30 Days
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-2 lg:mb-8">
            <p
              style={{
                fontSize: '18px',
                fontStyle: 'normal',
                lineHeight: '110%',
                color: '#10B981',
              }}
              className="text-gray-700 text-base leading-relaxed"
            >
              We launch token projects with transparency, <br /> security, and trusted support,
              turning bold <br /> ideas into thriving businesses.
            </p>
          </div>

          {/* CTA Button - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block relative">
            <button
              className="relative text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 overflow-hidden"
              style={{
                borderRadius: '90px',
                border: '1px solid #DAE339',
                background:
                  'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
                boxShadow:
                  '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
              }}
            >
              {/* Button Noise Overlay with downward flow effect */}
              <div
                className="absolute inset-0"
                style={{
                  background: `url("${pixelatedNoiseDataUrl}")`,
                  backgroundSize: '40px 40px',
                  backgroundRepeat: 'repeat',
                  mixBlendMode: 'hard-light',
                  filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
                  borderRadius: '90px',
                  transform: 'translateY(2px)',
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
      </div>

      {/* Right Side - Image Section */}
      <div
        className="relative flex-1 flex items-center justify-center lg:justify-end order-2 lg:order-2 mt-2 lg:mt-0 mb-12 lg:mb-0 lg:pl-16"
        style={{ zIndex: 10 }}
      >
        <div className="relative lg:transform lg:translate-x-20">
          <div className="relative">
            <div className="relative">
              {/* Background Image Container with Gradient Background and Noise Effect */}
              <div
                className="absolute flex items-center justify-center lg:-top-20 lg:-left-20 lg:-right-20 lg:-bottom-20 -top-10 -left-10 -right-10 -bottom-10"
                style={{
                  zIndex: 1,
                  background: 'linear-gradient(195deg, #F9FEF1 0%, #E8F5E8 50%, #D8F3D8 100%)',
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                }}
              >
                {/* Original bgMainShade.png */}
                <img
                  src={require('../assets/Images/bgMainShade.png')}
                  alt="Background Shade"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                  }}
                />

                {/* Enhanced seamless greenish chunky pixelated mesh overlay for bgMainShade area */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '100px 100px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'hard-light',
                    filter: 'contrast(320%) brightness(130%) hue-rotate(15deg)',
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.3) 85%, rgba(0,0,0,0) 100%)',
                  }}
                />
              </div>

              {/* Genesis Main Image - Responsive size */}
              <img
                src={require('../assets/Images/genesisMain.png')}
                alt="Genesis Logo"
                className="relative object-contain w-80 h-80 lg:w-[810px] lg:h-[810px] max-w-none max-h-none"
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA Button - Full width on mobile */}
      <div
        className="relative lg:hidden block order-3 w-full -mt-8 mb-4 px-2"
        style={{ zIndex: 10 }}
      >
        <div className="relative">
          <button
            className="relative text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 w-full overflow-hidden"
            style={{
              borderRadius: '90px',
              border: '1px solid #DAE339',
              background:
                'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
              boxShadow:
                '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
            }}
          >
            {/* Mobile Button Noise Overlay with downward flow effect */}
            <div
              className="absolute inset-0"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '35px 35px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'hard-light',
                filter: 'contrast(280%) brightness(140%) hue-rotate(10deg)',
                borderRadius: '90px',
                transform: 'translateY(1px)',
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

export default HomePage;
