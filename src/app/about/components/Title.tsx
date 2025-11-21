import Image from 'next/image';
import about from '../../../data/about.json';

const Title = () => {
  const { title, value1, value2 } = about.introducing;
  const { part1, part2, part3, part4 } = title;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/home-top-image.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="grid relative grid-flow-row pt-56 px-23.5 max-sm:px-10 pb-30 z-10 max-w-[1440] mx-auto">
        <p className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal">
          <span className="text-true-red">{part1} </span>
          {part2} <br />
          <span className="text-true-red">{part3}</span>
          <br /> {part4}
        </p>

        <p className="text-[22px]/[150%] font-light mt-7.5 ">
          {value1} <br />
          {value2}
        </p>
      </div>
    </section>
  );
};

export default Title;
