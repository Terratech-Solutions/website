const Introducing = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="flex w-full h-[710px] bg-[url('/home/home-top-image.png')] bg-cover bg-center bg-no-repeat absolute z-1"></div>
      <div className="grid relative grid-flow-row pt-56 px-23.5 max-sm:px-10 pb-30 font-poppins z-10 max-w-[1440] mx-auto">
        <p className="text-[78px]/[90px] max-lg:text-[50px]/[70px] max-md:text-[40px]/[65px] max-sm:text-[34px]/[50px] font-normal">
          <span className="text-true-red">Elevating</span> <br />
          Infrastructure. <br />
          <span className="text-true-red">Restoring</span> Stability.
        </p>

        <p className="text-[22px]/[150%] font-light mt-7.5 ">
          Polymer injection solutions for <br />
          concrete stabilization and infrastructure repair.
        </p>
      </div>
    </section>
  );
};

export default Introducing;
