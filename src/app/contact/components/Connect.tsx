const Connect = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex w-full h-[710px] bg-[url('/home/home-top-image.png')] bg-cover bg-center bg-no-repeat absolute z-1"></div>
      <div className="grid relative grid-flow-row pt-71 px-23.5 max-sm:px-10 pb-15 font-poppins z-10 max-w-[1440] mx-auto">
        <p className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal">
          Get in <span className="text-true-red">Touch</span>
        </p>

        <p className="text-[22px]/[150%] font-light mt-7.5 ">
          Connect with our engineers to discuss <br /> inspections, quotes, or
          project planning today.
        </p>
      </div>
    </section>
  );
};

export default Connect;
