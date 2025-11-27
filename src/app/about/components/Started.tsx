import page from '@/data/about.json';
import Image from 'next/image';

const Started = () => {
  const { title, paragraphs, image } = page.started;

  return (
    <section className="flex flex-col pt-39 pb-20 px-23.5 max-sm:px-10 max-w-[1440px] mx-auto">
      <p className="text-[44px] max-sm:text-[35px] pb-[30px] pt-2.5">
        {title.part1} <span className="text-true-red">{title.highlight}</span>
      </p>

      <div className="flex justify-between max-lg:flex-col">
        <div className="flex flex-col justify-between text-[20px] w-[420px] pt-[20px] pb-[40px] max-lg:w-full max-xl:w-[300px] max-xl:text-[16px]">
          {paragraphs.map((text, idx) => (
            <p key={idx} className={idx > 0 ? 'mt-6' : ''}>
              {text}
            </p>
          ))}
        </div>

        <div className="mb-6 relative flex w-[620px] h-[430px] self-center max-lg:w-full max-sm:h-[300px]">
          <Image src={image.src} alt={image.alt} fill />
        </div>
      </div>
    </section>
  );
};

export default Started;
