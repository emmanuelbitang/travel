import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <>
      <Fade>
        <HeroSection />
        <Cards />
        <Footer />
      </Fade>
    </>
  );
}

export default Home;
