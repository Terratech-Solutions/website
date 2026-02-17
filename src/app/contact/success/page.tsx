import Image from 'next/image';
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-200px)]">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/home/home-top-image.png"
          alt="Background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 max-w-[1440px] mx-auto px-10 md:px-23.5 pt-32 pb-30">
        <div className="text-center">
          <h1 className="text-[60px]/[70px] max-lg:text-[50px]/[60px] max-md:text-[40px]/[50px] max-sm:text-[36px]/[44px] font-bold mb-6 text-green-400">
            Thank You!
          </h1>
          <h2 className="text-[48px]/[58px] max-lg:text-[36px]/[46px] max-md:text-[28px]/[38px] max-sm:text-[24px]/[34px] font-normal mb-8">
            Your submission has been received.
          </h2>
          <p className="text-[22px]/[150%] font-light text-white/90 mb-12 max-w-2xl mx-auto">
            We appreciate you contacting us. One of our colleagues will get back to you shortly.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="bg-true-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span className="pr-2">Go to Homepage</span>&rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouPage;
