import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#1E293B]/60 p-8 rounded-2xl border border-white/10 flex flex-col items-start gap-4 transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#1E293B]">
      <div className="p-3 rounded-lg bg-gray-700">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default ServiceCard;