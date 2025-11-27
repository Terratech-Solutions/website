'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

const Accordion = ({
  tabs,
}: {
  tabs: {
    id: number;
    title: string;
    content: string;
    image: string;
  }[];
}) => {
  const [active, setActive] = useState(0);

  const verticalVariants = {
    active: {
      height: '100%',
      transition: { duration: 0.5, delay: 0.5 },
    },
    inactive: {
      height: '100%',
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const horizontalVariants = {
    active: {
      width: '100%',
      transition: { duration: 0.5, delay: 0.5 },
    },
    inactive: {
      width: '100%',
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const horizontalVariants2 = {
    active: {
      width: '100%',
      display: 'block',
      transition: { duration: 0.5, delay: 1 },
    },
    inactive: {
      width: '100%',
      display: 'block',
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const contentVariants = {
    active: {
      opacity: 1,
      display: 'block',
      transition: { duration: 0, delay: 0.5 },
    },
    inactive: {
      opacity: 0,
      display: 'none',
      transition: { duration: 0, delay: 0 },
    },
  };

  return (
    <div className="flex">
      <div className="flex max-md:hidden min-h-[40vh] w-full h-full relative place-content-center">
        {tabs.map(({ title, content, image, id }, index) => {
          const isActive = active === index;
          return (
            <AnimatePresence key={title} initial={false}>
              <motion.div
                onClick={() => setActive(index)}
                animate={{
                  width: isActive ? '74%' : '13%',
                }}
                whileHover={{ width: isActive ? '74%' : '14%' }}
                transition={{ duration: 0.5 }}
                className="
      cursor-default
      flex-start
      items-center
      bg-transparent
      min-h-[400px]
      max-h-[400px]
      lg:px-4
      px-1
      py-3
      flex
      relative
      overflow-visible
      focus:outline-none
      border-l-2
      border-white
      border-solid
      "
              >
                <AnimatePresence initial={false}>
                  {isActive && (
                    <div className="flex">
                      <motion.div
                        className={`${isActive ? 'overflow-visible' : 'overflow-hidden'}`}
                        initial={{ width: '0%', display: 'none' }}
                        exit={{ width: '0%', display: 'none' }}
                        variants={horizontalVariants2}
                        animate={!isActive ? 'active' : 'inactive'}
                      >
                        <motion.div className="flex">
                          <Image
                            className="w-full h-auto"
                            src={image}
                            alt={title}
                            width={300}
                            height={300}
                          />
                        </motion.div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
                <motion.div className="h-full ml-0 relative flex flex-col justify-start items-start">
                  <motion.span className="text-[50px] lg:text-[70px] align-text-left">
                    0{id}
                  </motion.span>

                  <AnimatePresence initial={false}>
                    {!isActive && (
                      <motion.div
                        className="overflow-hidden absolute top-[100px]"
                        initial={{ height: '0%' }}
                        exit={{ height: '0%' }}
                        variants={verticalVariants}
                        animate={!isActive ? 'active' : 'inactive'}
                      >
                        <motion.div
                          layout
                          className="text-[24px] font-light h-[300px]"
                          style={{ writingMode: 'vertical-rl' }}
                        >
                          {title}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <div className="flex justify-center">
                        <div className="flex flex-col pt-2 pl-5">
                          <motion.div
                            className="overflow-hidden"
                            initial={{ width: '0%' }}
                            variants={horizontalVariants}
                            animate={isActive ? 'active' : 'inactive'}
                            exit={{ width: '0%' }}
                          >
                            <motion.div className="text-[24px] font-light w-[380px]">
                              {title}
                            </motion.div>
                          </motion.div>
                          <motion.div
                            key="label"
                            className="text-sm font-medium max-w-[400px] justify-start items-start"
                            initial={{ opacity: 0, display: 'none' }}
                            variants={contentVariants}
                            animate={isActive ? 'active' : 'inactive'}
                            exit={{ opacity: 0, display: 'none' }}
                          >
                            {isActive ? 'active' : 'inactive'}
                            {content}
                          </motion.div>
                        </div>
                      </div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </div>
      <div className="md:hidden z-2">
        {tabs.map(({ title, content, image, id }) => {
          return (
            <div key={title} className="flex flex-col pt-50 relative">
              <Image
                className="absolute top-[5%] right-0 bottom-auto left-auto -z-1"
                src={image}
                alt={title}
                width={300}
                height={300}
              />
              <div className="text-[90px]/[79px]">0{id}</div>
              <div className="text-[28px]/[32px] pt-5">{title}</div>
              <div className="pt-5">{content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
