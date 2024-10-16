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
 


  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("https://portfolio.khalil-dev.me/feedback/all");
      if (Array.isArray(response.data)) {
        setTestimonials(response.data);
      } else {
        console.error("Expected an array of testimonials, but got:", response.data);
        setTestimonials([]);  // set an empty array if the data is not an array
      }
      
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, [testimonials]);

  const addTestimonial = async (newTestimonial: ITestimonials) => {
    try {
      await axios.post("https://portfolio.khalil-dev.me/feedback/add", newTestimonial);
       
      await fetchTestimonials();  

    } catch (error) {
      console.error("Error adding testimonial:", error);
    
    }
  };


  

  return (
    <TestimonialsContext.Provider value={{ testimonials, fetchTestimonials, addTestimonial, setTestimonials ,isSubmitting,setIsSubmitting}}>
      {children}
    </TestimonialsContext.Provider>
  );
};
