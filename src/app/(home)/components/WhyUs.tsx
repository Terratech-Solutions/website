import Image from "next/image";

const WhyUs = () => {
  const aboutUsData = [
    {
      title: "No Excavation, Minimal Downtime",
      description:
        "Injection occurs through small ports from the surface. Most assets remain accessible, enablling faster return-to-service.",
      iconSrc: "/home/why-us/advantages-1.png",
      iconWidth: 80,
      iconHeight: 100,
    },
    {
      title: "Seal Infiltration & Stabilize Solls",
      description:
        "Expanding polymer forms a barrier around detects and densifies adjacent solls to reduce undermining and washouts.",
      iconSrc: "/home/why-us/advantages-2.png",
      iconWidth: 115,
      iconHeight: 100,
    },
    {
      title: "Precise & Scalable",
      description:
        "Metered delivery targets joints, voids, and seams with control-from manholes and culverts to long pipe runs.",
      iconSrc: "/home/why-us/advantages-3.png",
      iconWidth: 115,
      iconHeight: 100,
    },
    {
      title: "Long-Lasting & Cost-Conscious",
      description:
        "Durable, lightweight materials reduce load on compromised solls and help strech maintenance budgets.",
      iconSrc: "/home/why-us/advantages-4.png",
      iconWidth: 115,
      iconHeight: 100,
    },
  ];

  return (
    <section className="relative pt-39 pb-20 px-23.5 max-sm:px-10 max-w-[1440] mx-auto">
      <p className="text-[17px] tracking-[0.5px]">Why Terratech</p>
      <p className="text-[60px] tracking-[-1.5px] max-sm:text-[35px] font-inter  mt-2">
        Key Advantages of Polymer Injection
      </p>
      <p className="mt-4 text-[30px] max-sm:text-[18px] font-inter tracking-[-0.8px]">
        Engineered solutions that seal infiltration, stabilize soils, and extend
        the service <br />
        life of stormwater and structural assets—without excavation.
      </p>

      <div className="grid mt-12 items-stretch xl:grid-cols-4 xl:grid-rows-1 md:grid-cols-2 md:grid-rows-2 max-md:grid-cols-1 max-md:grid-rows-4 gap-5">
        {aboutUsData.map((item) => {
          return (
            <div
              key={item.title}
              className="flex flex-col bg-graphite p-8 rounded-xl font-sans h-full justify-between"
            >
              <div className="flex flex-col flex-grow">
                <div
                  className={`mb-6 relative flex self-center`}
                >
                  <Image src={item.iconSrc} alt={item.title} width={item.iconWidth} height={item.iconHeight} />
                </div>
                <p className="text-[32px]/[38px] max-sm:text-[24px]/[30px] font-medium min-h-[114px]">
                  {item.title}
                </p>
                <p className="mt-5 text-[24px]/[33px] max-sm:text-[18px]/[24px] tracking-[0.2px]">
                  {item.description}
                </p>
              </div>

              <p className="text-[25px] max-sm:text-[18px] mt-6">Learn More</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyUs;
