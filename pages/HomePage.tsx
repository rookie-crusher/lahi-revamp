import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Offerings from '../components/Offerings';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Lahi',
    'url': 'https://lahi.io',
    'logo': 'https://lahi.io/logo.png',
    'sameAs': ['https://www.linkedin.com/company/lahiio']
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': 'https://lahi.io',
    'name': 'Lahi'
  };

  return (
    <>
      <Helmet>
        <title>Lahi – Creative Apps, Games & Digital Experiences</title>
        <meta name='description' content='Lahi creates innovative mobile apps, games and interactive digital experiences combining creativity and technology.' />
        <link rel='canonical' href='https://lahi.io/' />

        <meta property='og:title' content='Lahi – Creative Apps, Games & Digital Experiences' />
        <meta property='og:description' content='We build mobile apps, games and immersive digital experiences.' />
        <meta property='og:url' content='https://lahi.io/' />
        <meta property='og:image' content='https://lahi.io/og-image.png' />
        <meta name='twitter:card' content='summary_large_image' />

        <script type='application/ld+json'>{JSON.stringify(organizationSchema)}</script>
        <script type='application/ld+json'>{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <Hero />
      <Offerings />
      <Contact />
    </>
  );
};

export default HomePage;
