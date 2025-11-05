import Image from "next/image";

const Advanced = () => {
  return (
    <div className="max-w-[1440] mx-auto px-4 md:px-23.5 pt-20 pb-20">
      <div>☰ Informed Methodology</div>
      <div className="flex flex-col pt-10 ">
        <div className="text-[60px]/[80px]">
          Advanced 3D <br />
          Ground Imaging
        </div>
        <div className="flex justify-between max-md:flex-col">
          <div className="flex flex-col pt-10">
            <div className="text-[36px]/[80px] border-b-2 border-zinc-200 pb-2">Early Detection</div>
            <div className="text-[36px]/[80px] border-b-2 border-zinc-200 pb-2">Precision & Safety</div>
            <div className="text-[36px]/[80px] border-b-2 border-zinc-200 pb-2">Minimal Disruption</div>
            <div className="text-[36px]/[80px] border-b-2 border-zinc-200 pb-2">Customized Solutions</div>
          </div>
          <div className="flex relative">
            <Image
              src="services/graphic-1.svg"
              alt="Graphic 1"
              width={860}
              height={483}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
