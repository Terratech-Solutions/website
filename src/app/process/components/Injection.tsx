import { injection } from '@/data/process.json';

const Injection = () => {
  const { background, title, subtitle } = injection;

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
      </div>
    </section>
  );
};

export default Injection;
