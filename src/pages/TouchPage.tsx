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
      {/* Black Corner Section with "Get in Touch" - Reduced Height */}
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
            d="M 0 0 L 550 0 L 450 89 L 452 75 C 460 90 435 100 420 100 L 0 100 Z"
            fill="#000000"
          />
        </svg>

        {/* "Get in Touch" text */}
        <div
          className="absolute top-0 left-0 text-white flex items-center"
          style={{
            width: '100%',
            height: '100%',
            paddingLeft: '50px',
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
            Get in Touch
          </h2>
        </div>
      </div>

      {/* Social Media Icons - Made wider and with images */}
      <div
        className="absolute top-0 right-0 flex items-center justify-end gap-12 pr-12"
        style={{
          height: '100px',
          zIndex: 15,
          width: '800px',
        }}
      >
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
            className="text-black font-medium"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '16px',
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
            className="text-black font-medium"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '16px',
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
            className="text-black font-medium"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '16px',
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
            className="text-black font-medium"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: '16px',
            }}
          >
            Telegram
          </span>
        </a>
      </div>

      {/* Main Content Container */}
      <div className="flex items-center justify-between px-8 lg:px-20">
        {/* Left Side - Content positioned below black section */}
        <div className="flex-1 max-w-lg" style={{ marginTop: '80px', marginLeft: '-40px' }}>
          <div className="mb-10">
            <p
              style={{
                color: '#000',
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '18px',
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

          <div>
            <p
              style={{
                color: '#000',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '-0.45px',
              }}
            >
              2025
              <span className="ml-[110px]">Genesis All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Left Shade SVG */}
      <div
        className="absolute left-0"
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

      {/* Black Corner Section at Bottom Right with Contact Us - Reduced Height */}
      <div
        className="absolute -bottom-2 -right-1"
        style={{
          width: '550px',
          height: '110px',
          overflow: 'hidden',
          zIndex: 10,
        }}
      >
        {/* SVG for custom angled shape - mirrored */}
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

        {/* Contact Us Section inside the black corner - Centered and Bigger */}
        <div
          className="absolute inset-0 text-white flex flex-col items-center justify-center"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {/* Contact Us Title */}
          <h3
            style={{
              color: '#8FD14F',
              fontSize: '36px',
              fontFamily: '"TT Firs Neue", sans-serif',
              fontWeight: 500,
              lineHeight: '90%',
              letterSpacing: '-0.72px',
            }}
          >
            Contact Us
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TouchPage;
