import React from 'react';
import { HeroGeometric } from './ui/shape-landing-hero';

const Hero: React.FC = () => {
  return (
    <section id="home">
      <HeroGeometric
        badge="Professional Photography"
        title1="ASHUTOSH"
        title2="OJHA"
        subtitle="Capturing extraordinary moments through the art of visual storytelling. Every frame tells a unique story."
      />
    </section>
  );
};

export default Hero;
