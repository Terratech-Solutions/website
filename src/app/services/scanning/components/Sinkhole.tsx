import Image from 'next/image';
import { sinkhole } from '../../../../data/services/scanning.json';

const Sinkhole = () => {
  const { section, stages } = sinkhole;

  return (
    <div className="px-4 md:px-13.5 pt-13 pb-13">
      <div className="max-w-[1440]  mx-auto bg-foreground max-sm:px-4 px-23.5 pt-7 pb-7">
        <div>{section.eyebrow}</div>

        <div className="flex flex-col pt-10">
          <div className="text-[60px]/[80px] max-md:text-[40px]/[55px]">
            <span className="text-lemon-green">{section.title.highlight}</span> <br />
            {section.title.rest}
          </div>

          <div className="flex justify-around items-center w-full pt-20 max-lg:flex-col">
            {stages.map((stage) => (
              <div key={stage.label} className="flex flex-col items-center">
                <div className="flex relative">
                  <Image
                    src={stage.image.src}
                    alt={stage.image.alt}
                    width={stage.image.width}
                    height={stage.image.height}
                  />
                </div>
                <div className="pt-2">{stage.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sinkhole;
