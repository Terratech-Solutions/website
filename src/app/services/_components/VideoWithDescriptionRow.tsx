import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';

type VideoWithDescriptionRowProps = {
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

const VideoWithDescriptionRow = ({ section, image }: VideoWithDescriptionRowProps) => {
  const highlights = Array.isArray(section.title.highlight)
    ? section.title.highlight
    : [section.title.highlight];

  const highlightWords = (line: string) => {
    const parts = line.split(/(\s+)/);

    return parts.map((part, index) => {
      const shouldHighlight = highlights.find((highlight) => part.includes(highlight));

      if (shouldHighlight && part.trim()) {
        return (
          <span key={index} className={section.title.highlightColor}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="px-4 md:px-13.5 max-sm:pt-10 pt-33">
      <div className="flex max-lg:flex-col max-w-[1440px] mx-auto max-sm:px-4 px-23.5 pt-7 pb-7">
        <div className="flex flex-col flex-auto justify-between items-stretch">
          <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
          <div className="flex max-md:flex-col justify-between w-full pb-40 max-lg:pb-15">
            <div className="flex flex-col pt-10 max-md:pb-10">
              <div className="text-[60px]/[80px] max-xl:text-[40px]/[55px]">
                {section.title.lines.map((line, i) => (
                  <span key={i}>
                    {highlightWords(line)}
                    {i !== section.title.lines.length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="text-[16px] md:text-[18px] max-w-[480px] pt-15">
                {section.description}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:pl-10 text-[22px] justify-around max-lg:pt-10 max-lg:gap-4">
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
      </div>
    </section>
  );
};

export default VideoWithDescriptionRow;
