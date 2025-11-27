import Image from 'next/image';
import { connect } from '@/data/contact.json';

const Connect = () => {
  const { background, title, subtitle } = connect;

  return (
    <section className="relative overflow-hidden">
      {/*<div*/}
      {/*  className="flex w-full h-[710px] bg-cover bg-center bg-no-repeat absolute z-1"*/}
      {/*></div>*/}
      <div className="absolute inset-0 z-0">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="grid relative grid-flow-row pt-71 px-23.5 max-sm:px-10 pb-15 z-10 max-w-[1440] mx-auto">
        <p className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal">
          {title.text} <span className="text-true-red">{title.highlight}</span>
        </p>

        <p className="text-[22px]/[150%] font-light mt-7.5 whitespace-pre-line">{subtitle}</p>
      </div>
    </section>
  );
};

export default Connect;
