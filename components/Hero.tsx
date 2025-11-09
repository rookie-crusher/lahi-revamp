import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-gray-800 text-center py-20 sm:py-28 bg-gradient-to-r from-white via-teal-50 to-cyan-50 animate-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          <span className="text-teal-500">Lahi</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Limitless Access to High Impact
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We craft extraordinary digital experiences through innovative apps, games, and media that captivate audiences and drive success worldwide.
        </p>
      </div>
    </section>
  );
};

export default Hero;