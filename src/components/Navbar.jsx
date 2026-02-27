"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function MyTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour12: false,
      }).format(now);

      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{time} Jaipur, IN</span>;
}

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-transparent backdrop-blur-xl text-white px-4 md:px-8 py-4 flex items-center justify-between cursor-default z-50 mix-blend-difference">
      {/* LEFT: Logo */}
      <div className="flex items-baseline gap-6">
        <Link
          href="/"
          className="md:text-lg text-xs font-bold tracking-wider font-clash"
        >
          Prateek Bachwani
        </Link>

        {/* Info Text */}
        <div className="hidden md:flex gap-6 text-xs tracking-[1px] text-gray-400 uppercase">
          <MyTime />
          <span className="">Temporary Website</span>
        </div>
      </div>

      {/* RIGHT: CTA */}
      <div className="flex lg:justify-between justify-end w-1/2">
        {/* CENTER RIGHT TEXT */}
        <div className="hidden lg:block text-xs tracking-widest text-gray-300 uppercase ">
          Booking projects for Q2&apos;2026{" "}
          <span className="animate-pulse text-green-500 text-xl text-end">
            &bull;
          </span>
        </div>
        <a
          href="https://calendly.com/bachwani-prateek/30min"
          target="_blank"
          className="hidden md:flex bg-white text-black text-[10px] md:text-xs text-justify tracking-widest uppercase px-4 py-2 rounded-md hover:bg-gray-200 transition hover:cursor-pointer"
        >
          Take a discovery call w/ me
        </a>
        <a
          href="https://calendly.com/bachwani-prateek/30min"
          target="_blank"
          className="bg-white md:hidden text-black text-[10px] md:text-xs text-justify tracking-widest uppercase px-4 py-2 rounded-md hover:bg-gray-200 transition hover:cursor-pointer"
        >
          Talk w/ me
        </a>
      </div>
    </nav>
  );
}
