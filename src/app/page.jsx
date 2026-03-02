"use client";
import ComingSoon from "@/components/ComingSoon";
import DotMatrix from "@/components/DotMatrix/DotMatrix";

import Navbar from "@/components/Navbar";
import PeelReveal from "@/components/PeelReveal/PeelReveal";
import { motion } from "motion/react";
import Hero from "@/sections/Hero";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-transparent absolute z-10 top-0 left-0">
        <DotMatrix
          color="#2c2c2c"
          // color="#444444"
          dotSize={2}
          spacing={5}
          opacity={0.9}
          delay={0.5}
        />
      </div>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={`min-h-screen relative`}
      >
        <Navbar />

        <PeelReveal />
        <ComingSoon />
        <Hero />
      </motion.main>
    </>
  );
};

export default Homepage;
