import HighlightedText from '@/components/HighlightedText';
import SectionAnchorLabel from '@/components/ui/SectionAnchorLabel';
import { repairSolutions } from '@/data/services/roadway.json';

const RepairSolutions = () => {
  const { section, image } = repairSolutions;

  return (
    <section className="max-sm:pt-10 pt-33">
      <div className="max-w-[1440px] mx-auto max-sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-7 pb-7">
          <div className="flex flex-col px-6 lg:px-23.5 md:mx-10 py-8 lg:py-13 justify-between bg-foreground">
            <SectionAnchorLabel>{section.sectionLabel}</SectionAnchorLabel>
            <div className="flex flex-col">
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

          <div className="flex items-center justify-center bg-transparent">
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
      </div>
    </section>
  );
};

export default RepairSolutions;
