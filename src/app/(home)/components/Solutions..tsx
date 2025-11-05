import Image from "next/image";

const Solutions = () => {
  return (
    <section className="pt-33.5 font-sans px-23.5 max-sm:px-10 max-w-[1440] mx-auto">
      <div className="grid grid-cols-40 max-xl:grid-cols-1 border-solid border-y-3 border-terra-dash">
        <div className="col-span-22 pt-24 max-xl:pb-5">
          <h2 className="text-[50px]/[60px] max-sm:text-[35px]/[45px] tracking-[1px] font-semibold">
            Expert Solutions for <br />
            Challenging Infrastructure
          </h2>
          <p className="mt-9 text-[23px]/[37px] max-sm:text-[18px]/[25px] font-semibold tracking-[0px]">
            With decades of contained construction experience, <br />
            our traditions provide and long testing solutions <br />
            for infrastructure, issues
          </p>
        </div>
        <div className="flex col-span-18 relative w-full h-[200px] md:h-[445px]">
          <Image
            src="/home/solutions/expert.png"
            alt="Expert solutions for challenging infrastructure"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="border-solid border-b-3 border-terra-dash">
        <p className="pt-15 text-[50px] max-sm:text-[35px] font-semibold tracking-[0.9px]">Why Choose Terratech?</p>
        <div className="flex max-xl:flex-col max-xl:items-baseline max-xl:gap-3 pt-10 pb-18 text-[27px] max-sm:text-[18px] justify-between">
          <div className="flex justify-center items-center">
            <Image
              src="/home/solutions/expiriened.svg"
              alt="Experienced professionals"
              width={46}
              height={46}
            />
            <p className="ml-4">Experienced professionals</p>
          </div>
          <div className="flex justify-center items-center ">
            <Image
              src="/home/solutions/solutions.svg"
              alt="Comprehensive solutions"
              width={46}
              height={46}
            />
            <p className="ml-4">Comprehensive solutions</p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/home/solutions/approach.svg"
              alt="Client-focused approach"
              width={46}
              height={46}
            />
            <p className="ml-4">Client-focused approach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
