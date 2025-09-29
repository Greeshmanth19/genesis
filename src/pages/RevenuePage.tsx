import React from 'react';

const RevenuePage = () => {
  // Create the same rough, grainy surface mist effect as ServicesPage
  const pixelatedNoiseDataUrl = `data:image/svg+xml,${encodeURIComponent(`
    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
      <filter id='noiseFilter'>
        <feTurbulence 
          type='turbulence' 
          baseFrequency='0.9' 
          numOctaves='4' 
          stitchTiles='stitch'
          seed='2'/>
        <feColorMatrix type="matrix" values="
          0.2 0.8 0.2 0 0.15
          0.3 0.9 0.3 0 0.15
          0.1 0.6 0.1 0 0.15
          0   0   0   1 0"/>
      </filter>
      <rect width='100%' height='100%' filter='url(#noiseFilter)' opacity='0.9'/>
    </svg>
  `)}`;

  return (
    <div className="relative min-h-0 lg:min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-hidden">
      {/* Header - Zero spacing */}
      <div className="mt-0 sm:mt-0 md:mt-1 lg:mt-2">
        <div className="text-center mb-0 sm:mb-1 md:mb-2 lg:mb-4 px-4">
          <p
            className="max-w-2xl mx-auto leading-relaxed mb-2 text-sm sm:text-base md:text-base lg:text-lg"
            style={{
              background:
                'linear-gradient(100.72deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
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
            className="mb-3 sm:mb-4 md:mb-4 lg:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
              color: '#FFF',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '90%',
              letterSpacing: '-2.16px',
            }}
          >
            Revenue Sharing
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed px-4 text-sm sm:text-base md:text-base lg:text-lg"
            style={{
              color: '#FFF',
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
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Desktop Layout - Hidden on mobile and tablet */}
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

            {/* Center - Main Image with Rough Noise Background */}
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

                {/* Rough grainy surface mist effect behind main image - multiple layers like ServicesPage */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-[35rem] h-[30rem]"
                    style={{
                      background: 'linear-gradient(96.56deg, #DAE339 -10.21%, #00B935 105.8%)',
                      maskImage:
                        'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage:
                        'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)',
                    }}
                  >
                    {/* Primary rough grainy surface mist layer */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '40px 40px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'multiply',
                        opacity: 0.4,
                        animation: 'noiseFlow 20s linear infinite',
                      }}
                    />

                    {/* Additional rough texture overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '25px 25px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'overlay',
                        opacity: 0.25,
                        animation: 'noiseFlow 15s linear infinite reverse',
                      }}
                    />

                    {/* Enhanced mist effect - always visible */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '120px 120px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'soft-light',
                        opacity: 0.3,
                        filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
                        animation: 'noiseFlow 8s linear infinite',
                      }}
                    />

                    {/* Bottom rough surface mist - heavy grain texture */}
                    <div
                      className="absolute"
                      style={{
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '70%',
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '30px 30px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'screen',
                        opacity: 0.18,
                        maskImage:
                          'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                        WebkitMaskImage:
                          'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                        animation: 'noiseFlow 12s linear infinite',
                      }}
                    />

                    {/* Rough grainy corner accumulations */}
                    <div
                      className="absolute"
                      style={{
                        bottom: '-5px',
                        left: '-5px',
                        width: '100px',
                        height: '100px',
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '20px 20px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'overlay',
                        opacity: 0.2,
                        borderRadius: '30%',
                        maskImage:
                          'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                        WebkitMaskImage:
                          'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                        animation: 'noiseFlow 16s linear infinite reverse',
                      }}
                    />

                    <div
                      className="absolute"
                      style={{
                        bottom: '-5px',
                        right: '-5px',
                        width: '100px',
                        height: '100px',
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '20px 20px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'overlay',
                        opacity: 0.2,
                        borderRadius: '30%',
                        maskImage:
                          'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                        WebkitMaskImage:
                          'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0) 90%)',
                        animation: 'noiseFlow 16s linear infinite',
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

        {/* Mobile and Tablet Layout - Shown on screens smaller than lg */}
        <div className="block lg:hidden">
          {/* Center - Main Image for Mobile and Tablet */}
          <div className="flex justify-center items-center mb-6 sm:mb-8 md:mb-10">
            <div className="relative">
              {/* SVG Background Shade - Responsive */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="500"
                  height="350"
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

              {/* Mobile and Tablet Rough grainy surface mist effect - multiple layers */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                  className="w-[20rem] h-[18rem] sm:w-[24rem] sm:h-[21rem] md:w-[30rem] md:h-[26rem]"
                  style={{
                    background: 'linear-gradient(96.56deg, #DAE339 -10.21%, #00B935 105.8%)',
                    maskImage:
                      'radial-gradient(ellipse 45% 55% at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse 45% 55% at 50% 50%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.03) 75%, rgba(0,0,0,0) 100%)',
                  }}
                >
                  {/* Primary rough grainy surface mist layer */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `url("${pixelatedNoiseDataUrl}")`,
                      backgroundSize: '30px 30px',
                      backgroundRepeat: 'repeat',
                      mixBlendMode: 'multiply',
                      opacity: 0.4,
                      animation: 'noiseFlow 20s linear infinite',
                    }}
                  />

                  {/* Additional rough texture overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `url("${pixelatedNoiseDataUrl}")`,
                      backgroundSize: '20px 20px',
                      backgroundRepeat: 'repeat',
                      mixBlendMode: 'overlay',
                      opacity: 0.25,
                      animation: 'noiseFlow 15s linear infinite reverse',
                    }}
                  />

                  {/* Enhanced mist effect */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `url("${pixelatedNoiseDataUrl}")`,
                      backgroundSize: '90px 90px',
                      backgroundRepeat: 'repeat',
                      mixBlendMode: 'soft-light',
                      opacity: 0.3,
                      filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
                      animation: 'noiseFlow 8s linear infinite',
                    }}
                  />

                  {/* Bottom rough surface mist */}
                  <div
                    className="absolute"
                    style={{
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '70%',
                      background: `url("${pixelatedNoiseDataUrl}")`,
                      backgroundSize: '25px 25px',
                      backgroundRepeat: 'repeat',
                      mixBlendMode: 'screen',
                      opacity: 0.18,
                      maskImage:
                        'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                      WebkitMaskImage:
                        'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                      animation: 'noiseFlow 12s linear infinite',
                    }}
                  />
                </div>
              </div>

              {/* Main logo container - Responsive for mobile and tablet */}
              <div className="relative w-[24rem] h-[20rem] sm:w-[28rem] sm:h-[24rem] md:w-[34rem] md:h-[30rem] flex items-center justify-center z-10">
                <img
                  src={require('../assets/Images/revenueMain.png')}
                  alt="Revenue Sharing Logo"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Mobile and Tablet Content - Column Layout */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8">
            {/* Transaction Tax Allocation */}
            <div className="text-left px-4 sm:px-6 md:px-8">
              <h3
                className="mb-3 text-xl sm:text-2xl md:text-2xl"
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
                className="text-sm sm:text-base md:text-lg max-w-md md:max-w-lg"
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
            <div className="text-left px-4 sm:px-6 md:px-8">
              <h3
                className="mb-3 text-xl sm:text-2xl md:text-2xl"
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
                className="text-sm sm:text-base md:text-lg max-w-md md:max-w-lg"
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
            <div className="text-left px-4 sm:px-6 md:px-8">
              <h3
                className="mb-3 text-xl sm:text-2xl md:text-2xl"
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
                className="text-sm sm:text-base md:text-lg max-w-md md:max-w-lg"
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
            <div className="text-left px-4 sm:px-6 md:px-8">
              <h3
                className="mb-3 text-xl sm:text-2xl md:text-2xl"
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
                className="text-sm sm:text-base md:text-lg max-w-md md:max-w-lg"
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
      <div className="w-full mt-12 sm:mt-14 md:mt-16 lg:mt-16 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 sm:mb-7 md:mb-8">
            Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Sparkstarter Card */}
          <div
            className="relative rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 h-32 sm:h-36 md:h-38 lg:h-40 flex items-center justify-center overflow-hidden"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Rough grainy surface mist - primary layer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '40px 40px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'multiply',
                opacity: 0.4,
              }}
            />

            {/* Additional rough texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '25px 25px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'overlay',
                opacity: 0.25,
              }}
            />

            {/* Bottom rough surface mist - heavy grain texture */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: 0,
                left: 0,
                right: 0,
                height: '70%',
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '30px 30px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'screen',
                opacity: 0.18,
                maskImage:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                WebkitMaskImage:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                animation: 'noiseFlow 12s linear infinite',
              }}
            />

            {/* Enhanced mist effect - always visible */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '120px 120px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'soft-light',
                opacity: 0.3,
                filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
              }}
            />

            <img
              src={require('../assets/Images/sparkstarter.png')}
              alt="Sparkstarter"
              className="relative z-10 max-w-full max-h-full object-contain"
            />
          </div>

          {/* Assure DeFi Card */}
          <div
            className="relative rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 h-32 sm:h-36 md:h-38 lg:h-40 flex items-center justify-center overflow-hidden"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Rough grainy surface mist - primary layer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '40px 40px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'multiply',
                opacity: 0.4,
              }}
            />

            {/* Additional rough texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '25px 25px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'overlay',
                opacity: 0.25,
                animation: 'noiseFlow 15s linear infinite reverse',
              }}
            />

            {/* Bottom rough surface mist - heavy grain texture */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: 0,
                left: 0,
                right: 0,
                height: '70%',
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '30px 30px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'screen',
                opacity: 0.18,
                maskImage:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                WebkitMaskImage:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                animation: 'noiseFlow 12s linear infinite',
              }}
            />

            {/* Enhanced mist effect - always visible */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '120px 120px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'soft-light',
                opacity: 0.3,
                filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
                animation: 'noiseFlow 8s linear infinite',
              }}
            />

            <img
              src={require('../assets/Images/assure.png')}
              alt="Assure DeFi"
              className="relative z-10 max-w-full max-h-full object-contain"
            />
          </div>

          {/* Coming Soon Card 1 */}
          <div
            className="relative rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 h-32 sm:h-36 md:h-38 lg:h-40 flex items-center justify-center overflow-hidden"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Rough grainy surface mist - primary layer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '40px 40px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'multiply',
                opacity: 0.4,
                animation: 'noiseFlow 20s linear infinite',
              }}
            />

            {/* Additional rough texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '25px 25px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'overlay',
                opacity: 0.25,
                animation: 'noiseFlow 15s linear infinite reverse',
              }}
            />

            {/* Bottom rough surface mist - heavy grain texture */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: 0,
                left: 0,
                right: 0,
                height: '70%',
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '30px 30px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'screen',
                opacity: 0.18,
                maskImage:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                WebkitMaskImage:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                animation: 'noiseFlow 12s linear infinite',
              }}
            />

            {/* Enhanced mist effect - always visible */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '120px 120px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'soft-light',
                opacity: 0.3,
                filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
                animation: 'noiseFlow 8s linear infinite',
              }}
            />

            <span className="relative z-10 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
              Coming Soon
            </span>
          </div>

          {/* Coming Soon Card 2 */}
          <div
            className="relative rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 h-32 sm:h-36 md:h-38 lg:h-40 flex items-center justify-center overflow-hidden"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Rough grainy surface mist - primary layer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '40px 40px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'multiply',
                opacity: 0.4,
                animation: 'noiseFlow 20s linear infinite',
              }}
            />

            {/* Additional rough texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '25px 25px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'overlay',
                opacity: 0.25,
                animation: 'noiseFlow 15s linear infinite reverse',
              }}
            />

            {/* Bottom rough surface mist - heavy grain texture */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: 0,
                left: 0,
                right: 0,
                height: '70%',
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '30px 30px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'screen',
                opacity: 0.18,
                maskImage:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                WebkitMaskImage:
                  'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 80%)',
                animation: 'noiseFlow 12s linear infinite',
              }}
            />

            {/* Enhanced mist effect - always visible */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `url("${pixelatedNoiseDataUrl}")`,
                backgroundSize: '120px 120px',
                backgroundRepeat: 'repeat',
                mixBlendMode: 'soft-light',
                opacity: 0.3,
                filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
                animation: 'noiseFlow 8s linear infinite',
              }}
            />

            <span className="relative z-10 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl">
              Coming Soon
            </span>
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
