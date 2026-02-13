'use client';

import { sectionCard } from '@/data/process.json';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useLayoutEffect, useRef, useState } from 'react';

interface ListItemProps {
  section: string;
  label: string;
  active: boolean;
  scrollTo: (e: MouseEvent) => void;
  last: boolean;
}

type SectionId = 'section-1' | 'section-2' | 'section-3' | 'section-4' | 'section-5' | 'section-6';

const SectionCard = () => {
  const refs: Record<SectionId, React.RefObject<HTMLElement | null>> = {
    'section-1': useRef<HTMLElement | null>(null),
    'section-2': useRef<HTMLElement | null>(null),
    'section-3': useRef<HTMLElement | null>(null),
    'section-4': useRef<HTMLElement | null>(null),
    'section-5': useRef<HTMLElement | null>(null),
    'section-6': useRef<HTMLElement | null>(null),
  };

  const lockRef = useRef(false);
  const lockTimer = useRef<number | null>(null);
  const SCROLL_LOCK_MS = 800;

  const [activeId, setActiveId] = useState('section-1');

  const sections = sectionCard.sections;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sections.forEach((section) => {
      const el = refs[section.id as SectionId].current;
      if (!el) return;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => {
          if (!lockRef.current) setActiveId(section.id);
        },
        onEnterBack: () => {
          if (!lockRef.current) setActiveId(section.id);
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [sections]);

  const makeScrollTo = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    lockRef.current = true;
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = window.setTimeout(() => {
      lockRef.current = false;
    }, SCROLL_LOCK_MS);

    setActiveId(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="flex relative md:flex-row-reverse max-md:flex-col">
      <div className="hidden pt-10 pb-33 top-20 sticky w-full max-md:top-10 z-11 backdrop-blur-md">
        <div className="flex sticky w-full justify-around">
          {sections.map((s, index) => (
            <ListItem
              key={s.id}
              section={s.id}
              label={s.navLabel}
              active={activeId === s.id}
              scrollTo={makeScrollTo(s.id)}
              last={sections.length === index + 1}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-start top-30 sticky w-[33.3%] h-fit pl-11 max-md:hidden">
        <div className="flex flex-col gap-6.5 justify-start items-start sticky">
          <div className="flex text-[24px]">{sectionCard.sideTitle}</div>
          {sections.map((section, index) => (
            <ListItem
              key={section.id}
              section={section.id}
              label={section.navLabel}
              active={activeId === section.id}
              scrollTo={makeScrollTo(section.id)}
              last={sections.length === index + 1}
            />
          ))}
        </div>
      </div>

      <div className="flex col-span-2 flex-col w-[66.6%] pt-40 max-md:pt-7 max-md:w-full">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          const ref = refs[section.id as SectionId];

          if (section.id === 'section-1') {
            return (
              <motion.section
                key={section.id}
                id={section.id}
                ref={ref}
                className="border-b relative border-zinc-200 border-solid pb-33"
              >
                <SectionBg active={isActive} />

                <div className="relative z-10">
                  <div className="pl-7 text-[24px]">{section.title}</div>
                  <div className="flex items-center pt-7 max-lg:flex-col">
                    <div className="relative ml-[35px] max-lg:m-0">
                      <Image
                        width={section.images?.[0]?.width}
                        height={section.images?.[0]?.height}
                        src={section.images?.[0]?.src || ''}
                        alt={section.images?.[0]?.alt || ''}
                      />
                    </div>
                    {section.images?.[1] && (
                      <div className="relative ml-18 max-lg:ml-0 max-lg:mt-10">
                        <Image
                          src={section.images[1].src}
                          alt={section.images[1].alt}
                          width={section.images[1].width}
                          height={section.images[1].height}
                        />
                      </div>
                    )}
                  </div>
                  <div className="pt-7 pl-7 text-[14px]">{section.lead}</div>
                  <div className="pt-12 pl-7 max-w-[610px] text-[16px]">{section.text}</div>
                </div>
              </motion.section>
            );
          }

          if (section.id === 'section-2') {
            return (
              <motion.section
                key={section.id}
                id={section.id}
                ref={ref}
                className="flex relative col-span-2 flex-col pt-63 pb-40 pl-11 border-b-[2px] border-zinc-200 border-solid max-xl:px-5"
              >
                <SectionBg active={isActive} />
                <div className="relative z-10">
                  <div className="text-[24px] font-semibold">{section.title}</div>
                  <div className="flex items-center pt-10 max-xl:flex-col">
                    <div className="flex flex-col items-center pl-5 max-xl:p-0">
                      <div className="flex flex-col relative">
                        <Image
                          width={section.images?.[0]?.width}
                          height={section.images?.[0]?.height}
                          src={section.images?.[0]?.src || ''}
                          alt={section.images?.[0]?.alt || ''}
                        />
                      </div>
                      <div className="flex relative pt-2 text-[14px]">
                        {section.images?.[0]?.alt}
                      </div>
                    </div>
                    <div className="flex flex-col pl-32 items-center max-xl:pl-0 max-xl:pt-5">
                      <div className="flex relative">
                        <Image
                          width={section.images?.[1]?.width}
                          height={section.images?.[1]?.height}
                          src={section.images?.[1]?.src || ''}
                          alt={section.images?.[1]?.alt || ''}
                        />
                      </div>
                      <div className="flex relative pt-2 text-[14px]">
                        {section.images?.[1]?.alt}
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-12 max-w-[640px]">{section.text}</div>
                </div>
              </motion.section>
            );
          }

          if (section.id === 'section-3') {
            return (
              <motion.section
                key={section.id}
                id={section.id}
                ref={ref}
                className="flex relative flex-col pt-68 pb-30 border-b-[2px] border-zinc-200 border-solid max-xl:px-5 max-xl:items-center"
              >
                <SectionBg active={isActive} />
                <div className="relative z-10">
                  <div className="text-[24px] font-semibold pl-11">{section.title}</div>
                  <div className="flex max-xl:flex-col justify-center items-start gap-12 max-xl:gap-8">
                    <div className="flex flex-col mt-10 ml-17 max-xl:w-full max-xl:m-0">
                      <div className="flex relative">
                        <video
                          className="h-[356px] w-auto max-w-full object-contain"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          aria-label="Pillar animation"
                          poster={section.images?.[0]?.src || undefined}
                        >
                          <source src="/video/Pillar_animation.mp4" type="video/mp4" />
                        </video>
                      </div>
                      <div className="pt-6 text-[14px] max-w-[318px]">{section.lead}</div>
                    </div>
                    <div className="flex flex-col pl-16 pt-16 max-xl:p-0">
                      <div className="flex text-[16px] max-w-[318px] pt-9 max-xl:pt-0">
                        {section.text}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          }

          if (section.id === 'section-4') {
            return (
              <motion.section
                key={section.id}
                id={section.id}
                ref={ref}
                className="flex relative flex-col pt-48 pb-22 border-b-[2px] border-zinc-200 border-solid max-xl:px-5"
              >
                <SectionBg active={isActive} />
                <div className="relative z-10">
                  <div className="text-[24px] pl-[40px] font-semibold">{section.title}</div>
                  <div className="flex flex-col pt-5">
                    <div className="relative w-full">
                      <Image
                        width={section.images?.[0]?.width}
                        height={section.images?.[0]?.height}
                        src={section.images?.[0]?.src || ''}
                        alt={section.images?.[0]?.alt || ''}
                      />
                    </div>
                    <div className="pt-6 pl-10 text-[14px]">{section.lead}</div>
                  </div>
                  <div className="pt-6 pl-10 max-w-[580px]">{section.text}</div>
                </div>
              </motion.section>
            );
          }

          if (section.id === 'section-5') {
            return (
              <motion.section
                key={section.id}
                id={section.id}
                ref={ref}
                className="flex relative pt-20 pb-42 border-b-[2px] border-zinc-200 border-solid max-xl:justify-center max-xl:px-5"
              >
                <SectionBg active={isActive} />
                <div className="flex relative pt-49 z-10 xl:pl-21 max-xl:flex-col max-xl:justify-center">
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <div className="text-[24px]/[26px] font-semibold">{section.title}</div>
                      <div className="pt-4 text-[14px] max-xl:pr-10">{section.lead}</div>
                    </div>
                    <div className="pt-23 max-w-[770px] max-xl:max-w-[500px]">{section.text}</div>
                  </div>
                  <div className="relative w-full mt-5">
                    <Image
                      width={section.images?.[0]?.width}
                      height={section.images?.[0]?.height}
                      src={section.images?.[0]?.src || ''}
                      alt={section.images?.[0]?.alt || ''}
                    />
                  </div>
                </div>
              </motion.section>
            );
          }

          if (section.id === 'section-6') {
            return (
              <motion.section
                key={section.id}
                id={section.id}
                ref={ref}
                className="flex relative pt-20 pb-42 border-b-[2px] border-zinc-200 border-solid max-xl:justify-center max-xl:px-5"
              >
                <SectionBg active={isActive} />
                <div className="flex relative pt-49 z-10 xl:pl-21 max-xl:flex-col max-xl:justify-center w-full">
                  <div className="flex flex-col  gap-10">
                    {section.blocks?.map((block) => (
                      <div key={block.title} className="flex max-lg:flex-col max-lg:items-center">
                        <div className="flex flex-col">
                          <div className={`text-[16px] font-semibold ${block?.titleColor}`}>
                            {block.title}
                          </div>
                          <div className="pt-5 max-w-[350px] text-[14px]">{block.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative w-full mt-5">
                    <Image
                      width={section.image?.width}
                      height={section.image?.height}
                      src={section.image?.src || ''}
                      alt={section.image?.alt || ''}
                    />
                  </div>
                </div>
              </motion.section>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

const SectionBg = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        key="grad"
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, var(--terra-black) 30%, #141C4D 100%)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
    )}
  </AnimatePresence>
);

const ListItem = ({ section, label, active, scrollTo, last }: ListItemProps) => {
  const href = `#${section}`;
  return (
    <Link
      href={href}
      onClick={scrollTo}
      className="flex relative max-sm:text-[14px] text-[18px]/[23px] max-md:flex-col justify-center"
    >
      <span className="flex-none relative mr-3 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-white/70">
        <AnimatePresence mode="wait">
          {active && (
            <motion.span
              key={section}
              className="h-[20px] w-[20px] rounded-full bg-blue-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>
      </span>
      <div className="max-md:pr-2 max-md:rotate-90">
        <div className="max-md:absolute max-md:top-[-20px] max-md:left-[30px] max-sm:leading-[15px] max-sm:top-[-10px]">
          {label}
        </div>
      </div>

      {!last && (
        <div className="max-md:hidden absolute left-[8px] top-[30px]">
          <Image src="/process/arrow-down.svg" height={11} width={8} alt="Arrow" />
        </div>
      )}
    </Link>
  );
};

export default SectionCard;
