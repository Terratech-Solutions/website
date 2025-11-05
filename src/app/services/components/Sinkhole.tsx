import Image from "next/image";

const Sinkhole = () => {
  return (
    <div className="max-w-[1440] mx-auto px-4 md:px-23.5 pt-20 pb-20">
      <div>☰ Informed Methodology</div>
      <div className="flex flex-col pt-10">
        <div className="text-[60px]/[80px]">
          <span className="text-lemon-green">Sinkhole</span> <br />
          Formation Process
        </div>
        <div className="flex justify-around items-center w-full pt-20 max-md:flex-col">
          <div className="flex flex-col items-center">
            <div className="flex relative">
              <Image
                src="services/stage-1.svg"
                alt="Stage 1"
                width={320}
                height={460}
              />
            </div>
            <div className="pt-2">Stage 1</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex relative">
              <Image
                src="services/stage-1.svg"
                alt="Stage 1"
                width={320}
                height={460}
              />
            </div>
            <div className="pt-2">Stage 2</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex relative">
              <Image
                src="services/stage-1.svg"
                alt="Stage 1"
                width={320}
                height={460}
              />
            </div>
            <div className="pt-2">Stage 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sinkhole;
