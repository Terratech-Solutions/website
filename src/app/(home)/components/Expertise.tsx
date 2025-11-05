import Image from "next/image";

const Expertise = () => {
  return (
    <section className="relative pt-10 px-23.5 max-sm:px-10 max-w-[1440] mx-auto">
      <h2 className="text-[44px] max-sm:text-[35px]">
        Backed by engineering expertise.
      </h2>
      <p className="mt-2.5 font-light">
        Over 20 years of combined engineering and field <br />
        experience in soil stabilization and polymer injection across multiple
        regions.
      </p>
      <div className="relative w-full h-[445px] max-xl:h-[350px] max-lg:h-[300px] max-md:h-[200px] max-sm:h-[150px] mt-11">
        <Image
          src="/home/expertise/road.png"
          alt="Road preview"
          fill
          priority
        />
      </div>
    </section>
  );
};

export default Expertise;
