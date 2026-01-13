import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import Image from 'next/image';

type Section = {
  sectionLabel: string;
  title: {
    lines: string[];
    highlight: string[] | string;
    highlightColor: string;
  };
  description: string;
};

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type BigImageWithDescriptionProps = {
  section: Section;
  image: ImageProps;
};

const BigImageWithDescription = ({ section, image }: BigImageWithDescriptionProps) => (
  <div className="px-4 md:px-13.5 pt-7 md:pt-13">
    <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto bg-foreground px-6 sm:px-10 md:px-23.5 pt-7 pb-7">
      <div className="flex flex-col flex-auto justify-between items-stretch w-full">
        <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
        <div className="flex flex-col w-full">
          <div className="flex flex-col pt-7 md:pt-10 w-full">
            <div className="text-[40px]/[55px] lg:text-[60px]/[80px]">
              <HighlightedText
                lines={section.title.lines}
                highlight={section.title.highlight}
                highlightColor={section.title.highlightColor}
              />
            </div>
            <div className="flex justify-center w-full pt-7 md:pt-10">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="w-full h-auto max-w-full"
                style={{
                  display: 'block',
                  maxWidth: `${image.width}px`,
                  maxHeight: `${image.height}px`,
                }}
              />
            </div>
            <div
              className="whitespace-pre-line text-[16px] md:text-[18px] max-w-full pt-7 md:pt-15"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BigImageWithDescription;
