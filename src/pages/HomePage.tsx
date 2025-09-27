import React from 'react';

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-between bg-gradient-to-br from-[#F9FEF1] to-[#E8F5E8] px-8 lg:px-16">
      {/* Left Side - Content */}
      <div className="flex-1 max-w-lg">
        <div>
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2 font-medium tracking-wider">
              Genesis Incubations
            </p>
          </div>

          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              From Idea
              <br />
              to Successful
              <br />
              Token in <span className="text-green-500">30 Days</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 text-base leading-relaxed">
              We launch token projects with transparency, security, and trusted support, turning
              bold ideas into thriving businesses.
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          <div className="relative">
            <div className="relative">
              <img
                src={require('../assets/Images/genesisMain.png')}
                alt="Genesis Logo"
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                style={{
                  width: '810px',
                  height: '810px',
                  maxWidth: '100%',
                  maxHeight: '100vh',
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
