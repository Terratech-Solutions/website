import page from '@/data/about.json';
import Image from 'next/image';
import Link from 'next/link';

const Title = () => {
  const { title, value1, value2, cta } = page.introducing;
  const { part1, part2, part3, part4 } = title;
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/home-top-image.png"
          alt="Background"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="grid relative grid-flow-row pt-56 md:px-23.5 px-10 pb-30 z-10 max-w-[1440] mx-auto">
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
        <div className="mt-10 flex gap-4 max-sm:flex-col">
          <Link
            href={cta.freeQuote.href}
            className="bg-true-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg max-sm:w-full"
          >
            <span className="pr-2">{cta.freeQuote.content}</span>&rarr;
          </Link>
          <Link
            href={cta.learnProcess.href}
            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 max-sm:px-4 max-sm:py-3 rounded-lg font-semibold text-lg transition-all flex items-center justify-center space-x-2 max-sm:w-full w-auto"
          >
            {cta.learnProcess.content}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Title;
