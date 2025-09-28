import React from 'react';

const RevenuePage: React.FC = () => {
  // Create the same seamless chunky pixelated mesh noise effect
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
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="top-8 mt-8 lg:mt-16">
        <div className="text-center mb-8 lg:mb-16 px-4">
          <p
            className="max-w-2xl mx-auto leading-relaxed mb-2 text-sm sm:text-base lg:text-lg"
            style={{
              color: '#45B649',
              fontSize:
                window.innerWidth < 640 ? '14px' : window.innerWidth < 1024 ? '16px' : '18px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '90%',
              letterSpacing: '-0.54px',
            }}
          >
            Rewarding $GXN Holders,
            <br />
            Strengthening the Ecosystem
          </p>
          <h1
            className="mb-4 lg:mb-6"
            style={{
              color: '#FFF',
              fontSize:
                window.innerWidth < 640 ? '36px' : window.innerWidth < 1024 ? '48px' : '72px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '90%',
              letterSpacing: '-2.16px',
            }}
          >
            Revenue Sharing
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed px-4"
            style={{
              color: '#FFF',
              fontSize:
                window.innerWidth < 640 ? '14px' : window.innerWidth < 1024 ? '16px' : '18px',
              fontFamily: '"Space Grotesk"',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '120%',
              letterSpacing: '-0.54px',
            }}
          >
            Genesis Incubations introduces a new revenue-sharing
            <br className="hidden sm:block" />
            model that drives value back to our community
            <br className="hidden sm:block" />
            through transaction taxes and incubation revenues.
          </p>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-[150px] items-start">
            {/* Left column */}
            <div className="space-y-[50px]">
              {/* Transaction Tax Allocation - Top Left */}
              <div className="text-right">
                <h3
                  className="mb-4"
                  style={{
                    color: '#FFF',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '90%',
                    letterSpacing: '-0.72px',
                  }}
                >
                  Transaction Tax Allocation
                </h3>
                <p
                  style={{
                    color: '#FFF',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '120%',
                    letterSpacing: '-0.54px',
                  }}
                >
                  A 5% tax on buys/sells, with
                  <br />
                  20% (1% of total) flowing
                  <br />
                  directly into the staking pool.
                </p>

                {/* Added SVG line below the first left point */}
                <div className="mt-[30px] flex justify-end -mr-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="429"
                    height="56"
                    viewBox="0 0 429 56"
                    fill="none"
                    className="w-full max-w-md"
                  >
                    <path d="M0 1H334.847L428 55" stroke="url(#paint0_linear_33_432)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear_33_432"
                        x1="263.5"
                        y1="43.5"
                        x2="428"
                        y2="65.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9D9D9D" />
                        <stop offset="1" stopColor="black" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Incubation Revenue Sharing - Bottom Left */}
              <div className="text-right">
                <h3
                  className="mb-4"
                  style={{
                    color: '#FFF',
                    textAlign: 'right',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '90%',
                    letterSpacing: '-0.72px',
                  }}
                >
                  Incubation Revenue Sharing
                </h3>
                <p
                  style={{
                    color: '#FFF',
                    textAlign: 'right',
                    fontFamily: '"Space Grotesk"',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '120%',
                    letterSpacing: '-0.54px',
                  }}
                >
                  70% of revenue from incubated
                  <br />
                  projects is added to the staking
                  <br />
                  pool, boosting rewards.
                </p>

                {/* Added horizontal SVG line below the second left point */}
                <div className="mt-[30px] flex justify-end -mr-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="428"
                    height="2"
                    viewBox="0 0 428 2"
                    fill="none"
                    className="w-full max-w-md"
                  >
                    <path d="M0 1H334.463H427.5" stroke="url(#paint0_linear_33_433)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear_33_433"
                        x1="-6.2956e-06"
                        y1="1.5"
                        x2="427.5"
                        y2="1.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9D9D9D" />
                        <stop offset="1" stopColor="black" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Center - Main Image with Noise Background */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* SVG Background Shade */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="797"
                    height="564"
                    viewBox="0 0 797 564"
                    fill="none"
                    className="w-full h-full opacity-60"
                  >
                    <g filter="url(#filter0_f_33_444)">
                      <path
                        d="M200.626 293.929C208.152 230.577 302.682 189.727 411.763 202.687C520.843 215.647 603.169 277.51 595.642 340.862C588.115 404.214 495.115 312.945 386.034 299.985C276.954 287.025 193.099 357.281 200.626 293.929Z"
                        fill="url(#paint0_linear_33_444)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_33_444"
                        x="0.155792"
                        y="0.287842"
                        width="795.964"
                        height="562.739"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_33_444" />
                      </filter>
                      <linearGradient
                        id="paint0_linear_33_444"
                        x1="576.335"
                        y1="503.366"
                        x2="132.366"
                        y2="297.941"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DCE35B" />
                        <stop offset="1" stopColor="#45B649" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Pixelated Noise Background behind main image - smaller with better fade */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-[35rem] h-[30rem]"
                    style={{
                      background:
                        'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
                      maskImage:
                        'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage:
                        'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)',
                    }}
                  >
                    {/* Chunky mesh overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '40px 40px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'hard-light',
                        animation: 'noiseFlow 8s linear infinite',
                      }}
                    />
                  </div>
                </div>

                {/* Main logo container */}
                <div className="relative w-[45rem] h-[39rem] flex items-center justify-center z-10">
                  <img
                    src={require('../assets/Images/revenueMain.png')}
                    alt="Revenue Sharing Logo"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-[50px]">
              {/* Inclusive Staking - Top Right */}
              <div className="text-right">
                <h3
                  className="mb-4"
                  style={{
                    color: '#FFF',
                    textAlign: 'left',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '90%',
                    letterSpacing: '-0.72px',
                  }}
                >
                  Inclusive Staking
                </h3>
                <p
                  style={{
                    color: '#FFF',
                    textAlign: 'left',
                    fontFamily: '"Space Grotesk"',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '120%',
                    letterSpacing: '-0.54px',
                  }}
                >
                  No minimum stake required. Lock
                  <br />
                  tokens for 30+ days and earn ETH
                  <br />
                  rewards from day one. The more you
                  <br />
                  stake, the more you earn.
                </p>

                {/* Added diagonal SVG line below the first right point */}
                <div className="mt-[30px] flex justify-start -ml-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="429"
                    height="56"
                    viewBox="0 0 429 56"
                    fill="none"
                    className="w-full max-w-md"
                  >
                    <path d="M429 1H94.1529L0.999985 55" stroke="url(#paint0_linear_33_439)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear_33_439"
                        x1="165.5"
                        y1="43.5"
                        x2="0.999977"
                        y2="65.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9D9D9D" />
                        <stop offset="1" stopColor="black" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Weekly Deposits - Bottom Right */}
              <div className="text-right">
                <h3
                  className="mb-4"
                  style={{
                    color: '#FFF',
                    textAlign: 'left',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: '90%',
                    letterSpacing: '-0.72px',
                  }}
                >
                  Weekly Deposits
                </h3>
                <p
                  style={{
                    color: '#FFF',
                    textAlign: 'left',
                    fontFamily: '"Space Grotesk"',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '120%',
                    letterSpacing: '-0.54px',
                  }}
                >
                  New funds are added every
                  <br />
                  7 days, ensuring consistent
                  <br />
                  growth of the pool.
                </p>

                {/* Added horizontal SVG line below the second right point */}
                <div className="mt-[20px] flex justify-start -ml-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="427"
                    height="2"
                    viewBox="0 0 427 2"
                    fill="none"
                    className="w-full max-w-md"
                  >
                    <path d="M427 1H92.5372H0.5" stroke="url(#paint0_linear_33_440)" />
                    <defs>
                      <linearGradient
                        id="paint0_linear_33_440"
                        x1="427"
                        y1="1.5"
                        x2="0.500006"
                        y2="1.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9D9D9D" />
                        <stop offset="1" stopColor="black" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Hidden on desktop */}
        <div className="block lg:hidden">
          {/* Center - Main Image for Mobile */}
          <div className="flex justify-center items-center mb-2">
            <div className="relative">
              {/* SVG Background Shade - Responsive */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="600"
                  height="425"
                  viewBox="0 0 797 564"
                  fill="none"
                  className="w-full h-full opacity-60"
                >
                  <g filter="url(#filter0_f_33_444_mobile)">
                    <path
                      d="M200.626 293.929C208.152 230.577 302.682 189.727 411.763 202.687C520.843 215.647 603.169 277.51 595.642 340.862C588.115 404.214 495.115 312.945 386.034 299.985C276.954 287.025 193.099 357.281 200.626 293.929Z"
                      fill="url(#paint0_linear_33_444_mobile)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_33_444_mobile"
                      x="0.155792"
                      y="0.287842"
                      width="795.964"
                      height="562.739"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="100"
                        result="effect1_foregroundBlur_33_444_mobile"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_33_444_mobile"
                      x1="576.335"
                      y1="503.366"
                      x2="132.366"
                      y2="297.941"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#DCE35B" />
                      <stop offset="1" stopColor="#45B649" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Mobile Pixelated Noise Background behind main image - smaller with better fade */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-[25rem] h-[22rem] sm:w-[28rem] sm:h-[25rem] md:w-[30rem] md:h-[28rem]"
                  style={{
                    background:
                      'linear-gradient(101deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
                    maskImage:
                      'radial-gradient(ellipse 45% 55% at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse 45% 55% at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0) 100%)',
                  }}
                >
                  {/* Mobile chunky mesh overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `url("${pixelatedNoiseDataUrl}")`,
                      backgroundSize: '30px 30px',
                      backgroundRepeat: 'repeat',
                      mixBlendMode: 'hard-light',
                      filter: 'contrast(200%) brightness(110%) hue-rotate(10deg)',
                      animation: 'noiseFlow 8s linear infinite',
                    }}
                  />
                </div>
              </div>

              {/* Main logo container - Mobile responsive */}
              <div className="relative w-[32rem] h-[28rem] sm:w-[36rem] sm:h-[32rem] md:w-[40rem] md:h-[36rem] flex items-center justify-center z-10">
                <img
                  src={require('../assets/Images/revenueMain.png')}
                  alt="Revenue Sharing Logo"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Mobile Content - Column Layout */}
          <div className="space-y-8 md:space-y-12">
            {/* Transaction Tax Allocation */}
            <div className="text-left px-4">
              <h3
                className="mb-4 text-xl sm:text-2xl"
                style={{
                  color: '#FFF',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                }}
              >
                Transaction Tax Allocation
              </h3>
              <p
                className="text-sm sm:text-base md:text-lg max-w-md"
                style={{
                  color: '#FFF',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '120%',
                  letterSpacing: '-0.54px',
                }}
              >
                A 5% tax on buys/sells, with 20% (1% of total) flowing directly into the staking
                pool.
              </p>
            </div>

            {/* Incubation Revenue Sharing */}
            <div className="text-left px-4">
              <h3
                className="mb-4 text-xl sm:text-2xl"
                style={{
                  color: '#FFF',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                }}
              >
                Incubation Revenue Sharing
              </h3>
              <p
                className="text-sm sm:text-base md:text-lg max-w-md"
                style={{
                  color: '#FFF',
                  fontFamily: '"Space Grotesk"',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '120%',
                  letterSpacing: '-0.54px',
                }}
              >
                70% of revenue from incubated projects is added to the staking pool, boosting
                rewards.
              </p>
            </div>

            {/* Inclusive Staking */}
            <div className="text-left px-4">
              <h3
                className="mb-4 text-xl sm:text-2xl"
                style={{
                  color: '#FFF',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                }}
              >
                Inclusive Staking
              </h3>
              <p
                className="text-sm sm:text-base md:text-lg max-w-md"
                style={{
                  color: '#FFF',
                  fontFamily: '"Space Grotesk"',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '120%',
                  letterSpacing: '-0.54px',
                }}
              >
                No minimum stake required. Lock tokens for 30+ days and earn ETH rewards from day
                one. The more you stake, the more you earn.
              </p>
            </div>

            {/* Weekly Deposits */}
            <div className="text-left px-4">
              <h3
                className="mb-4 text-xl sm:text-2xl"
                style={{
                  color: '#FFF',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: '90%',
                  letterSpacing: '-0.72px',
                }}
              >
                Weekly Deposits
              </h3>
              <p
                className="text-sm sm:text-base md:text-lg max-w-md"
                style={{
                  color: '#FFF',
                  fontFamily: '"Space Grotesk"',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '120%',
                  letterSpacing: '-0.54px',
                }}
              >
                New funds are added every 7 days, ensuring consistent growth of the pool.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Partners Section */}
      <div className="w-full mt-16 lg:mt-0 mb-8 lg:mb-16">
        <div className="text-center mb-8 lg:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-8">
            Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-8">
          {/* Sparkstarter Card */}
          <div
            className="rounded-2xl p-4 sm:p-6 lg:p-8 h-32 lg:h-40 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
            }}
          >
            <img
              src={require('../assets/Images/sparkstarter.png')}
              alt="Sparkstarter"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Assure DeFi Card */}
          <div
            className="rounded-2xl p-4 sm:p-6 lg:p-8 h-32 lg:h-40 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
            }}
          >
            <img
              src={require('../assets/Images/assure.png')}
              alt="Assure DeFi"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Coming Soon Card 1 */}
          <div
            className="rounded-2xl p-4 sm:p-6 lg:p-8 h-32 lg:h-40 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
            }}
          >
            <span className="text-gray-400 text-sm sm:text-lg lg:text-xl">Coming Soon</span>
          </div>

          {/* Coming Soon Card 2 */}
          <div
            className="rounded-2xl p-4 sm:p-6 lg:p-8 h-32 lg:h-40 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
            }}
          >
            <span className="text-gray-400 text-sm sm:text-lg lg:text-xl">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* CSS Animation for noise flow */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes noiseFlow {
            0% {
              background-position: 0px 0px;
            }
            100% {
              background-position: 0px 45px;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default RevenuePage;
