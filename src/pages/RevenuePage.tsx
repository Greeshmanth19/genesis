import React from 'react';

const RevenuePage: React.FC = () => {
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
      <div className="top-8 mt-16">
        <div className="text-center mb-16">
          <p
            className="max-w-2xl mx-auto leading-relaxed mb-2"
            style={{
              color: '#45B649',
              fontSize: '18px',
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
            className="mb-6"
            style={{
              color: '#FFF',
              fontSize: '72px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '90%',
              letterSpacing: '-2.16px',
            }}
          >
            Revenue Sharing
          </h1>
          <p
            className="max-w-2xl mx-auto leading-relaxed"
            style={{
              color: '#FFF',
              fontSize: '18px',
              fontFamily: '"Space Grotesk"',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '120%',
              letterSpacing: '-0.54px',
            }}
          >
            Genesis Incubations introduces a new revenue-sharing
            <br />
            model that drives value back to our community
            <br />
            through transaction taxes and incubation revenues.
          </p>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative w-full max-w-7xl mx-auto px-8">
        {/* Main title */}

        {/* Content layout - 3 columns with center logo */}
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

          {/* Center - Main Image */}
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

              {/* Glowing background effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 blur-3xl rounded-full transform scale-150"></div> */}

              {/* Main logo container - Increased size from w-96 h-96 to w-[32rem] h-[32rem] (512px) */}
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

      {/* Our Partners Section */}
      <div className="w-full mb-16">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-medium text-white mb-8">Our Partners</h2>
        </div>

        <div className="flex justify-center items-center gap-8 max-w-7xl mx-auto px-8">
          {/* Sparkstarter Card */}
          <div
            className="rounded-2xl p-8 w-96 h-40 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
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
            className="rounded-2xl p-8 w-96 h-40 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
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
            className="rounded-2xl p-8 w-96 h-40 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
            }}
          >
            <span className="text-gray-400 text-xl">Coming Soon</span>
          </div>

          {/* Coming Soon Card 2 */}
          <div
            className="rounded-2xl p-8 w-96 h-40 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
            style={{
              borderRadius: '16px',
              background: 'linear-gradient(192deg, #0F0F0F 9.1%, #171717 91.25%)',
            }}
          >
            <span className="text-gray-400 text-xl">Coming Soon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;
