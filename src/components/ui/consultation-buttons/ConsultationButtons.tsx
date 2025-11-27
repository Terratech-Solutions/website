import Link from 'next/link';
import buttonsData from './consultationButtons.json';

const ConsultationButtons = () => {
  return (
    <div className="grid gap-2 auto-cols-max max-md:grid-cols-1 max-md:grid-rows-2 grid-flow-col mt-3">
      {buttonsData.buttons.map((btn) => (
        <Link
          key={btn.href}
          href={btn.href}
          aria-label={btn.ariaLabel}
          className="group outline-none relative"
        >
          <div
            className={
              btn.style === 'light'
                ? 'h-full w-full bg-lemon-green group-hover:bg-zinc-200'
                : 'h-full w-full bg-gradient-to-r from-dark-green to-terra-black group-hover:from-white'
            }
          >
            <div className="text-sm font-medium pt-[18px] pl-[15px] group-hover:text-terra-black">
              {btn.smallText}
            </div>
            <div
              className={`mt-1 text-[23px] font-semibold pb-[20px] pl-[15px] ${
                btn.style === 'light' ? 'pr-22' : 'pr-14'
              } group-hover:text-terra-black`}
            >
              {btn.bigText}
              {btn.arrow && (
                <span
                  className="translate-x-0 transition-transform group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ConsultationButtons;
