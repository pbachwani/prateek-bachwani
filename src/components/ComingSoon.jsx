"use client";
import React from "react";
import { motion } from "motion/react";
import DecryptedText from "./DecryptedText";
import ScrambledText from "./ScrambledText";

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
      className="w-full h-[40vh] md:min-h-[70vh] flex justify-center items-center max-md:pt-20"
    >
      <div className="lowercase text-lg flex gap-1 cursor-default">
        {/* <h3>website launching soon.</h3> */}
        {/* <DecryptedText
          text="website launching soon"
          speed={100}
          maxIterations={10}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
          animateOn="view"
        /> */}
        <ScrambledText
          className="text-sm"
          radius={50}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          website coming soon
        </ScrambledText>
        <p className="rotate-135 hidden">↗</p>
      </div>
    </motion.div>
  );
};

export default ComingSoon;
