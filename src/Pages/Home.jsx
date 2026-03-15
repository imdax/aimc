import React from "react";
import HeroSection from "../Components/HeroSection";
import Static from "../Components/Static";
import Introduction from "../Components/Introduction";
import Strip from "../Components/Strip";
import Services from "../Components/Services";
import Carousel from "../Components/Carousel";
import ClientStory from "../Components/ClientStory";
import WhatSet from "../Components/WhatSet";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <HeroSection />
      <Static />
      <Introduction />
      <Strip />
      <Services />
      <ClientStory />
      <WhatSet />
      <Testimonial />
    </div>
  );
}

export default Home;
