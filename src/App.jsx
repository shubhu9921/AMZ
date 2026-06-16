import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProofStat from './components/ProofStat';
import FeaturesGrid from './components/FeaturesGrid';
import FounderStory from './components/FounderStory';
import TestimonialCarousel from './components/TestimonialCarousel';
import Guarantee from './components/Guarantee';
import FaqAccordion from './components/FaqAccordion';
import Metrics from './components/Metrics';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProofStat />
      <FeaturesGrid />
      <FounderStory />
      <TestimonialCarousel />
      <Guarantee />
      <FaqAccordion />
      <Metrics />
      <FinalCta />
      <Footer />
    </>
  );
}

export default App;
