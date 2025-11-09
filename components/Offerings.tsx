import React from 'react';
import { MobileIcon } from './icons/MobileIcon';
import { GameIcon } from './icons/GameIcon';
import { MediaIcon } from './icons/MediaIcon';

const Offerings: React.FC = () => {
  return (
    <section className="bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Create
          </h2>
          <p className="text-lg text-gray-600">
            From initial concept to final launch, we deliver exceptional digital products that not only meet but exceed expectations, pushing the boundaries of innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gradient-to-br from-[#1E5245] to-[#12312A] p-10 rounded-3xl text-white flex flex-col justify-between min-h-[300px] shadow-lg">
            <GameIcon className="mb-6 h-12 w-12 text-white/80" />
            <div>
              <h3 className="text-3xl font-bold mb-4">Game Development</h3>
              <p className="text-white/90">Immersive gaming experiences that captivate and engage players worldwide.</p>
            </div>
          </div>

          <div className="bg-gray-100 p-10 rounded-3xl flex flex-col justify-between min-h-[300px] shadow-lg">
            <MobileIcon className="mb-6 h-12 w-12 text-gray-400"/>
             <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
              <p className="text-gray-700">Cutting-edge mobile applications that solve real-world problems beautifully.</p>
            </div>
          </div>

          <div className="bg-[#1C2C3A] p-10 rounded-3xl text-white flex flex-col justify-between min-h-[300px] shadow-lg">
            <MediaIcon className="mb-6 h-12 w-12 text-white/80"/>
            <div>
              <h3 className="text-3xl font-bold text-white">Digital Media</h3>
              <p className="text-white/90">Rich multimedia content that tells stories and creates lasting impressions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;