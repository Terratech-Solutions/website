import page from '@/data/about.json';
import Image from 'next/image';

const SetsUp = () => {
  const { eyebrow, title, cards } = page.whyTerratech;

  return (
    <section className="flex flex-col pt-25 max-md:pt-4 pb-20 px-23.5 max-sm:px-10 max-w-[1440] mx-auto">
      <p className="text-[25px]/[52px] font-extrabold mb-8 text-[#819baf]">{eyebrow}</p>
      <p className="text-[44px]/[52px] mb-8">{title}</p>

      <div className="flex justify-between max-lg:flex-col max-lg:items-center">
        {cards.map((card) => (
          <div
            key={card.heading}
            className="flex 2xl:w-[382px] xl:w-[350px] h-[516px] w-[280px] max-lg:w-[382px] max-lg:mb-4 bg-[#191D20] rounded-[10px]"
          >
            <div className="flex flex-col w-full h-full 2xl:p-16 xl:p-12 p-3 items-center rounded-[10px] max-lg:p-16">
              <p className="text-[30px]/[52px]">{card.heading}</p>
              <div className="relative w-[75px] h-[75px] mb-12.5 mt-8">
                <Image src={card.image.src} alt={card.image.alt} fill />
              </div>
              <div className="text-[18px] tracking-[0.5px]">{card.text}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SetsUp;
