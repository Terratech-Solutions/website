import page from '@/data/home.json';
import Image from 'next/image';

const Solutions = () => {
  const { intro, whyChoose } = page.solutions;

  return (
    <section className="md:pt-33.5 font-sans md:px-23.5 px-10 max-w-[1440] mx-auto">
      <div className="grid grid-cols-40 max-xl:grid-cols-1 border-solid border-y-3 border-terra-dash">
        <div className="col-span-22 pt-24 max-xl:pb-5">
          <div className="text-[30px]/[150%] lg:text-[44px] font-semibold whitespace-pre-line">
            {intro.title}
          </div>
          <p className="mt-9 text-[18px] lg:text-[24px]  whitespace-pre-line">{intro.text}</p>
        </div>
        <div className="flex col-span-18 relative w-full h-[200px] md:h-[445px]">
          <Image src={intro.image.src} alt={intro.image.alt} fill className="object-cover" />
        </div>
      </div>

      <div className="border-solid border-b-3 border-terra-dash">
        <p className="pt-15 text-[30px]/[150%] lg:text-[44px] font-semibold">{whyChoose.title}</p>
        <div className="flex max-xl:flex-col max-xl:items-baseline max-xl:gap-3 pt-10 pb-18 text-[18px] md:text-[27px] justify-between">
          {whyChoose.items.map((item) => (
            <div key={item.label} className="flex justify-center items-center">
              <Image src={item.icon} alt={item.alt} width={46} height={46} />
              <p className="ml-4">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
