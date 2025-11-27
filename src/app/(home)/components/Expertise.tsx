import page from '@/data/home.json';
import Image from 'next/image';

const Expertise = () => {
  return (
    <section className="relative pt-10 px-23.5 max-sm:px-10 max-w-[1440] mx-auto">
      <h2 className="text-[44px] max-sm:text-[35px]">{page.expertise.title}</h2>
      <p className="mt-2.5 font-light">{page.expertise.description}</p>
      <div className="relative w-full h-[445px] max-xl:h-[350px] max-lg:h-[300px] max-md:h-[200px] max-sm:h-[150px] mt-11">
        <Image src="/home/expertise/road.jpg" alt="Road preview" fill priority />
      </div>
    </section>
  );
};

export default Expertise;
