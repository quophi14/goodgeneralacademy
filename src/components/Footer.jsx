import React from "react";
import assets from "../assets/assets";
import { IoLogoTiktok } from "react-icons/io5";
import { motion } from "motion/react";

const Footer = ({ theme }) => {
  return (
    <div className="bg-slate-50 dark:bg-secondary pt-10 sm:pt-10 mt-10 sm:mt-30 px-4 sm:px-10 lg:px-24 xl:px-40">
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div 
        initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay:0.3 }}
            viewport={{once: true}}
        className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={
              theme === "dark"
                ? assets.school_logo_dark
                : assets.school_logo_white
            }
            className="w-32 sm:w-44 mb-5"
            alt="school_badge"
          />
          <p className="max-w-md">
            From early literacy to JHS mastery, we deliver a balanced education
            designed to prepare students for the challenges of tomorrow.
          </p>

          <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-8">
            <li>
              <a className="hover:text-primary" href="#">
                Home
              </a>
            </li>

            <li>
              <a className="hover:text-primary" href="#about">
                About Us
              </a>
            </li>

            <li>
              <a className="hover:text-primary" href="#academics">
                Academics
              </a>
            </li>

            <li>
              <a className="hover:text-primary" href="#gallery">
                Gallery
              </a>
            </li>

            <li>
              <a className="hover:text-primary" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
        initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay:0.3 }}
            viewport={{once: true}}
        className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>

          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2 text-sm">
            <input
              type="text"
              placeholder="Enter your message"
              required
              className="w-full p-3 outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />

            <a
              href="https://wa.me/233202191343?text=Hello%20Good%20General%20School,%20I%20would%20like%20to%20subscribe%20to%20your%20newsletter."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white rounded px-6 flex items-center justify-center"
            >
              Send
            </a>
          </div>
        </motion.div>
      </div>
      <hr className="border-gray-300 dark:border-gray-600 my-6" />
      {/* Footer bottom */}
      <motion.div className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright 2026 © Good General Academy - All Rights Reserved</p>
        <p className="max-w-md">
          Created & Designed By Vivaleth.Tech +233 202 191 343
        </p>
        <motion.div 
        initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.6, delay:0.3 }}
            viewport={{once: true}}
        className="flex items-center justify-between gap-4 cursor-pointer">
          <a
            href="https://web.facebook.com/profile.php?id=61569804753264"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.facebook_icon} alt="social_media_platform" />
          </a>
          <a
            href="https://www.instagram.com/goodgenerale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={assets.instagram_icon} alt="social_media_platform" />
          </a>
          <a
            href="https://www.tiktok.com/@goodgeneralacademy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTiktok size={25} className="text-gray-500" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
