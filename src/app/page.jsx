import ComingSoon from "@/components/ComingSoon";
import DotMatrix from "@/components/DotMatrix/DotMatrix";
import Navbar from "@/components/Navbar";
import PeelReveal from "@/components/PeelReveal/PeelReveal";
import Hero from "@/sections/Hero";
import React from "react";

const Homepage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="relative">
        <PeelReveal />
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
        <ComingSoon />
        <Hero />
      </div>
    </main>
  );
};

export default Homepage;
