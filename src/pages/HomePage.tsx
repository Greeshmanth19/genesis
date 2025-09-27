import React from 'react';

const HomePage = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-between bg-gradient-to-br from-[#F9FEF1] to-[#E8F5E8] px-8 lg:px-16 overflow-hidden"
      style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px' }}
    >
      {/* Left Side - Content */}
      <div className="flex-1 max-w-lg flex flex-col justify-center" style={{ marginTop: '120px' }}>
        <div>
          <div className="mb-6">
            <p
              className="mb-2"
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

          {/* Main Heading */}
          <div className="mb-6">
            <h1>
              <span
                style={{
                  color: '#000',
                  fontFamily: '"TT Firs Neue Trl", "TT Firs Neue", sans-serif',
                  fontSize: '62px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '90%',
                  letterSpacing: '-2.16px',
                  display: 'inline',
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
          <div className="mb-8">
            <p
              style={{
                fontSize: '18px',
                fontStyle: 'normal',
                lineHeight: '110%',
                color: '#10B981', // Using green-500 equivalent
              }}
              className="text-gray-700 text-base leading-relaxed"
            >
              We launch token projects with transparency, <br /> security, and trusted support,
              turning bold <br /> ideas into thriving businesses.
            </p>
          </div>

          {/* CTA Button */}
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
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <div className="relative">
          <div className="relative">
            <div className="relative">
              {/* Background Image */}
              <div
                className="absolute -inset-20 flex items-center justify-center"
                style={{ zIndex: 1 }}
              >
                <img
                  src={require('../assets/Images/bgMainShade.png')}
                  alt="Background Shade"
                  className="w-auto h-auto scale-125 opacity-50 object-contain"
                />
              </div>

              {/* Genesis Main Image */}
              <img
                src={require('../assets/Images/genesisMain.png')}
                alt="Genesis Logo"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-contain"
                style={{
                  width: '810px',
                  height: '810px',
                  maxWidth: '100%',
                  maxHeight: '100vh',
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
