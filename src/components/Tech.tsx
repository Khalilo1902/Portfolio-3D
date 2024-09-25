import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constans";

const Tech = () => {
  return (
    <div className=" flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technologie) => (
        <div className=" w-28 h-28" key={technologie.name}>
          <BallCanvas icon={technologie.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper({ Component: Tech , IdName: "" });
