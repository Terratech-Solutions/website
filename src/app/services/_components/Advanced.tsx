import { advanced } from '@/data/services/sinkholes.json';
import Image from 'next/image';

const Advanced = () => {
  const { section, points, image } = advanced;

  return (
    <div className="max-w-[1440] mx-auto px-4 md:px-23.5 pt-20 pb-20">
      <div>{section.eyebrow}</div>

      <div className="flex flex-col pt-10">
        <div className="text-[60px]/[80px] max-md:text-[40px]/[60px] whitespace-pre-line">
          {section.title}
        </div>

        <div className="flex justify-between max-md:flex-col max-md:justify-center max-md:items-center">
          <div className="flex flex-col pt-10">
            {points.map((point) => (
              <div
                key={point}
                className="text-[36px]/[80px] w-[500px] max-xl:w-[400px] max-lg:w-[300px] max-lg:text-[26px]/[80px] border-b-2 border-zinc-200 pb-2"
              >
                {point}
              </div>
            ))}
          </div>

          <div className="flex relative">
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
