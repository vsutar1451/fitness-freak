import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Membership from "../components/Membership/Membership";
import Contact from "../components/Contact/Contact";
import Programs from "../components/Programs/Programs";


function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <WhyChooseUs />

      <Programs />

      <Membership />

      <Contact />
    </>
  );
}

export default Home;