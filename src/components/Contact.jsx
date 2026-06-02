import React, { useState } from "react";
import assets from "../assets/assets";
import Title from "./Title";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "04ce1cc8-6009-4a84-af5b-5bcc91cf7a1c");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      
      toast.success('Thank you for your submission')
      event.target.reset();
    } else {
      
      toast.error(data.message);
    }
        
    } catch (error) {
        toast.error(error.message)
        
    }

    
  };


  return (
    <div
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Take the First Step Toward Their Future"
        desc="We believe every great education starts with a strong partnership. Send us a message to discuss how we can work together to nurture your child's unique talents from Creche through to JHS."
      />

      <div
        className="my-16 md:my-20 mx-auto w-[90%] flex flex-col md:flex-row gap-10 md:gap-16"
        id="contact"
      >
        {/* LEFT SIDE */}
        <motion.div 
        initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2 }}
            viewport={{once: true}}
        className="w-full md:w-[48%] text-[#676767] dark:text-white">
          <h3 className="text-[#000f38] text-xl md:text-2xl font-medium flex items-center mb-4 md:mb-5 dark:text-white">
            Send us a Message
            <img
              src={assets.msg_icon}
              alt="msg"
              className="w-6 md:w-[35px] ml-3 md:ml-5"
            />
          </h3>

          <p className="max-w-full md:max-w-[450px] leading-relaxed text-sm md:text-base">
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>

          <ul className="mt-4">
            <li className="flex items-center my-4">
              <img
                src={assets.mail_icon}
                alt=""
                className="w-5 md:w-[25px] mr-3"
              />
              goodgenerale@gmail.com
            </li>

            <li className="flex items-center my-4">
              <img
                src={assets.phone_icon}
                alt=""
                className="w-5 md:w-[25px] mr-3"
              />
              +233 244 891 370
            </li>

            <li className="flex items-start my-4">
              <img
                src={assets.location_icon}
                alt=""
                className="w-5 md:w-[25px] mr-3 mt-1"
              />
              <span>
                Bulaaso Behind Casilda Estate <br />
                Peace Be, Community 25
              </span>
            </li>
          </ul>
        </motion.div>
        <motion.form 
        initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay:0.3 }}
            viewport={{once: true}}
        onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
          <div
          
          >
            <p className="mb-2 text-sm font-medium">Your name</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.person_icon} alt="" />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full p-3 text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium">Email id</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.email_icon} alt="" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 text-sm outline-none"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea
            
              rows={8}
              name="message"
              placeholder="Enter your message"
              className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            />
          </div>

          <button 
  type="submit"
  className="
    w-max flex items-center gap-1.5 md:gap-2
    bg-primary text-white text-sm
    px-6 md:px-7 lg:px-8
    py-1.5 md:py-2
    rounded-full cursor-pointer
    hover:scale-103 transition-all
  "
>
  Submit 
  <img src={assets.arrow_icon} className="w-4 block" alt="" />
</button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
