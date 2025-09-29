import React, { useState, useEffect } from 'react';

const RevenuePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePoint, setActivePoint] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Cycle through points for connection animation
    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Create the same rough, grainy surface mist effect
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
    <div className="relative min-h-0 lg:min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-hidden pt-8 sm:pt-10 md:pt-12 lg:pt-16">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-orbit"
            style={{
              top: '50%',
              left: '50%',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(218, 227, 57, 0.05) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${15 + i * 2}s`,
              transformOrigin: `${-200 + i * 100}px ${-200 + i * 100}px`,
            }}
          />
        ))}
      </div>

      {/* Header with animated entrance */}
      <div
        className={`mt-7 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="text-center mb-2 sm:mb-3 md:mb-4 lg:mb-6 px-4">
          <p
            className="max-w-2xl mx-auto leading-relaxed mb-2 text-sm sm:text-base md:text-base lg:text-lg animate-gradient-slide"
            style={{
              background:
                'linear-gradient(100.72deg, #DAE339 -3.32%, #00B935 51.06%, #DAE339 105.44%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% 100%',
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
            className="mb-3 sm:mb-4 md:mb-4 lg:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-title-reveal"
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
            className={`max-w-2xl mx-auto leading-relaxed px-4 text-sm sm:text-base md:text-base lg:text-lg transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
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
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-[150px] items-start">
            {/* Left column with staggered animations */}
            <div className="space-y-[50px]">
              {/* Transaction Tax Allocation */}
              <div
                className={`text-right transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                <div className={`${activePoint === 0 ? 'animate-pulse-highlight' : ''}`}>
                  <h3
                    className="mb-4"
                    style={{
                      color: activePoint === 0 ? '#DAE339' : '#FFF',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '90%',
                      letterSpacing: '-0.72px',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    Transaction Tax Allocation
                  </h3>
                  <p
                    style={{
                      color: activePoint === 0 ? '#FFF' : 'rgba(255, 255, 255, 0.8)',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '120%',
                      letterSpacing: '-0.54px',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    A 5% tax on buys/sells, with
                    <br />
                    20% (1% of total) flowing
                    <br />
                    directly into the staking pool.
                  </p>
                </div>

                {/* Animated SVG line */}
                <div className="mt-[30px] flex justify-end -mr-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="429"
                    height="56"
                    viewBox="0 0 429 56"
                    fill="none"
                    className="w-full max-w-md"
                  >
                    <path
                      d="M0 1H334.847L428 55"
                      stroke="url(#paint0_linear_33_432)"
                      className={activePoint === 0 ? 'animate-line-draw' : ''}
                      strokeDasharray="500"
                      strokeDashoffset={activePoint === 0 ? '0' : '500'}
                      style={{
                        transition: 'stroke-dashoffset 1s ease',
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_33_432"
                        x1="263.5"
                        y1="43.5"
                        x2="428"
                        y2="65.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor={activePoint === 0 ? '#DAE339' : '#9D9D9D'} />
                        <stop offset="1" stopColor={activePoint === 0 ? '#00B935' : 'black'} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Incubation Revenue Sharing */}
              <div
                className={`text-right transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ animationDelay: '0.6s' }}
              >
                <div className={`${activePoint === 1 ? 'animate-pulse-highlight' : ''}`}>
                  <h3
                    className="mb-4"
                    style={{
                      color: activePoint === 1 ? '#DAE339' : '#FFF',
                      textAlign: 'right',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '90%',
                      letterSpacing: '-0.72px',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    Incubation Revenue Sharing
                  </h3>
                  <p
                    style={{
                      color: activePoint === 1 ? '#FFF' : 'rgba(255, 255, 255, 0.8)',
                      textAlign: 'right',
                      fontFamily: '"Space Grotesk"',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '120%',
                      letterSpacing: '-0.54px',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    70% of revenue from incubated
                    <br />
                    projects is added to the staking
                    <br />
                    pool, boosting rewards.
                  </p>
                </div>

                {/* Animated horizontal SVG line */}
                <div className="mt-[30px] flex justify-end -mr-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="428"
                    height="2"
                    viewBox="0 0 428 2"
                    fill="none"
                    className="w-full max-w-md"
                  >
                    <path
                      d="M0 1H334.463H427.5"
                      stroke="url(#paint0_linear_33_433)"
                      className={activePoint === 1 ? 'animate-line-draw' : ''}
                      strokeDasharray="500"
                      strokeDashoffset={activePoint === 1 ? '0' : '500'}
                      style={{
                        transition: 'stroke-dashoffset 1s ease',
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_33_433"
                        x1="-6.2956e-06"
                        y1="1.5"
                        x2="427.5"
                        y2="1.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor={activePoint === 1 ? '#DAE339' : '#9D9D9D'} />
                        <stop offset="1" stopColor={activePoint === 1 ? '#00B935' : 'black'} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Center - Main Image with animations */}
            <div className="flex justify-center items-center">
              <div
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ animationDelay: '0.3s' }}
              >
                {/* Animated SVG Background Shade */}
                <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
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

                {/* Animated rough grainy surface mist effect */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="w-[35rem] h-[30rem] animate-mist-morph"
                    style={{
                      background: 'linear-gradient(96.56deg, #DAE339 -10.21%, #00B935 105.8%)',
                      maskImage:
                        'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage:
                        'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)',
                    }}
                  >
                    {/* Animated noise layers */}
                    <div
                      className="absolute inset-0 animate-noise-flow"
                      style={{
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '40px 40px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'multiply',
                        opacity: 0.4,
                      }}
                    />

                    <div
                      className="absolute inset-0 animate-noise-flow-reverse"
                      style={{
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '25px 25px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'overlay',
                        opacity: 0.25,
                      }}
                    />

                    <div
                      className="absolute inset-0 animate-noise-swirl"
                      style={{
                        background: `url("${pixelatedNoiseDataUrl}")`,
                        backgroundSize: '120px 120px',
                        backgroundRepeat: 'repeat',
                        mixBlendMode: 'soft-light',
                        opacity: 0.3,
                        filter: 'contrast(280%) brightness(60%) hue-rotate(5deg) blur(1px)',
                      }}
                    />

                    <div
                      className="absolute animate-noise-flow-slow"
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
                      }}
                    />
                  </div>
                </div>

                {/* Main logo with rotation animation */}
                <div className="relative w-[45rem] h-[39rem] flex items-center justify-center z-10 animate-logo-rotate">
                  <img
                    src={require('../assets/Images/revenueMain.png')}
                    alt="Revenue Sharing Logo"
                    className="w-full h-full object-contain filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right column with staggered animations */}
            <div className="space-y-[50px]">
              {/* Inclusive Staking */}
              <div
                className={`text-right transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ animationDelay: '0.5s' }}
              >
                <div className={`${activePoint === 2 ? 'animate-pulse-highlight' : ''}`}>
                  <h3
                    className="mb-4"
                    style={{
                      color: activePoint === 2 ? '#DAE339' : '#FFF',
                      textAlign: 'left',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '90%',
                      letterSpacing: '-0.72px',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    Inclusive Staking
                  </h3>
                  <p
                    style={{
                      color: activePoint === 2 ? '#FFF' : 'rgba(255, 255, 255, 0.8)',
                      textAlign: 'left',
                      fontFamily: '"Space Grotesk"',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '120%',
                      letterSpacing: '-0.54px',
                      transition: 'color 0.5s ease',
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
                </div>

                {/* Animated diagonal SVG line */}
                <div className="mt-[30px] flex justify-start -ml-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="429"
                    height="56"
                    viewBox="0 0 429 56"
                    fill="none"
                    className="w-full max-w-md"
                  >
                    <path
                      d="M429 1H94.1529L0.999985 55"
                      stroke="url(#paint0_linear_33_439)"
                      className={activePoint === 2 ? 'animate-line-draw' : ''}
                      strokeDasharray="500"
                      strokeDashoffset={activePoint === 2 ? '0' : '500'}
                      style={{
                        transition: 'stroke-dashoffset 1s ease',
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_33_439"
                        x1="165.5"
                        y1="43.5"
                        x2="0.999977"
                        y2="65.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor={activePoint === 2 ? '#DAE339' : '#9D9D9D'} />
                        <stop offset="1" stopColor={activePoint === 2 ? '#00B935' : 'black'} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Weekly Deposits */}
              <div
                className={`text-right transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
                style={{ animationDelay: '0.7s' }}
              >
                <div className={`${activePoint === 3 ? 'animate-pulse-highlight' : ''}`}>
                  <h3
                    className="mb-4"
                    style={{
                      color: activePoint === 3 ? '#DAE339' : '#FFF',
                      textAlign: 'left',
                      fontSize: '24px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '90%',
                      letterSpacing: '-0.72px',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    Weekly Deposits
                  </h3>
                  <p
                    style={{
                      color: activePoint === 3 ? '#FFF' : 'rgba(255, 255, 255, 0.8)',
                      textAlign: 'left',
                      fontFamily: '"Space Grotesk"',
                      fontSize: '18px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '120%',
                      letterSpacing: '-0.54px',
                      transition: 'color 0.5s ease',
                    }}
                  >
                    New funds are added every
                    <br />
                    7 days, ensuring consistent
                    <br />
                    growth of the pool.
                  </p>
                </div>

                {/* Animated horizontal SVG line */}
                <div className="mt-[20px] flex justify-start -ml-[100px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="427"
                    height="2"
                    viewBox="0 0 427 2"
                    fill="none"
                    className="w-full max-w-md"
                  >
                    <path
                      d="M427 1H92.5372H0.5"
                      stroke="url(#paint0_linear_33_440)"
                      className={activePoint === 3 ? 'animate-line-draw' : ''}
                      strokeDasharray="500"
                      strokeDashoffset={activePoint === 3 ? '0' : '500'}
                      style={{
                        transition: 'stroke-dashoffset 1s ease',
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_33_440"
                        x1="427"
                        y1="1.5"
                        x2="0.500006"
                        y2="1.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor={activePoint === 3 ? '#DAE339' : '#9D9D9D'} />
                        <stop offset="1" stopColor={activePoint === 3 ? '#00B935' : 'black'} />
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

      {/* Our Partners Section with staggered entrance */}
      <div
        className={`w-full mt-12 sm:mt-14 md:mt-16 lg:mt-16 mb-8 sm:mb-10 md:mb-12 lg:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ animationDelay: '0.8s' }}
      >
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 sm:mb-7 md:mb-8">
            Our Partners
          </h2>
        </div>

        <div className="relative overflow-hidden max-w-7xl mx-auto">
          <div className="flex animate-scroll-partners">
            {/* First set of partners */}
            {[
              { name: 'Sparkstarter', image: require('../assets/Images/sparkstarter.png') },
              { name: 'Assure DeFi', image: require('../assets/Images/assure.png') },
              { name: 'Coming Soon', image: null },
              { name: 'Coming Soon', image: null },
            ].map((partner, index) => (
              <div
                key={`first-${index}`}
                className={`relative rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 h-32 sm:h-36 md:h-38 lg:h-40 flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 flex-shrink-0 mx-2 sm:mx-3 md:mx-4 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{
                  borderRadius: '16px',
                  background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  animationDelay: `${0.8 + index * 0.1}s`,
                  width: '280px',
                }}
              >
                {/* Animated noise layers for partner cards */}
                <div
                  className="absolute inset-0 pointer-events-none animate-partner-noise"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '40px 40px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'multiply',
                    opacity: 0.4,
                    animationDelay: `${index * 0.5}s`,
                  }}
                />

                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="relative z-10 max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="relative z-10 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl animate-pulse">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              { name: 'Sparkstarter', image: require('../assets/Images/sparkstarter.png') },
              { name: 'Assure DeFi', image: require('../assets/Images/assure.png') },
              { name: 'Coming Soon', image: null },
              { name: 'Coming Soon', image: null },
            ].map((partner, index) => (
              <div
                key={`second-${index}`}
                className="relative rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 h-32 sm:h-36 md:h-38 lg:h-40 flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-105 flex-shrink-0 mx-2 sm:mx-3 md:mx-4"
                style={{
                  borderRadius: '16px',
                  background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  width: '280px',
                }}
              >
                {/* Animated noise layers for partner cards */}
                <div
                  className="absolute inset-0 pointer-events-none animate-partner-noise"
                  style={{
                    background: `url("${pixelatedNoiseDataUrl}")`,
                    backgroundSize: '40px 40px',
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'multiply',
                    opacity: 0.4,
                    animationDelay: `${index * 0.5}s`,
                  }}
                />

                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="relative z-10 max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="relative z-10 text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl animate-pulse">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gradient-slide {
              0%, 100% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
            }

            .animate-gradient-slide {
              animation: gradient-slide 3s ease-in-out infinite;
            }

            @keyframes title-reveal {
              from {
                opacity: 0;
                transform: scale(0.9) translateY(-20px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }

            .animate-title-reveal {
              animation: title-reveal 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            }

            @keyframes float-orbit {
              0%, 100% {
                transform: rotate(0deg) translateX(300px) rotate(0deg);
              }
              100% {
                transform: rotate(360deg) translateX(300px) rotate(-360deg);
              }
            }

            .animate-float-orbit {
              animation: float-orbit 20s linear infinite;
            }

            @keyframes pulse-highlight {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.02);
              }
            }

            .animate-pulse-highlight {
              animation: pulse-highlight 1s ease-in-out;
            }

            @keyframes logo-rotate {
              0%, 100% {
                transform: rotate(0deg) scale(1);
              }
              25% {
                transform: rotate(2deg) scale(1.02);
              }
              50% {
                transform: rotate(0deg) scale(1);
              }
              75% {
                transform: rotate(-2deg) scale(1.02);
              }
            }

            @keyframes noiseFlow {
              0% {
                background-position: 0px 0px;
              }
              100% {
                background-position: 0px 45px;
              }
            }

            @keyframes scroll-partners {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll-partners {
              animation: scroll-partners 30s linear infinite;
            }

            .animate-scroll-partners:hover {
              animation-play-state: paused;
            }

            .animate-logo-rotate {
              animation: logo-rotate 10s ease-in-out infinite;
            }

            @keyframes mist-morph {
              0%, 100% {
                transform: scale(1) rotate(0deg);
              }
              33% {
                transform: scale(1.05) rotate(1deg);
              }
              66% {
                transform: scale(0.98) rotate(-1deg);
              }
            }

            .animate-mist-morph {
              animation: mist-morph 8s ease-in-out infinite;
            }

            @keyframes noise-flow {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 0 45px;
              }
            }

            .animate-noise-flow {
              animation: noise-flow 20s linear infinite;
            }

            @keyframes noise-flow-reverse {
              0% {
                background-position: 0 45px;
              }
              100% {
                background-position: 0 0;
              }
            }

            .animate-noise-flow-reverse {
              animation: noise-flow-reverse 15s linear infinite;
            }

            @keyframes noise-swirl {
              0%, 100% {
                transform: rotate(0deg);
              }
              50% {
                transform: rotate(5deg);
              }
            }

            .animate-noise-swirl {
              animation: noise-swirl 8s ease-in-out infinite;
            }

            @keyframes noise-flow-slow {
              0% {
                background-position: 0 0;
              }
              100% {
                background-position: 0 30px;
              }
            }

            .animate-noise-flow-slow {
              animation: noise-flow-slow 12s linear infinite;
            }

            @keyframes partner-noise {
              0% {
                opacity: 0.4;
              }
              50% {
                opacity: 0.6;
              }
              100% {
                opacity: 0.4;
              }
            }

            .animate-partner-noise {
              animation: partner-noise 4s ease-in-out infinite;
            }

            @keyframes pulse-slow {
              0%, 100% {
                opacity: 0.6;
                transform: scale(1);
              }
              50% {
                opacity: 0.8;
                transform: scale(1.05);
              }
            }

            .animate-pulse-slow {
              animation: pulse-slow 4s ease-in-out infinite;
            }

            @keyframes line-draw {
              0% {
                stroke-dashoffset: 500;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }

            .animate-line-draw {
              animation: line-draw 1s ease-out forwards;
            }

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
