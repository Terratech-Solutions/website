import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { solution } from '@/data/services/sinkholes.json';
import Image from 'next/image';

const ArrowRight = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="60" height="24" viewBox="0 0 60 24" fill="none">
    <path d="M2 12H58M58 12L48 2M58 12L48 22" stroke="white" strokeWidth="2" />
  </svg>
);
const ArrowLeft = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="60" height="24" viewBox="0 0 60 24" fill="none">
    <path d="M58 12H2M2 12L12 2M2 12L12 22" stroke="white" strokeWidth="2" />
  </svg>
);
const ArrowDown = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="24" height="40" viewBox="0 0 24 40" fill="none">
    <path d="M12 2L12 38M12 38L2 28M12 38L22 28" stroke="white" strokeWidth="2" />
  </svg>
);

const Solution = () => {
  const { section, images } = solution;

  return (
    <div
      className="max-w-[1440px] mx-auto px-10 md:px-23.5 pt-20 pb-20"
      style={{
        background: 'linear-gradient(180deg, #131313 81.73%, #1D1D1D 100%)',
      }}
    >
      <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
      <div className="flex flex-col pt-10">
        <div className="text-[40px]/[60px] lg:text-[60px]/[80px] whitespace-pre-line">
          <HighlightedText
            lines={section.title.lines}
            highlight={section.title.highlight}
            highlightColor={section.title.highlightColor}
          />
        </div>

        <div className="flex flex-col md:hidden pt-20 gap-3 items-center">
          {images.map((img, index) => (
            <div key={img.src} className="flex flex-col items-center gap-3">
              <Image
                src={img.src}
                alt={img.alt}
                width={Math.round(img.width * 0.8)}
                height={Math.round(img.height * 0.8)}
                loading="lazy"
                className="object-contain max-w-full h-auto"
              />
              {index < images.length - 1 && <ArrowDown className="w-6 h-10" />}
            </div>
          ))}
        </div>

        <div className="hidden md:flex flex-col pt-20 gap-4 lg:gap-6 items-center">
          <div className="flex items-center justify-center gap-3 lg:gap-6 w-full">
            <div className="flex-shrink-0 w-[30%] max-w-[400px] flex justify-center">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                width={images[0].width}
                height={images[0].height}
                loading="lazy"
                className="object-contain w-full h-auto"
              />
            </div>
            <ArrowRight className="flex-shrink-0 w-[40px] lg:w-[60px] h-auto" />
            <div className="flex-shrink-0 w-[30%] max-w-[400px] flex justify-center">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                width={images[1].width}
                height={images[1].height}
                loading="lazy"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>

          <div className="flex justify-end w-full pr-[15%] lg:pr-[calc(50%-200px)]">
            <ArrowDown className="w-6 h-[30px] lg:h-[40px]" />
          </div>

          <div className="flex items-center justify-center gap-3 lg:gap-6 w-full">
            <div className="flex-shrink-0 w-[30%] max-w-[400px] flex justify-center">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                width={images[3].width}
                height={images[3].height}
                loading="lazy"
                className="object-contain w-full h-auto"
              />
            </div>
            <ArrowLeft className="flex-shrink-0 w-[40px] lg:w-[60px] h-auto" />
            <div className="flex-shrink-0 w-[30%] max-w-[400px] flex justify-center">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                width={images[2].width}
                height={images[2].height}
                loading="lazy"
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>

        {section.description && (
          <div className="pt-15 pb-15 max-w-[1000px] mx-auto">
            <p className="text-[22px] leading-[48px] max-md:text-[16px] max-md:leading-[32px] text-gray-300">
              {section.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Solution;
