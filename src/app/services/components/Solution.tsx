import ConsultationButtons from "@/components/ui/consultation-buttons/ConsultationButtons";
import Image from "next/image";

const Solution = () => {
  return (
    <div className="max-w-[1440] mx-auto px-4 md:px-23.5 pt-20 pb-20">
      <div>☰ Informed Methodology</div>
      <div className="flex flex-col pt-10 ">
        <div className="text-[60px]/[80px] max-md:text-[40px]/[50px] max-sm:text-[24px]/[30px]">
          Our Solution <br />
          <span className="text-true-red">Without</span>
          Excavation
        </div>
        <div className="flex justify-between pt-20 max-md:flex-col max-md:items-center">
          <div className="flex relative">
            <Image
              src="services/slider-1.svg"
              alt="slider 1"
              width={330}
              height={435}
              priority
            />
          </div>
          <div className="flex relative">
            <Image
              src="services/slider-2.svg"
              alt="slider 1"
              width={330}
              height={435}
              priority
            />
          </div>
          <div className="flex relative">
            <Image
              src="services/slider-3.svg"
              alt="slider 3"
              width={330}
              height={435}
              priority
            />
          </div>
        </div>
        <div className="flex justify-end pt-10">
          <div className="text-[24px]/[58px]">
            The use of eco-friendly poly-foam technology stabilizes any <br />
            sinkhole faster and cheaper than traditional remediation.
          </div>
        </div>
        <div className="pt-40">
          <ConsultationButtons />
        </div>
      </div>
    </div>
  );
};

export default Solution;
