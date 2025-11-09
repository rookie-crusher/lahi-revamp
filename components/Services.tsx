import React from 'react';
import ServiceCard from './ServiceCard';
import { GameIcon } from './icons/GameIcon';
import { MobileIcon } from './icons/MobileIcon';
import { MediaIcon } from './icons/MediaIcon';


const servicesData = [
  {
    icon: <GameIcon />,
    title: 'Game Development',
    description: 'Immersive gaming experiences that captivate and engage players worldwide.',
  },
  {
    icon: <MobileIcon />,
    title: 'Mobile Apps',
    description: 'Cutting-edge mobile applications that solve real-world problems beautifully.',
  },
  {
    icon: <MediaIcon />,
    title: 'Digital Media',
    description: 'Rich multimedia content that tells stories and creates lasting impressions.',
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Create</span>
          </h2>
          <p className="text-lg text-gray-400">
            From initial concept to final launch, we deliver exceptional digital products that not only meet but exceed expectations, pushing the boundaries of innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;