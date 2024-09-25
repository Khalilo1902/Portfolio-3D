import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motions";
import { styles } from "../styles";

interface ISectionWrapper {
  IdName: string;
  Component: React.ComponentType;
}

const SectionWrapper = ({Component, IdName}:ISectionWrapper) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={IdName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;