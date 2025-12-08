import { title } from '@/data/services/sinkholes.json';
import Image from 'next/image';
import Link from 'next/link';

const Title = () => {
  const { background, text, image, cta } = title;

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
          <div className="mt-10 flex gap-4 max-sm:flex-col max-sm:items-center">
            <Link
              href={cta.freeQuote.href}
              className="bg-true-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg max-sm:w-full"
            >
              <span className="pr-2">{cta.freeQuote.content}</span>&rarr;
            </Link>
          </div>
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
