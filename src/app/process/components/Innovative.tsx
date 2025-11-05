import Image from "next/image";
import Accordion from "@/app/process/components/ui/Accordion";

const tabs = [
  {
    id: 1,
    title: "The Problem",
    content:
      "Across the country, aging infrastructure faces hidden threats: leaking stormwater systems, unstable soils, settling concrete, and sinkholes that appear without warning. Traditional repairs mean excavation and downtime, but Terratech delivers engineered polymer injection solutions that restore strength faster, cleaner, and with less disruption. Our client focused approach brings custom solutions for every unique job site.",
    image: "/process/innovative/placeholder.svg",
  },
  {
    id: 2,
    title: "Deploying Advanced \nDetection",
    content:
      "AI-driven materials discovery dramatically reduces R&D cycles, finding optimal compositions in weeks instead of years.",
    image: "/process/innovative/placeholder.svg",
  },
  {
    id: 3,
    title: "Detailed Verification & \nAssessment",
    content:
      "Automated scale-up pipelines ensure seamless transition from lab to production for faster deployment of new materials.",
    image: "/process/innovative/placeholder.svg",
  },
];

const Innovative = () => {
  return (
    <section className="flex flex-col px-23.5 max-md:px-2.5 pb-30 mx-auto max-w-[1440]">
      <div className="pt-24">☰ Innovative Solutions</div>
      <div className="flex justify-between pt-10 max-md:flex-col">
        <div className="text-[64px]/[60px] max-sm:text-[50px]/[60px]">
          A <span className="text-lemon-green">New Way</span> to <br /> assess
          and <br /> remediate.
        </div>
        <div className="relative font-inter text-[16px] max-w-[300px] pt-7 mr-30">
          <div className="absolute -top-8 -left-10 max-md:hidden">
            <Image
              src="/process/innovative/cross.svg"
              alt="cross image"
              width={35}
              height={35}
            />
          </div>
          We rapidly assess structural issues using state of the art early
          detection methods. We deploy advanced 3D scanning, provide substantive
          analysis, and conduct in depth reporting.
        </div>
      </div>
      <div className="pt-20">
        <Accordion tabs={tabs} />
      </div>
    </section>
  );
};

export default Innovative;
