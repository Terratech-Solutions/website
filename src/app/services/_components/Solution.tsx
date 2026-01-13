import HighlightedText from '@/components/HighlightedText';
import ConsultationButtons from '@/components/ui/consultation-buttons/ConsultationButtons';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { solution } from '@/data/services/sinkholes.json';
import Image from 'next/image';

const ArrowRight = () => (
  <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
    <path d="M2 12H58M58 12L48 2M58 12L48 22" stroke="white" strokeWidth="2" />
  </svg>
);
const ArrowLeft = () => (
  <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
    <path d="M58 12H2M2 12L12 2M2 12L12 22" stroke="white" strokeWidth="2" />
  </svg>
);
const ArrowDown = () => (
  <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
    <path d="M12 2L12 38M12 38L2 28M12 38L22 28" stroke="white" strokeWidth="2" />
  </svg>
);

const Solution = () => {
  const { section, images } = solution;

  return (
    <div className="max-w-[1440px] mx-auto px-10 md:px-23.5 pt-20 pb-20">
      <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
      <div className="flex flex-col pt-10">
        <div className="text-[60px]/[80px] max-md:text-[40px]/[50px] max-sm:text-[24px]/[30px] whitespace-pre-line">
          <HighlightedText
            lines={section.title.lines}
            highlight={section.title.highlight}
            highlightColor={section.title.highlightColor}
          />
        </div>

        {/* Mobile: Column Layout */}
        <div className="flex flex-col md:hidden pt-20 gap-3 items-center">
          {images.map((img, index) => (
            <div key={img.src} className="flex flex-col items-center gap-3">
              <Image
                src={img.src}
                alt={img.alt}
                width={Math.round(img.width * 0.8)}
                height={Math.round(img.height * 0.8)}
                loading="lazy"
                className="object-contain"
              />
              {index < images.length - 1 && <ArrowDown />}
            </div>
          ))}
        </div>

        {/* Desktop: Flow Layout */}
        <div className="hidden md:flex flex-col pt-20 gap-6">
          {/* Top Row */}
          <div className="flex items-center justify-center gap-6">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
              loading="lazy"
              className="object-contain"
            />
            <ArrowRight />
            <Image
              src={images[1].src}
              alt={images[1].alt}
              width={images[1].width}
              height={images[1].height}
              loading="lazy"
              className="object-contain"
            />
          </div>

          {/* Middle Arrow */}
          <div className="flex justify-end pr-[calc(50%-250px)]">
            <ArrowDown />
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-center gap-6">
            <Image
              src={images[3].src}
              alt={images[3].alt}
              width={images[3].width}
              height={images[3].height}
              loading="lazy"
              className="object-contain"
            />
            <ArrowLeft />
            <Image
              src={images[2].src}
              alt={images[2].alt}
              width={images[2].width}
              height={images[2].height}
              loading="lazy"
              className="object-contain"
            />
          </div>
        </div>

        <div className="pt-40 max-sm:pt-15">
          <ConsultationButtons />
        </div>
      </div>
    </div>
  );
};

export default Solution;
