import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ imagesUrl, direction }) => {
  return (
    <div className="flex items-center bg-black gap-20 h-54 overflow-hidden mt-10">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20 items-center h-14 bg-"
      >
        {imagesUrl.map((url, index) => (
          <img key={index} className="" src={url} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20  items-center"
      >
        {imagesUrl.map((url, index) => (
          <img key={index} className="" src={url} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        className="flex flex-shrink-0 gap-20  items-center"
      >
        {imagesUrl.map((url, index) => (
          <img key={index} className="" src={url} alt="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
