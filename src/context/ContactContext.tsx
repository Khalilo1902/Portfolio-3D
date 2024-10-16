/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, ReactNode, useState } from "react";
import axios from "axios";
import { IContact } from "../interface"; // Import the IContact interface

interface IContactContextType {
  sendContact: (newContact: IContact) => Promise<void>;
  status?: string;
  error?: string;
}

const ContactContext = createContext<IContactContextType | undefined>(
  undefined
);

export const useContact = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};

export const ContactProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const sendContact = async (newContact: IContact) => {
    try {
      const response = await axios.post(
        "https://portfolio-db.khalil-dev.me/contact/send",
        newContact
      );
      console.log("Response:", response.data);
      setStatus("Message sent successfully");
      setError(undefined);
      console.log("Response:", response.data);
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        setError(error.response.data?.message || "An unknown error occurred");
      } else {
        setError("An error occurred while sending the message");
      }
      setStatus(undefined);
    }
  };

  return (
    <ContactContext.Provider value={{ sendContact, status, error }}>
      {children}
    </ContactContext.Provider>
  );
};
