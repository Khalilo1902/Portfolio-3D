import { styles } from "../styles";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motions";
import { ITestimonials } from "../interface";
import SectionWrapper from "../hoc/SectionWrapper";
import { useTestimonials } from "../context/TestemonialContext";
import {  useEffect, useState } from "react";

interface IFeedbackCardProps {
  testimonials: ITestimonials;
  index: number;
}

 const FeedbackCard: React.FC<IFeedbackCardProps> = ({ testimonials, index }: IFeedbackCardProps) => (
  <motion.div
    className=" bg-black-100 p-10 rounded-3xl xs:w-[320px] w-full"
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
  >
    <p className=" text-white font-black text-[48px]">"</p>
    <div className=" mt-1"></div>
    <p className=" text-white tracking-wider text-[18px]">
      {testimonials.testimonial}
    </p>
    <div className=" mt-7 flex justify-between items-center gap-1">
      <div className=" flex-1 flex flex-col">
        <p className=" text-white font-medium text-[16px]">
          <span className=" blue-text-gradient">@</span>
          {testimonials.name}
        </p>
        <p className=" mt-1 text-secondary text-[12px]">
          {testimonials.designation} of {testimonials.company}
        </p>
      </div>
      <img
        className=" w-10 h-10 rounded-full object-cover"
        src={testimonials.image}
        alt={`feedback-by ${testimonials.name}`}
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const { testimonials, addTestimonial,setTestimonials, fetchTestimonials,isSubmitting,setIsSubmitting } = useTestimonials();
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    testimonial: "",
    designation: "",
    company: "",
    image: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setIsSubmitting(true); 
    try {
      await addTestimonial(formData);
      setFormData({
        _id: "",
        name: "",
        testimonial: "",
        designation: "",
        company: "",
        image: "",
      });
     testimonials.push(formData)
     
     setTestimonials(testimonials)
      setSuccessMessage("Testimonial successfully added!");
        } catch (error) {
      console.error("Error adding testimonial:", error);
    }finally{
      setIsSubmitting(false)
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className=" mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What other say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={` ${styles.paddingX} flex flex-wrap gap-7 mt-20 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial._id}
            index={index}
            testimonials={testimonial}
          />
        ))}
      </div>

      <div className=" flex justify-center p-2">
      <form className=" mt-12 flex flex-col gap-8 w-1/2 " onSubmit={handleSubmit}>
          <label className=" flex flex-col">
            <span className=" text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" What's your name"
              className=" bg-tertiary text-white py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>
          <label className=" flex flex-col">
            <span className=" text-white font-medium mb-4">Your testimonial</span>
            <textarea
              rows={7}
              name="testimonial"
              value={formData.testimonial}
              onChange={handleChange}
              placeholder=" What do you want to say "
              className=" bg-tertiary text-white py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>

          <label className=" flex flex-col">
            <span className=" text-white font-medium mb-4">Your designation</span>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              placeholder=" What's your designation"
              className=" bg-tertiary text-white py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>
          <label className=" flex flex-col">
            <span className=" text-white font-medium mb-4">Your Company</span>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder=" What's your designation"
              className=" bg-tertiary text-white py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>
          <label className=" flex flex-col">
            <span className=" text-white font-medium mb-4">Your Image URL</span>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className=" bg-tertiary text-white py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
            />
          </label>

          <button
            className=" bg-tertiary outline-none px-8 py-3 w-fit text-white font-bold shadow-primary rounded-xl"
            type="submit"
          >
             {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      {successMessage && (
        <div className="text-center mt-4">
          <p className="text-green-500 font-bold">{successMessage}</p>
        </div>
      )}
    </div>
  );
};

const WrappedFeedbacks = SectionWrapper({ Component: Feedbacks, IdName: "feedbacks" });

export default WrappedFeedbacks;






