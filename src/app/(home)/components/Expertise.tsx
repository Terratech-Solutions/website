import page from '@/data/home.json';
import Image from 'next/image';

const Expertise = () => {
  return (
    <section className="relative pt-10 md:px-23.5 px-10 max-w-[1440] mx-auto">
      <div className="text-[30px]/[150%] lg:text-[44px]">{page.expertise.title}</div>
      <p className="mt-2.5 font-light">{page.expertise.description}</p>
      <div className="relative w-full h-[445px] max-xl:h-[350px] max-lg:h-[300px] max-md:h-[200px] max-sm:h-[150px] mt-11">
        <Image src={page.expertise.image.src} alt={page.expertise.image.alt} fill priority />
      </div>
    </section>
  );
};

export default Expertise;
