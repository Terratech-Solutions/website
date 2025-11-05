import ConsultationButtons from "@/components/ui/consultation-buttons/ConsultationButtons";

const Consultation = () => {
  return (
    <section className="relative py-15 px-23.5 max-sm:px-10 max-w-[1440] mx-auto font-sans">
      <h2 className="text-[50px] max-sm:text-[35px] font-semibold tracking-[1.4px]">
        Get in touch for a consultation
      </h2>

      <div>
        <ConsultationButtons />
      </div>
    </section>
  );
};

export default Consultation;
