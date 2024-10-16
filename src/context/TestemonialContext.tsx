import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { ITestimonials } from "../interface";

interface TestimonialContextType {
    testimonials: ITestimonials[];
    fetchTestimonials: () => Promise<void>;
    addTestimonial: (newTestimonial: ITestimonials) => Promise<void>;
    setTestimonials: React.Dispatch<React.SetStateAction<ITestimonials[]>>;
    setIsSubmitting:React.Dispatch<React.SetStateAction<boolean>>
    isSubmitting:boolean;
    setIsTestimonialsAdded: React.Dispatch<React.SetStateAction<boolean>>
    isTestimonialsAdded: boolean
}

const TestimonialsContext = createContext<TestimonialContextType | undefined>(
  undefined
);

export const useTestimonials = () => {
  const context = useContext(TestimonialsContext);
  if (!context) {
    throw new Error("useTestimonials must be used within a TestimonialsProvider");
  }
  return context;
};

export const TestimonialsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTestimonialsAdded,setIsTestimonialsAdded] = useState(false)


  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("https://portfolio-db.khalil-dev.me/feedback/all");
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [isTestimonialsAdded,setIsTestimonialsAdded]);

  const addTestimonial = async (newTestimonial: ITestimonials) => {
    try {
      await axios.post("https://portfolio-db.khalil-dev.me/feedback/add", newTestimonial);
       setIsTestimonialsAdded(true)
      await fetchTestimonials();  

    } catch (error) {
      console.error("Error adding testimonial:", error);
      setIsTestimonialsAdded(false)
    }
  };


  

  return (
    <TestimonialsContext.Provider value={{ testimonials, fetchTestimonials, addTestimonial, setTestimonials ,isSubmitting,setIsSubmitting,setIsTestimonialsAdded,isTestimonialsAdded}}>
      {children}
    </TestimonialsContext.Provider>
  );
};
