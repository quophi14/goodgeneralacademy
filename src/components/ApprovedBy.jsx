import React from "react";
import { education_authority_logos } from "../assets/assets";
import { motion } from "motion/react";

const ApprovedBy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="font-semibold mt-10 text-4xl"
      >
        Approved By
      </motion.h3>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="flex items-center justify-evenly flex-wrap gap-6 sm:gap-8 md:gap-10 m-4"
      >
        {education_authority_logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            alt="Education Authority"
            transition={{ duration: 0.4 }}
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain dark:drop-shadow-xl rounded-2xl cursor-pointer hover:scale-103 transition-all"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ApprovedBy;
