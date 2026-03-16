import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import OurServices from "./Pages/OurServices";
import OurTeam from "./Pages/OurTeam";
import Gallery from "./Pages/Gallery";
import Testimonial from "./Pages/Testimonial";
import ContactForm from "./Pages/ContactForm";
import Footer from "./Components/Footer";
import News from "./Pages/News";
import Blog from "./Pages/Blog";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
