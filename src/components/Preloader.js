import { motion } from "framer-motion";
import React from "react";

const Preloader = () => {
  return (
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={{ duration: 0.5 }}
        className="h-screen w-screen flex justify-center items-center bg-gray-700 text-white text-2xl"
      >
        Welcome all...
      </motion.div>
  );
};

export default Preloader;
