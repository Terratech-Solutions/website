'use client';

import Image from 'next/image';

type SolutionProps = {
  section: {
    sectionLabel: string;
    title: {
      lines: string[];
      highlight: string[] | string;
      highlightColor: string;
    };
    description: string;
  };
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

const Solution = ({ images }: SolutionProps) => {
  return (
    <div className="px-4 md:px-13.5 pt-12 md:pt-16 pb-20 md:pb-28 max-w-[1440px] mx-auto">
      {images[0] && (
        <div className="flex justify-end">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={images[0].width}
            height={images[0].height}
            quality={70}
            loading="lazy"
            className="w-full max-w-[980px] h-auto"
          />
        </div>
      )}

      {images[1] && (
        <div className="flex justify-end mt-10 md:mt-14">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            width={images[1].width}
            height={images[1].height}
            quality={70}
            loading="lazy"
            className="w-full max-w-[980px] h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default Solution;
