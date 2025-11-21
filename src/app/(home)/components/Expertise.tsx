import Image from 'next/image';
import home from '../home.json';

const Expertise = () => {
  return (
    <section className="relative pt-10 px-23.5 max-sm:px-10 max-w-[1440] mx-auto">
      <h2 className="text-[44px] max-sm:text-[35px]">{home.expertise.title}</h2>
      <p className="mt-2.5 font-light">{home.expertise.description}</p>
      <div className="relative w-full h-[445px] max-xl:h-[350px] max-lg:h-[300px] max-md:h-[200px] max-sm:h-[150px] mt-11">
        <Image src="/home/expertise/road.png" alt="Road preview" fill priority />
      </div>
    </section>
  );
};

export default Expertise;
