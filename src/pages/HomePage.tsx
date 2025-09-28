import React from 'react';

const HomePage = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-[#F9FEF1] to-[#E8F5E8] px-8 lg:px-16 overflow-hidden"
      style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}
    >
      {/* Left Side - Content */}
      <div className="flex-1 max-w-lg flex flex-col justify-center lg:mt-[120px] mt-20 order-1 lg:order-1">
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
          <div className="hidden lg:block">
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
      </div>

      {/* Right Side - Image Section */}
      <div className="flex-1 flex items-center justify-center lg:justify-end relative order-2 lg:order-2 mt-2 lg:mt-0 mb-12 lg:mb-0 lg:pl-16">
        <div className="relative lg:transform lg:translate-x-20">
          <div className="relative">
            <div className="relative">
              {/* Background Image - Responsive positioning and size */}
              <div
                className="absolute flex items-center justify-center lg:-top-20 lg:-left-20 lg:-right-20 lg:-bottom-20 -top-10 -left-10 -right-10 -bottom-10"
                style={{
                  zIndex: 1,
                }}
              >
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
              </div>

              {/* Genesis Main Image - Responsive size */}
              <img
                src={require('../assets/Images/genesisMain.png')}
                alt="Genesis Logo"
                className="relative object-contain w-80 h-80 lg:w-[810px] lg:h-[810px] max-w-none max-h-none"
                style={{
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile CTA Button - Full width on mobile */}
      <div className="lg:hidden block order-3 w-full -mt-8 mb-4 px-2">
        <button
          className="text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 w-full"
          style={{
            borderRadius: '90px',
            border: '1px solid #DAE339',
            background: 'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
            boxShadow:
              '0 16px 30px 4px rgba(113, 173, 77, 0.40), 0 0 0 2px rgba(0, 235, 0, 0.20), 0 0 0 2px rgba(103, 178, 51, 0.60), 0 0 9.931px 4.966px rgba(255, 255, 255, 0.64) inset',
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
