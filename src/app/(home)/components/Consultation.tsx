import ConsultationButtons from '@/components/ui/consultation-buttons/ConsultationButtons';
import page from '@/data/home.json';

const Consultation = () => {
  return (
    <section className="relative py-15 md:px-23.5 px-10 max-w-[1440] mx-auto font-sans">
      <div className="text-[30px]/[150%] lg:text-[44px] font-semibold">
        {page.consultation.title}
      </div>

      <div>
        <ConsultationButtons />
      </div>
    </section>
  );
};

export default Consultation;
