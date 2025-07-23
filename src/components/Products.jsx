import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  let products = [
    {
      title: "aquitel",
      description:
        "lorem ipsum dolor sit amet con laoreet et justo eu just cause eu just cause",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "lorem ipsum dolor sit amet con laoreet et justo eu just cause eu just cause",
      live: true,
      case: false,
    },
    {
      title: "Yir2022",
      description:
        "lorem ipsum dolor sit amet con laoreet et justo eu just cause eu just cause",
      live: true,
      case: true,
    },
    {
      title: "yahoo!",
      description:
        "lorem ipsum dolor sit amet con laoreet et justo eu just cause eu just cause",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const move = (val) => {
    setPos(val * 20);
  };
  return (
    <div className="py-10 mx-5 mt-32 relative">
      {products.map((val, index) => (
        <Product key={index} val={val} mover={move} count={index} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="frame w-[24rem] h-[20rem] bg-white left-[45%] -translate-x-[50%]  absolute overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="frame w-full h-full bg-sky-200 "
          >
            <video
              muted
              autoPlay
              loop
              className="w-full h-full object-cover"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-169.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="frame w-full h-full bg-sky-300 "
          >
            <video
              muted
              loop
              autoPlay
              className="w-full h-full object-cover"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-169.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="frame w-full h-full bg-sky-400 "
          >
            <video
              muted
              loop
              autoPlay
              className="w-full h-full object-cover"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/deepset-169.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="frame w-full h-full bg-sky-500 "
          >
            <video
              muted
              loop
              autoPlay
              className="w-full h-full object-cover"
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/chargeflow-169.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
