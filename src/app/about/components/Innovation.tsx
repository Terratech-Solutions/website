import page from '@/data/about.json';
import Image from 'next/image';

const Innovation = () => {
  const { title, paragraphs, imageAlt } = page.innovation;

  return (
    <section className="flex flex-col pt-39 max-md:pt-12 pb-20 max-lg:pb-0 px-23.5 max-sm:px-10 max-w-[1440px] mx-auto">
      <p className="text-[44px]/[52px] max-sm:text-[35px]">
        {title.part1} <span className="text-true-red">{title.highlight}</span>
      </p>

      {paragraphs.map((text, i) => (
        <p key={i} className="text-[20px] mt-8 max-sm:text-[16px]">
          {text}
        </p>
      ))}

      <div className="relative flex w-full h-[640px] max-sm:h-[350px] max-xl:h-[550px] max-lg:h-[450px] mt-4">
        <Image src="/about/innovation.jpg" alt={imageAlt} fill />
      </div>
    </section>
  );
};

export default Innovation;
