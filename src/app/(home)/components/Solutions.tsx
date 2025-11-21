import Image from "next/image";
import home from "../home.json";

const Solutions = () => {
  const { intro, whyChoose } = home.solutions;

  return (
      <section className="pt-33.5 font-sans px-23.5 max-sm:px-10 max-w-[1440] mx-auto">
        <div className="grid grid-cols-40 max-xl:grid-cols-1 border-solid border-y-3 border-terra-dash">
          <div className="col-span-22 pt-24 max-xl:pb-5">
            <h2 className="text-[50px]/[60px] max-sm:text-[35px]/[45px] tracking-[1px] font-semibold whitespace-pre-line">
              {intro.title}
            </h2>
            <p className="mt-9 text-[23px]/[37px] max-sm:text-[18px]/[25px] font-semibold tracking-[0px] whitespace-pre-line">
              {intro.text}
            </p>
          </div>
          <div className="flex col-span-18 relative w-full h-[200px] md:h-[445px]">
            <Image
                src={intro.image.src}
                alt={intro.image.alt}
                fill
                className="object-cover"
            />
          </div>
        </div>

        <div className="border-solid border-b-3 border-terra-dash">
          <p className="pt-15 text-[50px] max-sm:text-[35px] font-semibold tracking-[0.9px]">
            {whyChoose.title}
          </p>
          <div className="flex max-xl:flex-col max-xl:items-baseline max-xl:gap-3 pt-10 pb-18 text-[27px] max-sm:text-[18px] justify-between">
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
