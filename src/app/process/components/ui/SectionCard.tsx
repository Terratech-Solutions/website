"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ListItem {
  section: string;
  label: string;
  active: boolean;
  scrollTo: any;
  last: boolean;
}

const SectionCard = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const lockRef = useRef(false);
  const lockTimer = useRef<number | null>(null);
  const SCROLL_LOCK_MS = 800;

  const sections = [
    { sectionId: "section-1", ref: ref1, label: "Site Assessment" },
    { sectionId: "section-2", ref: ref2, label: "3D Data Planning" },
    { sectionId: "section-3", ref: ref3, label: "Targeted Drilling" },
    { sectionId: "section-4", ref: ref4, label: "Polymer Injection" },
    { sectionId: "section-5", ref: ref5, label: "Real-Time Monitoring" },
    { sectionId: "section-6", ref: ref6, label: "Verification Reporting" },
  ];

  const [activeId, setActiveId] = useState("section-1");

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const setup = (id: string, element: HTMLElement | null) => {
      if (!element) return;
      ScrollTrigger.create({
        trigger: element,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () => {
          if (!lockRef.current) setActiveId(id);
        },
        onEnterBack: () => {
          if (!lockRef.current) setActiveId(id);
        },
      });
    };

    setup("section-1", ref1.current);
    setup("section-2", ref2.current);
    setup("section-3", ref3.current);
    setup("section-4", ref4.current);
    setup("section-5", ref5.current);
    setup("section-6", ref6.current);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollTo = (id: string) => (event: MouseEvent) => {
    event.preventDefault();

    const element = document.getElementById(id);

    lockRef.current = true;
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = window.setTimeout(() => {
      lockRef.current = false;
    }, SCROLL_LOCK_MS);

    if (!element) return;
    setActiveId(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="flex relative md:flex-row-reverse max-md: flex-col">
      <div className="hidden pt-10 top-20 sticky w-full max-md:top-10 max-md:flex z-11">
        <div className="flex sticky w-full justify-around">
          {sections.map(
            (
              { sectionId, label }: { sectionId: string; label: string },
              index,
            ) => (
              <ListItem
                section={sectionId}
                label={label}
                active={activeId === sectionId}
                key={index}
                scrollTo={() => scrollTo(sectionId)}
                last={sections.length === index + 1}
              />
            ),
          )}
        </div>
      </div>
      <div className="flex justify-start top-30 sticky w-[33.3%] h-fit pl-11  max-md:hidden">
        <div className="flex flex-col gap-6.5 justify-start items-start sticky ">
          <div className="flex text-[24px]">Why Our Process Works</div>
          {sections.map(({ sectionId, label }, index) => (
            <ListItem
              section={sectionId}
              label={label}
              active={activeId === sectionId}
              key={index}
              scrollTo={() => scrollTo(sectionId)}
              last={sections.length === index + 1}
            />
          ))}
        </div>
      </div>
      <div className="flex col-span-2 flex-col w-[66.6%] pt-40 max-md:w-full">
        <motion.section
          id="section-1"
          ref={ref1}
          className="border-b relative border-zinc-200 border-solid pb-33"
        >
          <AnimatePresence>
            {activeId === "section-1" && (
              <motion.div
                key="grad"
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--terra-black) 30%, #141C4D 100%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10">
            <div className="pl-7 text-[24px]">Seeing Beneath the Surface</div>
            <div className="flex items-center pt-7 max-lg:flex-col">
              <div className="relative w-[300px] h-[185px] ml-[35px] max-lg:m-0">
                <Image
                  src="/process/innovative/surface-1.svg"
                  alt="Surface 1"
                  fill
                  priority
                />
              </div>
              <div className="relative w-[160px] h-[158px] ml-18 max-lg:ml-0 max-lg:mt-10">
                <Image
                  src="/process/innovative/surface-2.svg"
                  alt="Surface 2"
                  fill
                  priority
                />
              </div>
            </div>
            <div className="pt-7 pl-7 text-[14px]">
              3D scanning and detection tools map voids, instability, and weak
              strata.
            </div>
            <div className="pt-12 pl-7 max-w-[610px] text-[16px]">
              Our process starts with a clear picture of the ground conditions.
              Using advanced scanning technologies, we identify subsurface
              anomalies that compromise stability—without excavation or
              disruption.
            </div>
          </div>
        </motion.section>

        <motion.section
          id="section-2"
          ref={ref2}
          className="flex relative col-span-2 flex-col pt-63 pb-40 pl-11 border-b-[2px] border-zinc-200 border-solid max-xl:px-5"
        >
          <AnimatePresence>
            {activeId === "section-2" && (
              <motion.div
                key="grad2"
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--terra-black) 30%, #141C4D 100%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10">
            <div className="text-[24px] font-semibold">
              From Complex Data to Actionable Analysis
            </div>
            <div className="flex items-center pt-10 max-xl:flex-col">
              <div className="flex flex-col items-center pl-5 max-xl:p-0">
                <div className="flex flex-col relative w-[220px] h-[170px]">
                  <Image
                    src="/process/innovative/geo-data.svg"
                    alt="Raw Geotechnical Data"
                    fill
                    priority
                  />
                </div>
                <div className="flex relative pt-2 text-[14px]">
                  Raw Geotechnical Data
                </div>
              </div>
              <div className="flex flex-col pl-32 items-center max-xl:pl-0 max-xl:pt-5">
                <div className="flex relative w-[138px] h-[170px]">
                  <Image
                    src="/process/innovative/geo-data-2.svg"
                    alt="Clear, Efficient Strategies."
                    fill
                    priority
                  />
                </div>
                <div className="flex relative pt-2 text-[14px]">
                  Clear, Efficient Strategies.
                </div>
              </div>
            </div>
            <div className="flex pt-12 max-w-[640px]">
              Instead of over-engineered reports, we provide streamlined plans
              that pinpoint exactly where injection is needed, what volume is
              required, and how results will be measured. Every step is mapped
              out for clarity and speed.
            </div>
          </div>
        </motion.section>

        <motion.section
          id="section-3"
          ref={ref3}
          className="flex relative flex-col pt-68 pb-30 border-b-[2px] border-zinc-200 border-solid max-xl:px-5 max-xl:items-center"
        >
          <AnimatePresence>
            {activeId === "section-3" && (
              <motion.div
                key="grad"
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--terra-black) 30%, #141C4D 100%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10">
            <div className="text-[24px] font-semibold pl-11">
              Minimal Impact, Maximum Precision.
            </div>
            <div className="flex max-xl:flex-col justify-center items-center">
              <div className="flex relative w-[325px] h-[300px] mt-10 ml-17 max-xl:w-full max-xl:m-0">
                <Image
                  src="/process/innovative/drill.svg"
                  alt="Precision Drilling"
                  fill
                  priority
                />
              </div>
              <div className="text-[14px] hidden max-xl:flex pt-5">
                Small-diameter drill points <br /> access treatment zones with
                <br />
                surgical accuracy.
              </div>
              <div className="flex flex-col pl-16 pt-16 max-xl:p-0">
                <div className="flex text-[14px] max-xl:hidden">
                  Small-diameter drill points <br /> access treatment zones with
                  <br />
                  surgical accuracy.
                </div>
                <div className="flex text-[16px] max-w-[318px] pt-9">
                  We eliminate the need for heavy equipment by drilling precise,
                  unobtrusive injection holes. This ensures minimal surface
                  disruption and keeps critical infrastructure operational
                  throughout the process.
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="section-4"
          ref={ref4}
          className="flex relative flex-col pt-48 pb-22 border-b-[2px] border-zinc-200 border-solid max-xl:px-5"
        >
          <AnimatePresence>
            {activeId === "section-4" && (
              <motion.div
                key="grad"
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--terra-black) 30%, #141C4D 100%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10">
            <div className="text-[24px] pl-[40px] font-semibold">
              Strength Where It Matters Most
            </div>
            <div className="flex flex-col pt-5">
              <div className="relative w-full h-[265px]">
                <Image
                  src="/process/innovative/polymer.svg"
                  alt="Polymer Injection"
                  fill
                  priority
                />
              </div>
              <div className="pt-6 pl-10 text-[14px]">
                High-density polymer expands underground, compacting and
                stabilizing soil.
              </div>
            </div>
            <div className="pt-6 pl-10 max-w-[580px]">
              Injected at precise depths and pressures, our engineered polymers
              displace voids, restore load paths, and reinforce weak strata.
              Controlled expansion allows us to lift, level, or stabilize
              structures depending on project needs.
            </div>
          </div>
        </motion.section>

        <motion.section
          id="section-5"
          ref={ref5}
          className="flex relative pt-20 pb-42 border-b-[2px] border-zinc-200 border-solid max-xl:justify-center max-xl:px-5"
        >
          <AnimatePresence>
            {activeId === "section-5" && (
              <motion.div
                key="grad"
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--terra-black) 30%, #141C4D 100%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
          <div className="flex relative pt-49 z-10 xl:pl-21 max-xl:flex-col max-xl:justify-center">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="text-[24px]/[26px] font-semibold">
                  Live Data, <br />
                  Informed Adjustments
                </div>
                <div className="pt-4 text-[14px] max-xl:pr-10">
                  Sensors track flow, pressure, and <br /> displacement as
                  injections occur.
                </div>
              </div>
              <div className="pt-23 max-w-[770px] max-xl:max-w-[500px]">
                Our monitoring system provides immediate feedback, allowing
                on-the-fly adjustments that guarantee accuracy. Every injection
                is guided by data, not guesswork, ensuring reliable,
                reproducible outcomes.
              </div>
            </div>
            <div className="relative w-full mt-5 h-[290px]">
              <Image
                src="/process/innovative/infographic-placeholder.svg"
                alt="Infographic"
                fill
                priority
              />
            </div>
          </div>
        </motion.section>

        <motion.section
          id="section-6"
          ref={ref6}
          className="relative pt-20 border-b-[2px] border-zinc-200 border-solid"
        >
          <AnimatePresence>
            {activeId === "section-6" && (
              <motion.div
                key="grad"
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, var(--terra-black) 30%, #141C4D 100%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
          <div className="flex flex-col justify-between items-center relative z-10 pt-23 pb-33">
            <div className="flex max-lg:flex-col max-lg:items-center">
              <div className="flex flex-col pt-5">
                <div className="text-[14px] font-semibold">
                  Immediate Results
                </div>
                <div className="pt-5 max-w-[350px] text-[14px]">
                  Polymer cures in minutes, restoring load-bearing strength so
                  roads and facilities reopen with minimal downtime.
                </div>
              </div>
              <div className="relative w-[130px] h-[170px] ml-13 max-lg:ml-0">
                <Image
                  src="/process/innovative/infographic-placeholder.svg"
                  alt="Infographic"
                  fill
                  priority
                />
              </div>
            </div>

            <div className="flex max-lg:flex-col max-lg:items-center">
              <div className="flex flex-col pt-15">
                <div className="text-[14px] font-semibold">
                  Proof You Can Act On
                </div>
                <div className="pt-5 max-w-[350px] text-[14px]">
                  Concise reports combine test data and injection logs into
                  clear, defensible documentation—without the clutter of
                  traditional engineering reports.
                </div>
              </div>
              <div className="relative w-[130px] h-[170px] ml-13 mt-5 max-lg:ml-0">
                <Image
                  src="/process/innovative/infographic-placeholder.svg"
                  alt="Infographic"
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

const ListItem = ({ section, label, active, scrollTo, last }: ListItem) => {
  const sectionId = `#${section}`;
  return (
    <div className="flex relative  text-[18px] max-md:flex-col justify-center">
      <span className="flex-none relative mr-3 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-white/70">
        <AnimatePresence mode="wait">
          {active && (
            <motion.span
              key={section}
              className=" h-[20px] w-[20px] rounded-full bg-blue-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </span>
      <div className="max-md:pr-2 max-md:rotate-90">
        <Link
          className="max-md:absolute max-md:top-[-20px] max-md:left-[30px]"
          href={sectionId}
          onClick={scrollTo()}
        >
          {label}
        </Link>
      </div>
      {!last && (
        <div className="max-md:hidden absolute w-[20px] h-[11px] left-[2px] top-[35px]">
          <Image
            src="/process/innovative/arrow.svg"
            alt="Arrow"
            fill
            priority
          />
        </div>
      )}
    </div>
  );
};

export default SectionCard;
