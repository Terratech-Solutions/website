import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
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

const Solution = ({ section, images }: SolutionProps) => {
  const mobileImages = [
    { src: '/services/infrastructure/SS_LB1_2.png', width: 869, height: 489 },
    { src: '/services/infrastructure/SS_LB2_3.png', width: 870, height: 489 },
  ];

  return (
    <div className="px-4 md:px-13.5 pt-13">
      <div className="max-w-[1440px] mx-auto px-10 md:px-23.5 pb-10">
        <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
        <div className="flex flex-col pt-4">
          <div className="text-[40px]/[60px] lg:text-[60px]/[80px] whitespace-pre-line">
            <HighlightedText
              lines={section.title.lines}
              highlight={section.title.highlight}
              highlightColor={section.title.highlightColor}
            />
          </div>
          <p className="pt-4 text-[16px]/[1.6] text-neutral-300 max-w-[560px]">{section.description}</p>
        </div>
      </div>
      {images[0] && (
        <div>
          <div className="flex justify-center md:justify-end">
            <Image
              src={mobileImages[0].src}
              alt={images[0].alt}
              width={mobileImages[0].width}
              height={mobileImages[0].height}
              quality={75}
              loading="lazy"
              className="w-full h-auto object-contain md:hidden"
            />
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
              quality={75}
              loading="lazy"
              className="hidden md:block w-full max-w-[980px] h-auto object-contain"
            />
          </div>

          <div className="md:hidden px-4 mt-4">
            <div className="text-lemon-green text-[32px]/[1.15] font-semibold">
              Stud Connections
            </div>
            <div className="h-px bg-white/70 mt-1.5" />
            <div className="text-lemon-green text-[32px]/[1.15] font-semibold mt-3">
              Foundation Connections
            </div>
            <div className="h-px bg-white/70 mt-1.5" />
            <div className="text-lemon-green text-[32px]/[1.15] font-semibold mt-3">
              Void Destabilization
            </div>
            <div className="h-px bg-white/70 mt-1.5" />
          </div>
        </div>
      )}

      {images[1] && (
        <div className="mt-6 sm:mt-8 md:mt-14">
          <div className="flex justify-center md:justify-end">
            <Image
              src={mobileImages[1].src}
              alt={images[1].alt}
              width={mobileImages[1].width}
              height={mobileImages[1].height}
              quality={75}
              loading="lazy"
              className="w-full h-auto object-contain md:hidden"
            />
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={images[1].width}
              height={images[1].height}
              quality={75}
              loading="lazy"
              className="hidden md:block w-full max-w-[980px] h-auto object-contain"
            />
          </div>

          <p className="md:hidden px-4 mt-4 text-white text-[17px]/[1.6] font-medium text-right">
            Using our eco-friendly poly-foam, we stabilize the surface beneath the slab by filling
            voids, addressing the root cause with an effective, long-term solution.
          </p>
        </div>
      )}
    </div>
  );
};

export default Solution;
