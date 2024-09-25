import Tilt from "react-parallax-tilt";

import { IServices } from "../../interface";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motions";






const ServiceCard = ({ index, title, icon }: IServices) => {
    return (
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className=" xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index!, 0.75)}
          className=" w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient cursor-pointer"
        >
          <div className=" bg-tertiary rounded-[20px] px-12 py-5 min-h-[280px] justify-evenly items-center flex-col ">
            <img className=" w-16 h-16 object-contain" src={icon} alt={title} />
            <h3 className=" text-white text-[20px] font-bold text-center ">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };


  export default ServiceCard