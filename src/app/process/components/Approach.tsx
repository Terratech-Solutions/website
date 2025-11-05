"use client";
import SectionCard from "@/app/process/components/ui/SectionCard";
// import SectionCard from "@/app/process/components/ui/SectionCard";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef } from "react";

const Approach = () => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });
  //
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log(latest, "scrollYProgress");
  // });

  return (
    <section className="flex flex-col px-23.5 pb-30 mx-auto max-w-[1440] max-md:px-2.5">
      <div className="pt-24">☰ Innovative Solutions</div>
      <div className="flex flex-col pt-10">
        <div className="text-[50px]/[60px]">
          The <span className="text-lemon-green">Future</span> of Polymer <br />
          Injection is Here.
        </div>
        <div className="pt-6.5">
          Fast, precise, and engineered for lasting stability.
        </div>
      </div>
      <SectionCard />
    </section>
  );
};

export default Approach;
