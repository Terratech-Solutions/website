import { injection } from '@/data/process.json';
import Link from 'next/link';

const Injection = () => {
  const { background, title, subtitle, cta } = injection;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${background.from}, ${background.to})`,
      }}
    >
      <div className="grid relative grid-flow-row pt-56 max-sm:px-10 pb-30  z-10 max-w-[1440] px-23.5 mx-auto">
        <p
          className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal"
          dangerouslySetInnerHTML={{ __html: title.lines.join('<br />') }}
        />

        <p className="text-[22px]/[150%] font-light mt-7.5 whitespace-pre-line">{subtitle}</p>
        <div className="mt-10 flex gap-4 max-sm:flex-col max-sm:items-center">
          <Link
            href={cta.freeQuote.href}
            className="bg-true-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg max-sm:w-full"
          >
            <span className="pr-2">{cta.freeQuote.content}</span>&rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Injection;
