"use client";
import React from "react";
import { motion } from "motion/react";

const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        delay: 0.5,
      }}
      className="w-full min-h-screen h-full flex justify-center items-center"
    >
      <div className="lowercase text-lg flex gap-1">
        <h3>website launching soon.</h3>
        <p className="rotate-135 hidden">↗</p>
      </div>
    </motion.div>
  );
};

export default ComingSoon;
