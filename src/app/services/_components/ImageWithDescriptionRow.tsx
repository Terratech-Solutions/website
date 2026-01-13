import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import Image from 'next/image';

type ImageWithDescriptionRowProps = {
  section: {
    sectionLabel: string;
    title: {
      lines: string[];
      highlight: string[] | string;
      highlightColor: string;
    };
    description: string;
  };
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const ImageWithDescriptionRow = ({ section, image }: ImageWithDescriptionRowProps) => {
  return (
    <section className="px-4 md:px-13.5 max-sm:pt-10 pt-33">
      <div className="flex max-lg:flex-col max-w-[1440px] mx-auto max-sm:px-4 px-23.5 pt-7 pb-7">
        <div className="flex flex-col flex-auto justify-between items-stretch">
          <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
          <div className="flex max-md:flex-col justify-between w-full pb-40 max-lg:pb-15">
            <div className="flex flex-col pt-10 max-md:pb-10">
              <div className="text-[60px]/[80px] max-xl:text-[40px]/[55px]">
                <HighlightedText
                  lines={section.title.lines}
                  highlight={section.title.highlight}
                  highlightColor={section.title.highlightColor}
                />
              </div>
              <div className="text-[16px] md:text-[18px] max-w-[480px] pt-15">
                {section.description}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-10 text-[22px] justify-around max-lg:pt-10 max-lg:gap-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            style={{ display: 'block', height: `${image.height}px` }}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageWithDescriptionRow;
