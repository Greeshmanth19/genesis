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
      <div className="top-8">
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
        <div className="grid grid-cols-3 gap-8 items-start">
          {/* Left column */}
          <div className="space-y-16 pt-8">
            {/* Transaction Tax Allocation - Top Left */}
            <div className="text-left">
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
            </div>

            {/* Incubation Revenue Sharing - Bottom Left */}
            <div className="text-left">
              <h3
                className="mb-4"
                style={{
                  color: '#FFF',
                  textAlign: 'left',
                  fontFamily: '"TT Firs Neue Trl"',
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
                  textAlign: 'left',
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
            </div>
          </div>

          {/* Center - Main Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 blur-3xl rounded-full transform scale-150"></div>

              {/* Main logo container */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                <img
                  src={require('../assets/Images/revenueMain.png')}
                  alt="Revenue Sharing Logo"
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-16 pt-8">
            {/* Inclusive Staking - Top Right */}
            <div className="text-right">
              <h3
                className="mb-4"
                style={{
                  color: '#FFF',
                  textAlign: 'right',
                  fontFamily: '"TT Firs Neue Trl"',
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
                  textAlign: 'right',
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
            </div>

            {/* Weekly Deposits - Bottom Right */}
            <div className="text-right">
              <h3
                className="mb-4"
                style={{
                  color: '#FFF',
                  textAlign: 'right',
                  fontFamily: '"TT Firs Neue Trl"',
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
                  textAlign: 'right',
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;
