import Image from "next/image";

const Title = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#131313] to-[#1D1D1D]">
      <div className="flex pt-56 max-lg:flex-col pb-30 font-poppins z-10 max-w-[1440] mx-auto px-23.5 max-md:px-4 justify-between">
        <div className="grid relative grid-flow-row">
          <p className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal">
            Sinkhole & <br />
            Void Filling <br />
            <span className="text-true-red">Experts</span>.
          </p>

          <p className="text-[22px]/[150%] font-light mt-7.5 ">
            We provide innovative solutions for <br />
            concrete stabilization and infrastructure repair.
          </p>
        </div>
        <div className="flex relative">
          <Image
            src="services/scan-1.svg"
            alt="Scan 1"
            width={740}
            height={415}
          />
        </div>
      </div>
    </section>
  );
};

export default Title;
