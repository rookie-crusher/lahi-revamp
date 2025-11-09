import React from 'react';
import Hero from '../components/Hero';
import Offerings from '../components/Offerings';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Offerings />
      <Contact />
    </>
  );
};

export default HomePage;
