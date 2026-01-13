'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface DropdownItemProps {
  title: string;
  description: string;
  index: number;
}

const DropdownItem = ({ title, description }: DropdownItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="text-[26px]/[60px] lg:text-[32px]/[70px] w-full lg:w-[500px] xl:w-[500px] border-b-2 border-zinc-200 pb-2 flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <div className="relative w-[60px] h-[60px] lg:w-[72px] lg:h-[72px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.span
                key="plus"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                className="absolute text-[60px] lg:text-[72px] font-thin text-white"
              >
                +
              </motion.span>
            ) : (
              <motion.span
                key="minus"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
                className="absolute text-[60px] lg:text-[72px] font-thin text-white"
              >
                –
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className="text-[16px]/[24px] lg:text-[18px]/[28px] w-full lg:w-[500px] xl:w-[500px] py-4 text-zinc-400"
            >
              {description}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownItem;
