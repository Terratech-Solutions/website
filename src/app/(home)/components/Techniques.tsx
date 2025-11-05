import Image from "next/image";
import Link from "next/link";

type Technique = {
  title: string;
  description: string;
  iconSrc: string;
  href: string;
};

const techniquesData: Technique[] = [
  {
    title: "Concrete Lifting \n and Stabilization",
    description: "Lift and level settled slabs with minimal disruption.",
    iconSrc: "/home/techniques/lifting.svg",
    href: "#",
  },
  {
    title: "Sinkhole \n Remediation",
    description: "Fill voids quickly to stabilize collapsing ground.",
    iconSrc: "/home/techniques/sinkhole.svg",
    href: "#",
  },
  {
    title: "Roadway \n Repair",
    description: "Restore undermined pavement.",
    iconSrc: "/home/techniques/roadway.svg",
    href: "#",
  },
  {
    title: "Structural \n Stabilization",
    description: "Inject polymers beneath foundations to improve strength.",
    iconSrc: "/home/techniques/stabilization.svg",
    href: "#",
  },
  {
    title: "Stormwater \n Infrastructure",
    description: "Seal and reinforce around drainage assets.",
    iconSrc: "/home/techniques/stormwater.svg",
    href: "#",
  },
  {
    title: "3D Scanning and \n Detection",
    description: "Advanced scanning locates voids for precise repairs.",
    iconSrc: "/home/techniques/scanning.svg",
    href: "#",
  },
];

const TechniqueItem = ({ title, description, iconSrc, href }: Technique) => {
  return (
    <div className="grid grid-flow-row-dense pt-24 pr-17 max-sm:pr-0 border-b border-solid border-concrete pb-14">
      <div className="mb-8 flex justify-between">
        <p className="flex items-center justify-center text-[28px]/[150%] font-normal whitespace-pre-line">
          {title}
        </p>
        <Image src={iconSrc} alt="lifting" width={79} height={79} />
      </div>

      <p className="mb-6 text-[17px]/[100%] font-light">{description}</p>

      <Link
        href={href}
        className="text-[11px]/[150%] font-light underline underline-offset-4 decoration-true-red"
        aria-label={`${title.replace(/\n/g, " ")} - read more`}
      >
        Read More
      </Link>
    </div>
  );
};

const Techniques = () => {

  return (
    <section className="bg-terra-black relative">
      <div className="pb-26 px-23.5 max-sm:px-10 pt-17 max-w-[1440] mx-auto">
        <p className="text-[44px]/[52px] font-normal">
          <span className="text-true-red">Next-Gen</span> <br />
          Processes & <br />
          Techniques
        </p>

        <div className="flex flex-col">
            <div
              className="grid grid-cols-2 max-md:grid-cols-1"
            >
              {techniquesData.map((item, i) => (
                <TechniqueItem key={i} {...item} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Techniques;
