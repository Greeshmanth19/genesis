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
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#F9FEF1] to-[#E8F5E8] px-4 lg:pl-8 lg:pr-16 overflow-hidden"
      style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}
    >
      {/* Full Background Mist Layer 1 - Base layer covering entire background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `url("${pixelatedNoiseDataUrl}")`,
          backgroundSize: '150px 150px',
          mixBlendMode: 'multiply',
          filter: 'contrast(180%) brightness(150%)',
          opacity: 0.3,
          maskImage: `linear-gradient(90deg,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.05) 20%,
            rgba(0,0,0,0.15) 35%,
            rgba(0,0,0,0.3) 50%,
            rgba(0,0,0,0.5) 65%,
            rgba(0,0,0,0.7) 80%,
            rgba(0,0,0,1) 100%)`,
          WebkitMaskImage: `linear-gradient(90deg,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.05) 20%,
            rgba(0,0,0,0.15) 35%,
            rgba(0,0,0,0.3) 50%,
            rgba(0,0,0,0.5) 65%,
            rgba(0,0,0,0.7) 80%,
            rgba(0,0,0,1) 100%)`,
          zIndex: 1,
        }}
      />

      {/* Full Background Mist Layer 2 - Gradient overlay for smooth transition */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, 
            rgba(249, 254, 241, 1) 0%, 
            rgba(249, 254, 241, 0.98) 10%, 
            rgba(249, 254, 241, 0.85) 25%, 
            rgba(232, 245, 232, 0.6) 40%, 
            rgba(232, 245, 232, 0.3) 55%, 
            rgba(216, 243, 216, 0.15) 70%, 
            rgba(216, 243, 216, 0.05) 85%, 
            transparent 100%)`,
          zIndex: 2,
        }}
      />

      {/* Full Background Mist Layer 3 - Enhanced noise with natural fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `url("${pixelatedNoiseDataUrl}")`,
          backgroundSize: '100px 100px',
          mixBlendMode: 'hard-light',
          filter: 'contrast(260%) brightness(180%) hue-rotate(10deg)',
          maskImage: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(0,0,0,0.02) 10%, 
            rgba(0,0,0,0.05) 20%, 
            rgba(0,0,0,0.15) 30%, 
            rgba(0,0,0,0.3) 40%, 
            rgba(0,0,0,0.5) 50%, 
            rgba(0,0,0,0.7) 65%, 
            rgba(0,0,0,0.85) 75%, 
            rgba(0,0,0,0.95) 85%, 
            rgba(0,0,0,1) 95%)`,
          WebkitMaskImage: `linear-gradient(90deg, 
            transparent 0%, 
            rgba(0,0,0,0.02) 10%, 
            rgba(0,0,0,0.05) 20%, 
            rgba(0,0,0,0.15) 30%, 
            rgba(0,0,0,0.3) 40%, 
            rgba(0,0,0,0.5) 50%, 
            rgba(0,0,0,0.7) 65%, 
            rgba(0,0,0,0.85) 75%, 
            rgba(0,0,0,0.95) 85%, 
            rgba(0,0,0,1) 95%)`,
          zIndex: 3,
        }}
      />

      {/* Full Background Mist Layer 4 - Flowing animated layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `url("${pixelatedNoiseDataUrl}")`,
          backgroundSize: '200px 200px',
          mixBlendMode: 'soft-light',
          filter: 'contrast(200%) brightness(140%)',
          opacity: 0.4,
          maskImage: `radial-gradient(ellipse 200% 120% at 100% 50%, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 20%, 
            rgba(0,0,0,0.7) 40%, 
            rgba(0,0,0,0.4) 60%, 
            rgba(0,0,0,0.15) 75%, 
            rgba(0,0,0,0.05) 85%, 
            transparent 95%)`,
          WebkitMaskImage: `radial-gradient(ellipse 200% 120% at 100% 50%, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 20%, 
            rgba(0,0,0,0.7) 40%, 
            rgba(0,0,0,0.4) 60%, 
            rgba(0,0,0,0.15) 75%, 
            rgba(0,0,0,0.05) 85%, 
            transparent 95%)`,
          animation: 'mistFlow 15s ease-in-out infinite',
          zIndex: 4,
        }}
      />

      {/* Additional soft mist layer to blend any remaining lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, 
            rgba(249, 254, 241, 0.5) 0%, 
            rgba(249, 254, 241, 0.3) 35%, 
            transparent 60%)`,
          mixBlendMode: 'screen',
          zIndex: 5,
        }}
      />

      {/* Top-left corner specific fade layer to eliminate any sharp lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 0% 0%, 
            rgba(249, 254, 241, 0.8) 0%, 
            rgba(249, 254, 241, 0.5) 20%, 
            rgba(232, 245, 232, 0.3) 40%, 
            transparent 70%)`,
          mixBlendMode: 'normal',
          zIndex: 6,
        }}
      />

      {/* Left Side - Content - FIXED: Removed flex-1 and max-w-lg, made it stick to left on desktop */}
      <div
        className="relative flex flex-col justify-center mt-20 lg:mt-[200px] order-1 lg:order-1 w-full lg:w-auto"
        style={{ zIndex: 20 }}
      >
        <div className="text-left">
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

          {/* Main Heading - Desktop zoom-responsive, Mobile normal */}
          <div className="mb-2 lg:mb-6">
            <h1 className="leading-none">
              <span
                className="block lg:hidden"
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  fontSize: '42px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                }}
              >
                From Idea <br />
                to Successful <br />
                <span style={{ whiteSpace: 'nowrap' }}>
                  Token in{' '}
                  <span
                    style={{
                      fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                      fontSize: '35px',
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
                </span>
              </span>

              {/* Desktop version with zoom-responsive scaling */}
              <div className="hidden lg:block">
                <span
                  className="block"
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
                  From Idea
                </span>
                <span
                  className="block"
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
                  to Successful
                </span>
                <span
                  className="block"
                  style={{
                    color: '#000',
                    fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                    fontSize: '62px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '90%',
                    letterSpacing: '-2.16px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Token in{' '}
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
                </span>
              </div>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-2 lg:mb-8">
            {/* Mobile Description */}
            <p
              className="block lg:hidden text-black leading-relaxed"
              style={{
                fontSize: '15px',
                fontStyle: 'normal',
                lineHeight: '110%',
                color: '#000',
              }}
            >
              We launch token projects with transparency, <br />
              security, and trusted support, turning bold <br />
              ideas into thriving businesses.
            </p>

            {/* Desktop Description */}
            <p
              className="hidden lg:block text-black text-base leading-relaxed"
              style={{
                fontSize: '18px',
                fontStyle: 'normal',
                lineHeight: '110%',
                color: '#000',
              }}
            >
              We launch token projects with transparency, <br /> security, and trusted support,
              turning bold <br /> ideas into thriving businesses.
            </p>
          </div>

          {/* CTA Button - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block relative">
            <button
              className="relative text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 overflow-hidden focus:outline-none focus-visible:outline-none"
              style={{
                borderRadius: '90px',
                border: '1px solid #DAE339',
                background:
                  'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
                boxShadow:
                  '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
                outline: 'none',
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
                  borderRadius: '90px',
                  transform: 'translateY(2px)',
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
                  'radial-gradient(ellipse at center top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse at center top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)',
                animation: 'noiseFlow 8s linear infinite',
                borderRadius: '0 0 50% 50%',
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Side - Image Section */}
      <div
        className="relative flex-1 flex items-center justify-center lg:justify-end order-2 lg:order-2 mt-2 lg:mt-0 mb-12 lg:mb-0"
        style={{ zIndex: 5 }}
      >
        <div className="relative">
          <div className="relative">
            <div className="relative">
              {/* Background Image Container with Noise Effect - No gradient background */}
              <div
                className="absolute flex items-center justify-center -top-10 -right-20 -bottom-10 -left-10 lg:-top-20 lg:-right-20 lg:-bottom-20 lg:-left-96"
                style={{
                  zIndex: 2,
                  maskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%), linear-gradient(to left, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.6) 10%, rgba(0,0,0,1) 20%)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%), linear-gradient(to left, transparent 0%, rgba(0,0,0,0.3) 5%, rgba(0,0,0,0.6) 10%, rgba(0,0,0,1) 20%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in',
                }}
              >
                {/* Original bgMainShade.png */}
                <img
                  src={require('../assets/Images/bgMainShade.png')}
                  alt="Background Shade"
                  style={{
                    maskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)',
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
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage:
                      'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)',
                    zIndex: 3,
                  }}
                />
              </div>

              {/* Genesis Main Image - Responsive size */}
              <img
                src={require('../assets/Images/genesisMain.png')}
                alt="Genesis Logo"
                className="relative object-contain w-[450px] h-[450px] lg:w-[810px] lg:h-[810px] max-w-none max-h-none"
                style={{ zIndex: 10 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA Button - Full width on mobile - FIXED: Adjusted padding */}
      <div
        className="relative lg:hidden block order-3 w-full -mt-8 mb-4 px-4"
        style={{ zIndex: 10 }}
      >
        <div className="relative">
          <button
            className="relative text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 w-full overflow-hidden focus:outline-none focus-visible:outline-none"
            style={{
              borderRadius: '90px',
              border: '1px solid #DAE339',
              background:
                'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
              boxShadow:
                '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
              outline: 'none',
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
                borderRadius: '90px',
                transform: 'translateY(1px)',
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
                'radial-gradient(ellipse at center top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.1) 60%, rgba(0,0,0,0) 100%)',
              animation: 'noiseFlow 8s linear infinite',
              borderRadius: '0 0 40% 40%',
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
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
          
          @keyframes mistFlow {
            0%, 100% {
              transform: translateX(0) translateY(0);
              opacity: 0.4;
            }
            25% {
              transform: translateX(-10px) translateY(5px);
              opacity: 0.5;
            }
            50% {
              transform: translateX(5px) translateY(-10px);
              opacity: 0.3;
            }
            75% {
              transform: translateX(-5px) translateY(10px);
              opacity: 0.45;
            }
          }
          
          /* Remove all focus outlines for buttons */
          button:focus {
            outline: none !important;
            box-shadow: 0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset !important;
          }
          
          button:focus-visible {
            outline: none !important;
          }
          
          button:active {
            outline: none !important;
          }
          
          /* Ensure no border appears on click */
          button {
            -webkit-tap-highlight-color: transparent;
            -webkit-focus-ring-color: transparent;
            outline: none !important;
          }
        `,
        }}
      />
    </div>
  );
};

export default HomePage;
