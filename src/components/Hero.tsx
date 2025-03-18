import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Content Container */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        {/* Left Decorative Elements */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>

        {/* Main Text Content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <div className="flex items-center gap-2">
              <span>Hi</span>
              <img
                className="w-28 h-28 rounded-full object-cover"
                src="./khalilBild.png"
                alt="Khalil Haouas"
              />
            </div>
            I'm <span className="text-[#915eff]">Khalil Haouas</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces and web applications
            <br className="hidden sm:block" /> with passion and precision.
          </p>
        </div>
      </div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 top-72 w-full h-full z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator - Jetzt unter dem Canvas */}
      <div className="absolute bottom-0 xs:bottom-10 w-full flex justify-center items-center z-[-1]">
        <a href="#about" aria-label="Scroll to About Section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
