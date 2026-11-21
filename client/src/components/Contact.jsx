import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4l9780t",
        "template_sii68s3",
        {
          from_name: form.name,
          to_name: "Sean Previty",
          from_email: form.email,
          to_email: "seanprevity@gmail.com",
          message: form.message,
        },
        "sIGr9an9NikG9ZBZF",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <div
      className="-mt-16 xl:flex-row flex-col-reverse 
      flex gap-8 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-7 rounded-xl"
      >
        <p className={`${styles.sectionSubText} mb-1`}>Get in touch</p>
        <h3
          className={`${styles.sectionHeadTextLight} text-[24px] sm:text-[32px]`}
        >
          Send me an email.
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2 text-[14px]">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-3 px-4
              placeholder:text-taupe text-[14px]
              text-timberWolf rounded-lg outline-hidden
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2 text-[14px]">
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-3 px-4
              placeholder:text-taupe text-[14px]
              text-timberWolf rounded-lg outline-hidden
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-2 text-[14px]">
              Your Message
            </span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-3 px-4
              placeholder:text-taupe text-[14px]
              text-timberWolf rounded-lg outline-hidden
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-3 
            gap-2 sm:text-[16px] text-[14px] text-timberWolf 
            font-bold font-beckman items-center py-3
            whitespace-nowrap sm:w-[110px] sm:h-[40px] 
            w-[90px] h-[38px] rounded-[8px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-200 ease-in-out mt-2"
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                .setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
          >
            {loading ? "Sending" : "Send"}
            <img
              src={send || "/placeholder.svg"}
              alt="send"
              className="contact-btn sm:w-[22px] sm:h-[22px] 
              w-[20px] h-[20px] object-contain"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
