import React from 'react';

const TouchPage: React.FC = () => {
  const handleSocialClick = (_platform: string) => {
    // Add your actual navigation logic here
    // console.log(`Navigate to ${platform}`);
  };

  // Create darker greenish pixelated mesh noise effect
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
          0.15 0.5 0.15 0 0.05
          0.2  0.6 0.2  0 0.05
          0.08 0.4 0.08 0 0.05
          0    0   0    1 0"/>
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='0.85'/>
    </svg>
  `)}`;

  return (
    <div
      className="relative py-12 mt-4"
      style={{
        background: 'linear-gradient(135deg, #F9FEF1 0%, #E8F5E8 50%, #D8F3D8 100%)',
        borderRadius: '30px',
      }}
    >
      {/* Enhanced CSS for complete focus/animation removal */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          /* Remove ALL focus indicators and animations */
          button {
            outline: none !important;
            border: none !important;
            box-shadow: none !important;
            -webkit-tap-highlight-color: transparent !important;
            -webkit-touch-callout: none !important;
            -webkit-user-select: none !important;
            user-select: none !important;
            transition: none !important;
            animation: none !important;
          }
          
          button:focus,
          button:focus-visible,
          button:focus-within,
          button:active,
          button:hover {
            outline: none !important;
            border: none !important;
            box-shadow: none !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
          }
          
          button * {
            outline: none !important;
            border: none !important;
            transition: none !important;
            animation: none !important;
          }
          
          /* Remove focus from all interactive elements */
          a, button, input, select, textarea, [tabindex] {
            outline: none !important;
            -webkit-tap-highlight-color: transparent !important;
          }
          
          /* Disable all animations on buttons */
          button, button * {
            animation: none !important;
            transition: none !important;
          }
          
          /* Ensure no hover effects create borders */
          button:hover {
            background: transparent !important;
            transform: none !important;
          }
          
          /* Remove any default button styling */
          button {
            background: none;
            cursor: pointer;
            padding: 0;
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }
        `,
        }}
      />

      {/* Black Corner Section with "Get in Touch" - Responsive */}
      <div className="absolute top-0 left-0" style={{ zIndex: 10 }}>
        {/* Desktop version */}
        <div className="hidden md:block">
          <svg width="550" height="100" viewBox="0 0 550 100">
            <path
              d="M 0 0 L 550 0 L 450 89 L 452 75 C 460 90 435 100 420 100 L 0 100 Z"
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

        {/* "Get in Touch" text - properly positioned for all screen sizes */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          {/* Mobile positioning - FIXED to center text within black shape */}
          <div className="block md:hidden w-full h-full flex items-center">
            <div
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 'calc(60vw - 40px)',
                textAlign: 'center',
                zIndex: 20,
              }}
            >
              <h2
                className="text-white font-medium tracking-tight"
                style={{
                  fontFamily: '"TT Firs Neue", sans-serif',
                  fontWeight: 500,
                  fontSize: '28px',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'nowrap',
                }}
              >
                Get in Touch
              </h2>
            </div>
          </div>
          {/* Desktop positioning */}
          <div className="hidden md:block pl-12">
            <h2
              className="text-white font-medium tracking-tight text-6xl"
              style={{
                fontFamily: '"TT Firs Neue", sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.02em',
              }}
            >
              Get in Touch
            </h2>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Desktop only at top right (xl screens and above) */}
      <div
        className="absolute top-0 right-0 hidden xl:flex items-center justify-end pr-[100px]"
        style={{ height: '100px', zIndex: 15 }}
      >
        {/* Desktop Layout - 4 icons in a row */}
        <div className="flex items-center gap-8 lg:gap-12 xl:gap-16" style={{ maxWidth: '800px' }}>
          {/* SparkStarter Icon */}
          <button
            onClick={() => handleSocialClick('SparkStarter')}
            className="flex items-center gap-4"
            tabIndex={-1}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
              <img
                src={require('../assets/Images/icon1.png')}
                alt="SparkStarter"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-xl pointer-events-none"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              SparkStarter
            </span>
          </button>

          {/* Unicrypt Icon */}
          <button
            onClick={() => handleSocialClick('Unicrypt')}
            className="flex items-center gap-4"
            tabIndex={-1}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
              <img
                src={require('../assets/Images/icon2.png')}
                alt="Unicrypt"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-xl pointer-events-none"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Unicrypt
            </span>
          </button>

          {/* Twitter/X Icon */}
          <button
            onClick={() => handleSocialClick('Twitter')}
            className="flex items-center gap-4"
            tabIndex={-1}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
              <img
                src={require('../assets/Images/icon3.png')}
                alt="Twitter/X"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-xl pointer-events-none"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Twitter/X
            </span>
          </button>

          {/* Telegram Icon */}
          <button
            onClick={() => handleSocialClick('Telegram')}
            className="flex items-center gap-4"
            tabIndex={-1}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
              <img
                src={require('../assets/Images/icon4.png')}
                alt="Telegram"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-xl pointer-events-none"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Telegram
            </span>
          </button>
        </div>
      </div>

      {/* Main Content Container - Responsive with proper spacing from black shape */}
      <div className="flex flex-col px-4 md:px-8 lg:px-20 mt-16 md:mt-24 lg:mt-28 xl:mt-32">
        {/* Social Media Icons - Tablet and Mobile: below black shape */}
        <div className="w-full mb-6 xl:hidden">
          {/* Tablet/Large Tablet Layout - 2x2 grid */}
          <div className="hidden md:grid grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 max-w-lg">
            {/* SparkStarter Icon */}
            <button
              onClick={() => handleSocialClick('SparkStarter')}
              className="flex items-center gap-3"
              tabIndex={-1}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
                <img
                  src={require('../assets/Images/icon1.png')}
                  alt="SparkStarter"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-lg pointer-events-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                SparkStarter
              </span>
            </button>

            {/* Unicrypt Icon */}
            <button
              onClick={() => handleSocialClick('Unicrypt')}
              className="flex items-center gap-3"
              tabIndex={-1}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
                <img
                  src={require('../assets/Images/icon2.png')}
                  alt="Unicrypt"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-lg pointer-events-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Unicrypt
              </span>
            </button>

            {/* Twitter/X Icon */}
            <button
              onClick={() => handleSocialClick('Twitter')}
              className="flex items-center gap-3"
              tabIndex={-1}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
                <img
                  src={require('../assets/Images/icon3.png')}
                  alt="Twitter/X"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-lg pointer-events-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Twitter/X
              </span>
            </button>

            {/* Telegram Icon */}
            <button
              onClick={() => handleSocialClick('Telegram')}
              className="flex items-center gap-3"
              tabIndex={-1}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
                <img
                  src={require('../assets/Images/icon4.png')}
                  alt="Telegram"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-lg pointer-events-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Telegram
              </span>
            </button>
          </div>

          {/* Mobile Layout - 2x2 grid stretching end to end */}
          <div className="grid md:hidden grid-cols-2 gap-y-3">
            {/* SparkStarter Icon */}
            <button
              onClick={() => handleSocialClick('SparkStarter')}
              className="flex items-center gap-2 justify-start"
              tabIndex={-1}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
                <img
                  src={require('../assets/Images/icon1.png')}
                  alt="SparkStarter"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-sm pointer-events-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                SparkStarter
              </span>
            </button>

            {/* Unicrypt Icon */}
            <button
              onClick={() => handleSocialClick('Unicrypt')}
              className="flex items-center gap-2 justify-end pr-2"
              tabIndex={-1}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
                <img
                  src={require('../assets/Images/icon2.png')}
                  alt="Unicrypt"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-sm pointer-events-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Unicrypt
              </span>
            </button>

            {/* Twitter/X Icon */}
            <button
              onClick={() => handleSocialClick('Twitter')}
              className="flex items-center gap-2 justify-start"
              tabIndex={-1}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
                <img
                  src={require('../assets/Images/icon3.png')}
                  alt="Twitter/X"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-sm pointer-events-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Twitter/X
              </span>
            </button>

            {/* Telegram Icon */}
            <button
              onClick={() => handleSocialClick('Telegram')}
              className="flex items-center gap-2 justify-end pr-2"
              tabIndex={-1}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden pointer-events-none">
                <img
                  src={require('../assets/Images/icon4.png')}
                  alt="Telegram"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-sm pointer-events-none"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Telegram
              </span>
            </button>
          </div>
        </div>

        {/* Main Description Text - Now left aligned with responsive font sizes and proper spacing */}
        <div className="mb-8 md:mb-12 max-w-2xl ml-0 xl:mt-0 mt-8">
          <p
            className="leading-relaxed text-lg md:text-2xl"
            style={{
              color: '#000',
              fontFamily: '"Space Grotesk", sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '120%',
              letterSpacing: '-0.54px',
            }}
          >
            We launch token projects with transparency,
            <br />
            security, and trusted support, turning bold
            <br />
            ideas into thriving businesses.
          </p>
        </div>

        {/* Footer Text - FIXED: Horizontal layout for mobile with space between */}
        <div className="w-full mb-16 md:mb-0">
          {/* Desktop/Tablet - Show both texts horizontally */}
          <div className="hidden md:flex justify-between items-center w-full">
            <p
              className="text-lg"
              style={{
                color: '#000',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '120%',
                letterSpacing: '-0.45px',
              }}
            >
              2025
            </p>
            <p
              className="text-lg"
              style={{
                color: '#000',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '120%',
                letterSpacing: '-0.45px',
                position: 'absolute',
                left: '30%',
                transform: 'translateX(-50%)',
              }}
            >
              Genesis All Rights Reserved
            </p>
          </div>

          {/* Mobile - FIXED: Horizontal layout with space-between */}
          <div className="flex md:hidden justify-between items-center w-full px-2">
            <p
              className="text-base"
              style={{
                color: '#000',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '120%',
                letterSpacing: '-0.45px',
              }}
            >
              2025
            </p>
            <div className="flex gap-2">
              <p
                className="text-base"
                style={{
                  color: '#000',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.45px',
                }}
              >
                Genesis
              </p>
              <p
                className="text-base"
                style={{
                  color: '#000',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '120%',
                  letterSpacing: '-0.45px',
                }}
              >
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Black Corner Section at Bottom Right with Contact Us Button - Now visible on all devices */}
      <div className="absolute -bottom-2 -right-1" style={{ zIndex: 10 }}>
        {/* Desktop/Large Desktop version */}
        <div
          className="hidden lg:block"
          style={{ width: '550px', height: '110px', overflow: 'hidden' }}
        >
          {/* Outer SVG for black background shape */}
          <svg
            width="550"
            height="110"
            viewBox="0 0 550 100"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          >
            <path
              d="M 550 100 L 0 100 L 100 16 L 100 16 C 105 12 115 0 130 0 L 550 0 Z"
              fill="#000000"
            />
          </svg>

          {/* Inner SVG for gradient shape with padding */}
          <svg
            width="530"
            height="100"
            viewBox="0 0 520 90"
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '5px',
            }}
          >
            <defs>
              <linearGradient
                id="bottomContactGradient"
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
              <filter id="bottomContactShadow" x="-50%" y="-50%" width="200%" height="200%">
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
              d="M 520 90 L 5 90 L 95 12 L 95 12 C 100 8 110 0 125 0 L 520 0 Z"
              fill="url(#bottomContactGradient)"
              stroke="#DAE339"
              strokeWidth="1"
              filter="url(#bottomContactShadow)"
              style={{
                boxShadow: '0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
              }}
            />
          </svg>

          {/* Contact Us text - Desktop positioning */}
          <button
            onClick={() => handleSocialClick('Contact')}
            className="absolute inset-0 text-white flex flex-col items-center justify-center cursor-pointer"
            tabIndex={-1}
            style={{
              width: '100%',
              height: '100%',
              outline: 'none',
              border: 'none',
              background: 'transparent',
            }}
          >
            <h3
              className="relative z-10 text-4xl font-medium pointer-events-none"
              style={{
                color: '#FFFFFF',
                fontFamily: '"TT Firs Neue", sans-serif',
                fontWeight: 500,
                lineHeight: '90%',
                letterSpacing: '-0.72px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              Contact Us
            </h3>
          </button>

          {/* Desktop Trailing noise effect below button */}
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 pointer-events-none"
            style={{
              width: '120%',
              height: '60px',
              background: `url("${pixelatedNoiseDataUrl}")`,
              backgroundSize: '40px 40px',
              backgroundRepeat: 'repeat',
              mixBlendMode: 'multiply',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              borderRadius: '0 0 50% 50%',
            }}
          />
        </div>

        {/* Tablet version - Smaller width to avoid overlap with footer text */}
        <div
          className="hidden md:block lg:hidden"
          style={{ width: '350px', height: '90px', overflow: 'hidden' }}
        >
          {/* Outer SVG for black background shape - Tablet */}
          <svg
            width="350"
            height="90"
            viewBox="0 0 350 80"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          >
            <path d="M 350 80 L 0 80 L 60 12 L 60 12 C 65 8 75 0 90 0 L 350 0 Z" fill="#000000" />
          </svg>

          {/* Inner SVG for gradient shape with padding - Tablet */}
          <svg
            width="340"
            height="85"
            viewBox="0 0 340 75"
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '3px',
            }}
          >
            <defs>
              <linearGradient
                id="bottomContactGradientTablet"
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
              <filter id="bottomContactShadowTablet" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="0"
                  floodColor="rgba(103, 178, 51, 0.60)"
                />
                <feDropShadow dx="0" dy="0" stdDeviation="0" floodColor="rgba(0, 235, 0, 0.20)" />
                <feDropShadow
                  dx="0"
                  dy="12"
                  stdDeviation="12"
                  floodColor="rgba(113, 173, 77, 0.40)"
                />
              </filter>
            </defs>
            <path
              d="M 340 75 L 5 75 L 55 10 L 55 10 C 60 6 70 0 85 0 L 340 0 Z"
              fill="url(#bottomContactGradientTablet)"
              stroke="#DAE339"
              strokeWidth="1"
              filter="url(#bottomContactShadowTablet)"
              style={{
                boxShadow: '0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
              }}
            />

            {/* Tablet Button Noise Overlay */}
            <defs>
              <clipPath id="tabletButtonClip">
                <path d="M 340 75 L 5 75 L 55 10 L 55 10 C 60 6 70 0 85 0 L 340 0 Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#tabletButtonClip)">
              <foreignObject x="0" y="0" width="340" height="75">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '38px 38px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'hard-light',
                  }}
                />
              </foreignObject>
            </g>
          </svg>

          {/* Contact Us text - Tablet positioning */}
          <button
            onClick={() => handleSocialClick('Contact')}
            className="absolute inset-0 text-white flex flex-col items-center justify-center cursor-pointer"
            tabIndex={-1}
            style={{
              width: '100%',
              height: '100%',
              outline: 'none',
              border: 'none',
              background: 'transparent',
            }}
          >
            <h3
              className="relative z-10 text-3xl font-medium pointer-events-none"
              style={{
                color: '#FFFFFF',
                fontFamily: '"TT Firs Neue", sans-serif',
                fontWeight: 500,
                lineHeight: '90%',
                letterSpacing: '-0.64px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              Contact Us
            </h3>
          </button>

          {/* Tablet Trailing noise effect below button */}
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 pointer-events-none"
            style={{
              width: '100%',
              height: '50px',
              background: `url("${pixelatedNoiseDataUrl}")`,
              backgroundSize: '38px 38px',
              backgroundRepeat: 'repeat',
              mixBlendMode: 'multiply',
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              borderRadius: '0 0 45% 45%',
            }}
          />
        </div>

        {/* Mobile version - Fixed with proper width and positioning */}
        <button
          onClick={() => handleSocialClick('Contact')}
          className="block md:hidden cursor-pointer relative"
          tabIndex={-1}
          style={{
            width: 'calc(100vw + 20px)',
            height: '80px',
            overflow: 'visible',
            borderRadius: '0 0 0 20px',
            marginRight: '-20px',
            outline: 'none',
            border: 'none',
            background: 'transparent',
          }}
        >
          {/* Outer SVG for black background shape - full width */}
          <svg
            width="100%"
            height="80"
            viewBox="0 0 420 80"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              overflow: 'visible',
            }}
          >
            <path
              d="M 420 70 L 380 20 C 370 8 360 0 345 0 L 75 0 C 60 0 50 4 40 12 L 0 70 L 0 80 L 420 80 Z"
              fill="#000000"
            />
          </svg>

          {/* Inner SVG for gradient shape - full width */}
          <svg
            width="99%"
            height="76"
            viewBox="0 0 415 70"
            style={{
              position: 'absolute',
              bottom: '2px',
              right: '2px',
            }}
          >
            <defs>
              <linearGradient
                id="bottomContactGradientMobile"
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
              <filter id="bottomContactShadowMobile" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="0"
                  floodColor="rgba(103, 178, 51, 0.60)"
                />
                <feDropShadow dx="0" dy="0" stdDeviation="0" floodColor="rgba(0, 235, 0, 0.20)" />
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="8"
                  floodColor="rgba(113, 173, 77, 0.40)"
                />
              </filter>
              <clipPath id="mobileButtonClip">
                <path d="M 410 70 L 370 18 C 360 6 350 0 335 0 L 75 0 C 60 0 50 3 40 10 L 2 70 L 0 70 L 0 70 L 410 70 Z" />
              </clipPath>
            </defs>
            <path
              d="M 410 70 L 370 18 C 360 6 350 0 335 0 L 75 0 C 60 0 50 3 40 10 L 2 70 L 0 70 L 0 70 L 410 70 Z"
              fill="url(#bottomContactGradientMobile)"
              stroke="#DAE339"
              strokeWidth="0.5"
              filter="url(#bottomContactShadowMobile)"
            />

            {/* Mobile Button Noise Overlay */}
            <g clipPath="url(#mobileButtonClip)">
              <foreignObject x="0" y="0" width="410" height="70">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '35px 35px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'hard-light',
                  }}
                />
              </foreignObject>
            </g>
          </svg>

          {/* Contact Us text - Mobile positioning */}
          <div
            className="absolute inset-0 text-white flex flex-col items-center justify-center pointer-events-none"
            style={{
              width: '100%',
              height: '100%',
              zIndex: 10,
            }}
          >
            <h3
              className="relative z-10 text-base font-medium"
              style={{
                color: '#FFFFFF',
                fontFamily: '"TT Firs Neue", sans-serif',
                fontWeight: 500,
                lineHeight: '90%',
                letterSpacing: '-0.32px',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
              }}
            >
              Contact Us
            </h3>
          </div>

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
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, rgba(0,0,0,0) 100%)',
              borderRadius: '0 0 40% 40%',
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default TouchPage;
