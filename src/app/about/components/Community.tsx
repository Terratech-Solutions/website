import page from '@/data/about.json';
import Image from 'next/image';

const Community = () => {
  const { sectionLabel, title, value, imageAlt, imageSrc } = page.community;

  return (
    <section className="flex flex-col pt-39 max-md:pt-12 pb-20 px-23.5 max-sm:px-10 max-w-[1440px] mx-auto">
      <p className="text-[24px]/[52px] max-sm:text-[18px]/[52px] font-extrabold text-[#7A93A6]">
        {sectionLabel}
      </p>

      <div className="mt-[22px] bg-[#191D20] rounded-[10px] max-sm:p-3 p-12.5">
        <p className="text-[38px] max-lg:text-[30px]">
          <span className="text-lemon-green">{title.left}</span> {title.amp}{' '}
          <span className="text-true-red">{title.right}</span>
        </p>

        <p className="text-[20px] max-lg:text-[16px] mt-8">{value}</p>

        <div className="relative flex w-full h-[440px] mt-8 max-lg:h-[350px] max-sm:h-[100px]">
          <Image src={imageSrc} alt={imageAlt} fill />
        </div>
      </div>
    </section>
  );
};

export default Community;
