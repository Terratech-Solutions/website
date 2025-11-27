'use client';

import { techniques } from '@/data/home.json';
import Image from 'next/image';
import Link from 'next/link';

type Technique = {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
};

const TechniqueItem = ({ href, title, description, iconSrc }: Technique) => {
  return (
    <div className="flex flex-col border-b border-solid border-concrete pb-14">
      <div className="grid grid-flow-row-dense pt-24 pr-17 max-sm:pr-0">
        <div className="mb-8 flex justify-between gap-1">
          <p className="flex items-center justify-center text-[22px]/[150%] lg:text-[28px] font-normal whitespace-pre-line">
            {title}
          </p>
          <Image src={iconSrc} alt={title} width={79} height={79} className="w-auto h-auto" />
        </div>

        <p className="mb-6 text-[17px]/[100%] font-light">{description}</p>

        <Link
          className="flex text-[11px]/[150%] font-light underline underline-offset-4 decoration-true-red"
          href={href}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

const Techniques = () => {
  const { sectionTitle, items } = techniques;

  return (
    <section className="bg-terra-black relative">
      <div className="pb-26 px-23.5 max-sm:px-10 pt-17 max-w-[1440] mx-auto">
        <p className="text-[44px]/[52px] font-normal">
          <span className="text-true-red">{sectionTitle.line1}</span> <br />
          {sectionTitle.line2} <br />
          {sectionTitle.line3}
        </p>

        <div className="flex flex-col">
          <div className="grid grid-cols-2 max-md:grid-cols-1">
            {items.map((item) => (
              <TechniqueItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techniques;
