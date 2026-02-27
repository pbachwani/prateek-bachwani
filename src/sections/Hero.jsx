"use client";
import { projects } from "@/app/constants/data";
import Copy from "@/components/Copy/Copy";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { toast, Toaster } from "sonner";

const Hero = () => {
  const handleCopy = async (textToCopy) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy text.");
    }
  };
  return (
    <section className="w-full bg-transparent h-screen pt-20 px-4 md:px-8 py-10 flex flex-col justify-end ">
      <Toaster position="bottom-center" />
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
        {/* LEFT SIDE */}
        <div className="h-full flex flex-col justify-end max-w-xl">
          {/* Arrow */}
          {/* <div className="text-2xl mb-6">(→)</div> */}

          {/* Heading */}

          {/* <h1 className="text-2xl md:text-4xl leading-tight font-medium hidden">
            Thoughtful websites for growing businesses. I design and build
            high-quality, clean, reliable websites that feel professional, load
            fast, and are easy to maintain.
          </h1> */}

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            className="mt-8 text-xs md:text-sm text-gray-400 uppercase tracking-widest leading-relaxed max-w-md cursor-default"
          >
            I work directly with clients from start to finish, keeping things
            simple, transparent, and focused on what actually matters for your
            business.
          </motion.div>

          {/* Bullet Points */}

          <motion.ul className="mt-6 space-y-2 text-sm text-gray-300 cursor-default">
            {[
              "Direct communication, no middle layers",
              "Design and development under one roof",
              "Practical solutions, not unnecessary complexity",
            ].map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: i * 0.8, ease: "easeOut" }}
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>
          {/* FOOTER LINE */}
          <div className="mt-10 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest h-full flex-1 items-end hidden lg:flex cursor-default">
            <div className="flex flex-col gap-4">
              <p
                className="cursor-pointer hover:text-white transition-colors duration-200 ease-out"
                onClick={() => handleCopy("bachwani.prateek@gmail.com")}
              >
                bachwani.prateek@gmail.com
              </p>
              <p>
                <span className="text-white w-fit">
                  Have a project in mind?
                </span>{" "}
                Tell me a little about your project, and I&apos;ll get back to
                you within 24-48 hours.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-end">
          {/* status */}
          {/* <div className="text-xs text-[#C2A24A] uppercase tracking-widest mb-4 lg:text-end">
            [Currently working independently. Studio launching soon.]
          </div> */}
          {/* Label */}
          <div className="text-xs text-gray-500 uppercase tracking-widest mb-4 cursor-default">
            Clients I&apos;ve worked with
          </div>

          {/* Project List */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="flex flex-col border-t border-white/30 font-clash"
          >
            {projects.map((project, i) => (
              <Link
                key={i}
                href={project.link}
                target="_"
                rel="noopener noreferrer"
                className={`flex items-center justify-between py-2 border-b border-white/30 group text-foreground hover:bg-[#ededed] hover:text-black transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:px-4 px-2`}
              >
                <span
                  className={`text-sm md:text-base font-semibold text-[${project.color}] group-hover:text-black`}
                >
                  {project.name}
                </span>

                {!project.soon && (
                  <span className="opacity-100 group-hover:scale-110 group-hover:rotate-45 rotate-360 transition duration-350 ease-out text-white group-hover:text-black font-extrabold">
                    ↗
                  </span>
                )}

                {project.soon && (
                  <span className="text-xs text-gray-500">coming soon</span>
                )}
              </Link>
            ))}
          </motion.div>

          {/* FOOTER LINE for mobile */}
          <div className="mt-10 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest h-full flex-1 items-end flex my-10 lg:hidden ">
            <div className="flex flex-col gap-4">
              <p
                className="cursor-pointer hover:text-white transition-colors duration-200 ease-out"
                onClick={() => handleCopy("bachwani.prateek@gmail.com")}
              >
                bachwani.prateek@gmail.com
              </p>
              <p>
                <span className="text-white w-fit">
                  Have a project in mind?
                </span>{" "}
                Tell me a little about your project, and I&apos;ll get back to
                you within 24-48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
