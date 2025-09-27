import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div
      style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}
      className="relative min-h-screen flex items-center justify-center bg-[#F9FEF1]"
    >
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Home Page</h1>
        <p className="text-xl">Welcome to Genesis</p>
      </div>
    </div>
  );
};

export default HomePage;
