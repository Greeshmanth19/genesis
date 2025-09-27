import React from 'react';

const TouchPage: React.FC = () => {
  return (
    <div
      className="relative py-12"
      style={{
        background: 'linear-gradient(135deg, #F9FEF1 0%, #E8F5E8 50%, #D8F3D8 100%)',
        borderRadius: '30px',
      }}
    >
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

        {/* Mobile version */}
        <div className="block md:hidden" style={{ width: '90%', overflow: 'hidden' }}>
          <svg
            width="400"
            height="100"
            viewBox="0 0 400 100"
            style={{ position: 'absolute', top: '-10px', left: '-10px' }}
          >
            <path
              d="M 0 0 L 380 0 L 320 82 L 324 74 C 320 90 300 100 285 100 L 0 100 Z"
              fill="#000000"
            />
          </svg>
        </div>

        {/* "Get in Touch" text - properly positioned for all screen sizes */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          {/* Mobile positioning - precisely centered in the black surface */}
          <div className="block md:hidden w-full h-full flex items-center">
            <div
              style={{
                position: 'absolute',
                left: '30px',
                top: '20px',
                width: '200px',
                textAlign: 'center',
              }}
            >
              <h2
                className="text-white font-medium tracking-tight text-2xl md:text-6xl"
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

      {/* Social Media Icons - Desktop/Tablet: horizontal alignment, Mobile: below black section */}
      <div
        className="absolute top-0 right-0 hidden md:flex items-center justify-end pr-4 md:pr-[100px]"
        style={{ height: '100px', zIndex: 15 }}
      >
        {/* Desktop Layout - 4 icons in a row */}
        <div className="hidden lg:flex items-center gap-16" style={{ width: '800px' }}>
          {/* SparkStarter Icon */}
          <a
            href="#"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={require('../assets/Images/icon1.png')}
                alt="SparkStarter"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-xl"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              SparkStarter
            </span>
          </a>

          {/* Unicrypt Icon */}
          <a
            href="#"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={require('../assets/Images/icon2.png')}
                alt="Unicrypt"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-xl"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Unicrypt
            </span>
          </a>

          {/* Twitter/X Icon */}
          <a
            href="#"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={require('../assets/Images/icon3.png')}
                alt="Twitter/X"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-xl"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Twitter/X
            </span>
          </a>

          {/* Telegram Icon */}
          <a
            href="#"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={require('../assets/Images/icon4.png')}
                alt="Telegram"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-xl"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Telegram
            </span>
          </a>
        </div>

        {/* Tablet Layout - 2x2 grid */}
        <div
          className="hidden md:grid lg:hidden grid-cols-2 gap-x-12 gap-y-6"
          style={{ width: '300px' }}
        >
          {/* SparkStarter Icon */}
          <a
            href="#"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={require('../assets/Images/icon1.png')}
                alt="SparkStarter"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-lg"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              SparkStarter
            </span>
          </a>

          {/* Unicrypt Icon */}
          <a
            href="#"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={require('../assets/Images/icon2.png')}
                alt="Unicrypt"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-lg"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Unicrypt
            </span>
          </a>

          {/* Twitter/X Icon */}
          <a
            href="#"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={require('../assets/Images/icon3.png')}
                alt="Twitter/X"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-lg"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Twitter/X
            </span>
          </a>

          {/* Telegram Icon */}
          <a
            href="#"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={require('../assets/Images/icon4.png')}
                alt="Telegram"
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-black font-medium text-lg"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
              }}
            >
              Telegram
            </span>
          </a>
        </div>
      </div>

      {/* Main Content Container - Responsive */}
      <div className="flex flex-col px-4 md:px-8 lg:px-20 mt-24 md:mt-32">
        {/* Social Media Icons - Mobile only - below black section */}
        <div className="w-full flex justify-center mb-12 md:hidden">
          {/* Mobile Layout - 2x2 grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            {/* SparkStarter Icon */}
            <a
              href="#"
              className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={require('../assets/Images/icon1.png')}
                  alt="SparkStarter"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-sm"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                SparkStarter
              </span>
            </a>

            {/* Unicrypt Icon */}
            <a
              href="#"
              className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={require('../assets/Images/icon2.png')}
                  alt="Unicrypt"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-sm"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Unicrypt
              </span>
            </a>

            {/* Twitter/X Icon */}
            <a
              href="#"
              className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={require('../assets/Images/icon3.png')}
                  alt="Twitter/X"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-sm"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Twitter/X
              </span>
            </a>

            {/* Telegram Icon */}
            <a
              href="#"
              className="transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={require('../assets/Images/icon4.png')}
                  alt="Telegram"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-black font-medium text-sm"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                }}
              >
                Telegram
              </span>
            </a>
          </div>
        </div>

        {/* Main Description Text - Now left aligned with responsive font sizes */}
        <div className="mb-8 md:mb-12 max-w-2xl">
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

        {/* Footer Text - Now spread across full width with responsive font sizes */}
        <div className="flex justify-between items-center w-full">
          <p
            className="text-base md:text-lg font-bold mb-16 md:mb-0"
            style={{
              color: '#000',
              fontStyle: 'normal',
              lineHeight: '120%',
              letterSpacing: '-0.45px',
            }}
          >
            2025
          </p>
          <p
            className="text-base md:text-lg font-bold mb-16 md:mb-0"
            style={{
              color: '#000',
              fontStyle: 'normal',
              lineHeight: '120%',
              letterSpacing: '-0.45px',
            }}
          >
            Genesis All Rights Reserved
          </p>
        </div>
      </div>

      {/* Bottom Left Shade SVG - Hide on mobile to save space */}
      <div
        className="absolute left-0 hidden md:block"
        style={{
          bottom: '0px',
          left: '0px',
          zIndex: 1,
          width: '800px',
          height: '300px',
          overflow: 'hidden',
          borderRadius: '0 0 0 30px',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="300"
          viewBox="0 0 1231 372"
          fill="none"
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            transform: 'scale(0.7)',
            transformOrigin: 'bottom left',
          }}
        >
          <g opacity="0.4" filter="url(#filter0_f_33_601)">
            <path
              d="M1029.04 352.823C1004.95 555.609 730.125 689.669 415.208 652.253C100.291 614.838 -135.468 420.115 -111.375 217.329C-87.282 14.5427 178.259 302.869 493.176 340.285C808.094 377.7 1053.13 150.037 1029.04 352.823Z"
              fill="url(#paint0_linear_33_601)"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_33_601"
              x="-313.069"
              y="-54.3032"
              width="1543.75"
              height="912.82"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_33_601" />
            </filter>
            <linearGradient
              id="paint0_linear_33_601"
              x1="-49.5737"
              y1="-302.838"
              x2="1260.71"
              y2="257.638"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DCE35B" />
              <stop offset="1" stopColor="#45B649" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Black Corner Section at Bottom Right with Contact Us Button - Now visible on all devices */}
      <div className="absolute -bottom-2 -right-1" style={{ zIndex: 10 }}>
        {/* Desktop version */}
        <div
          className="hidden md:block"
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
          <div
            className="absolute inset-0 text-white flex flex-col items-center justify-center cursor-pointer"
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            <h3
              className="relative z-10 text-4xl font-medium"
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
          </div>
        </div>

        {/* Mobile version - Fixed with rounded edges and proper styling */}
        <div
          className="block md:hidden cursor-pointer"
          style={{
            width: '100vw',
            height: '80px',
            overflow: 'hidden',
            borderRadius: '0 0 0 20px',
          }}
        >
          {/* Outer SVG for black background shape with rounded corners */}
          <svg
            width="100%"
            height="90"
            viewBox="0 0 400 80"
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
            }}
          >
            <defs>
              <clipPath id="roundedClipMobile">
                <rect x="0" y="0" width="400" height="80" rx="20" ry="20" />
              </clipPath>
            </defs>
            <path
              d="M 400 80 L 320 10 C 315 4 305 0 295 0 L 105 0 C 95 0 85 4 80 10 L 0 80 Z"
              fill="#000000"
              clipPath="url(#roundedClipMobile)"
            />
          </svg>

          {/* Inner SVG for gradient shape with padding and rounded corners */}
          <svg
            width="100%"
            height="75"
            viewBox="0 0 395 70"
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
              <clipPath id="roundedClipInnerMobile">
                <rect x="0" y="0" width="395" height="70" rx="18" ry="18" />
              </clipPath>
            </defs>
            <path
              d="M 395 70 L 318 8 C 313 3 303 0 293 0 L 102 0 C 92 0 82 3 77 8 L 2 70 Z"
              fill="url(#bottomContactGradientMobile)"
              stroke="#DAE339"
              strokeWidth="0.5"
              filter="url(#bottomContactShadowMobile)"
              clipPath="url(#roundedClipInnerMobile)"
            />
          </svg>

          {/* Black overlay SVG on top with rounded corners */}
          <svg
            width="100%"
            height="75"
            viewBox="0 0 390 68"
            style={{
              position: 'absolute',
              bottom: '3px',
              right: '3px',
              zIndex: 5,
            }}
          >
            <defs>
              <clipPath id="roundedClipOverlayMobile">
                <rect x="0" y="0" width="390" height="68" rx="16" ry="16" />
              </clipPath>
            </defs>
            <path
              d="M 390 68 L 316 6 C 311 2 301 0 291 0 L 99 0 C 89 0 79 2 74 6 L 5 68 Z"
              fill="#000000"
              opacity="0.3"
              clipPath="url(#roundedClipOverlayMobile)"
            />
          </svg>

          {/* Contact Us text - Mobile positioning */}
          <div
            className="absolute inset-0 text-white flex flex-col items-center justify-center"
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
        </div>
      </div>
    </div>
  );
};

export default TouchPage;
