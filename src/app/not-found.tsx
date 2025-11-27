import { buildPageMetadata } from '@/app/metadata';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = buildPageMetadata({
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  path: '/404',
});

export default function NotFound() {
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
          <h1 className="text-[120px]/[130px] max-lg:text-[80px]/[90px] max-md:text-[60px]/[70px] max-sm:text-[48px]/[56px] font-bold mb-6">
            <span className="text-true-red">404</span>
          </h1>
          <h2 className="text-[48px]/[58px] max-lg:text-[36px]/[46px] max-md:text-[28px]/[38px] max-sm:text-[24px]/[34px] font-normal mb-8">
            Page Not Found
          </h2>
          <p className="text-[22px]/[150%] font-light text-white/90 mb-12 max-w-2xl mx-auto">
            Sorry, the page you are looking for doesn't exist or has been moved. Let's get you back
            on track.
          </p>
          <div className="flex gap-4 justify-center max-sm:flex-col max-sm:items-center">
            <Link
              href="/"
              className="bg-true-red hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-lg max-sm:text-sm transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg max-sm:w-full max-sm:max-w-[300px]"
            >
              <span className="pr-2">Go to Homepage</span>&rarr;
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-4 py-2 rounded-lg font-semibold text-lg max-sm:text-sm transition-all flex items-center justify-center space-x-2 max-sm:w-full max-sm:max-w-[200px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
