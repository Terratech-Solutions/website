'use client';

import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { useMediaQuery } from 'usehooks-ts';

type ImageWithDescriptionProps = {
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

const VideoWithDescriptionCol = ({ section, image }: ImageWithDescriptionProps) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="px-4 md:px-13.5 pt-13">
      <div className="flex max-lg:flex-col max-w-[1440px] mx-auto bg-foreground max-sm:px-4 px-23.5 pt-7 pb-7">
        <div className="flex flex-col flex-auto justify-between items-stretch">
          <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
          <div className="flex max-md:flex-col justify-start w-full">
            <div className="flex flex-col pt-10 max-md:pb-10 w-full">
              <div className="text-[60px]/[80px] max-xl:text-[40px]/[55px]">
                <HighlightedText
                  lines={section.title.lines}
                  highlight={section.title.highlight}
                  highlightColor={section.title.highlightColor}
                />
              </div>
              <div className="flex justify-center w-full mt-10 mb-10">
                <video
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    display: 'block',
                    mixBlendMode: 'screen',
                  }}
                  className="max-w-full h-auto my-0"
                  aria-label={image.alt}
                />
              </div>
              <div className="text-[18px] md:text-[22px] max-w-full text-left whitespace-pre-line text-neutral-200">
                {section.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoWithDescriptionCol;
