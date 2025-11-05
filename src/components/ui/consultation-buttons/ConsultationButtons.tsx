import Link from "next/link";

const ConsultationButtons = () => {
  return (
    <div className="grid gap-2 auto-cols-max max-md:grid-cols-1 max-md:grid-rows-2 grid-flow-col mt-3">
      <Link
        href="/mission"
        aria-label="Read About Our Mission"
        className="group outline-none"
      >
        <div className="h-full w-full bg-lemon-green group-hover:bg-zinc-200">
          <div className="text-sm font-medium pt-[18px] pl-[15px] group-hover:text-terra-black">
            Learn More
          </div>
          <div className="mt-1 text-[23px] font-semibold pb-[20px] pl-[15px] pr-22 group-hover:text-terra-black">
            Read About Our Mission
          </div>
        </div>
      </Link>

      <Link
        href="/contact"
        aria-label="Inquire now"
        className="group relative outline-none"
      >
        <div className="h-full w-full bg-gradient-to-r from-dark-green to-terra-black group-hover:from-white">
          <div className="text-sm font-medium pt-[18px] pl-[15px] group-hover:text-terra-black">
            Get solutions
          </div>
          <div className="mt-1 text-[23px] font-semibold pb-[20px] pl-[15px] pr-14 group-hover:text-terra-black">
            Inquire now
            <span
              className="translate-x-0 transition-transform group-hover:translate-x-1"
              aria-hidden
            >
                →
              </span>
          </div>
        </div>
      </Link>
    </div>
  )
};

export default ConsultationButtons;
