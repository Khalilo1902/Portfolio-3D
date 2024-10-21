import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "../components";




const HomePage = () => {


  return (
    <div className="relative z-0 bg-primary">
      <div className="blue-yellow-gradient">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas /> 
      </div>
      
    </div>
  );
};

export default HomePage;
