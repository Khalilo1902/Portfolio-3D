
import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constans";
import { fadeIn, textVariant } from "../../utils/motions";
import SectionWrapper from "../../hoc/SectionWrapper";
import ServiceCard from "./ServiceCard";



const About = () => {
  return (
    <div id="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className=" mt-4 text-secondary text-[17px] max-w-7xl leading-[30px] "
        variants={fadeIn("", "", 0.1, 1)}
      >
        Hello! I am a newly certified web developer from DCI  specializing in the MERN
        stack (MongoDB, Express.js, React.js, and Node.js). Throughout my
        training, I have gained solid expertise in building modern web
        applications and completed numerous projects that highlight my skills in
        both frontend and backend technologies. I am passionate about creating
        scalable and efficient solutions that are not only powerful but also
        user-friendly. I am always motivated to keep learning and improving,
        constantly seeking to stay up-to-date with the latest technologies to
        meet the evolving demands of the industry. I look forward to applying my
        skills in practice and collaborating with other developers, designers,
        and product teams to bring innovative projects to life.
      </motion.p>
      <div className=" mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};



const aboutWrapper = SectionWrapper({ Component: About , IdName: "about" });
export default aboutWrapper


 