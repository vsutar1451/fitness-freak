import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Membership from "../components/Membership/Membership";


function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <WhyChooseUs />

      <Membership />
    </>
  );
}

export default Home;