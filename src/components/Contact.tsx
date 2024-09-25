import { motion } from "framer-motion";
import { styles } from "../styles";

import { slideIn } from "../utils/motions";
import { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { useContact } from "../context/ContactContext";
import EarthCanvas from "./canvas/Earth";

const Contact = () => {
  const { status, error, sendContact } = useContact();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendContact(form);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending contact:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-tertiary text-white py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-tertiary text-white py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className="bg-tertiary text-white py-4 px-6 placeholder:text-secondary outline-none border-none font-medium"
              required
            />
          </label>

          <button
            className="bg-tertiary outline-none px-8 py-3 w-fit text-white font-bold shadow-primary rounded-xl"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>

          {status && <p className="text-green-500 mt-4">{status}</p>}
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[500px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const contactWrapper = SectionWrapper({ Component: Contact, IdName: "" });
export default contactWrapper;
