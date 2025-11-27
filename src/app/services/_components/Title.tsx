import { title } from '@/data/services/sinkholes.json';
import Image from 'next/image';

const Title = () => {
  const { background, text, image } = title;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${background.from}, ${background.to})`,
      }}
    >
      <div className="flex pt-56 max-lg:flex-col pb-30 z-10 max-w-[1440] mx-auto px-23.5 max-md:px-4 justify-between">
        <div className="grid relative grid-flow-row">
          <p className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal">
            {text.title.lines.map((line, i) => (
              <span key={i}>
                {line.includes(text.title.highlight) ? (
                  <span className={text.title.highlightColor}>{text.title.highlight}</span>
                ) : (
                  <>
                    {line}
                    <br />
                  </>
                )}
              </span>
            ))}
          </p>

          <p className="text-[22px]/[150%] font-light mt-7.5 whitespace-pre-line">
            {text.subtitle}
          </p>
        </div>

        <div className="flex relative">
          <Image
            src={image.src}
            priority
            fetchPriority="high"
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
      </div>
    </section>
  );
};

export default Title;
