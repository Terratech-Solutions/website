const Warnings = () => {
  return (
    <div className="max-w-[1440] mx-auto px-4 md:px-23.5 pt-40">
      <div>☰ Innovative Solutions</div>
      <div className="flex max-md:flex-col justify-between w-full pb-40">
        <div className="flex flex-col pt-10 max-md:pb-10">
          <div className="text-[60px]/[80px]">
            Early <span className="text-true-red">Warning Signs</span> <br />
            of a Sinkhole
          </div>
          <div className="text-[14px] max-w-[480px] pt-15">
            Along with on site assessment and detailed visual observation of the
            area, Terratech’s 3D Scanning techniques and analysis can show
            advanced warning signs for informed remediation.
          </div>
        </div>
        <div className="flex flex-col pl-10 text-[22px] justify-around md:border-l-2 border-solid border-zinc-200 max-md:border-t-2 max-md:pt-10 max-md:gap-4">
          <div className="flex">
            <div className="flex-none rounded-full h-8 w-8 border-1 border-solid border-zinc-200"></div>
            <div className="pl-4" >Rapidly Appearing Holes</div>
          </div>
          <div className="flex">
            <div className="flex-none rounded-full h-8 w-8 border-1 border-solid border-zinc-200"></div>
            <div className="pl-4">Buckling Concrete or Asphalt</div>
          </div>
          <div className="flex">
            <div className="flex-none rounded-full h-8 w-8 border-1 border-solid border-zinc-200"></div>
            <div className="pl-4">Standing Surface Water</div>
          </div>
          <div className="flex">
            <div className="flex-none rounded-full h-8 w-8 border-1 border-solid border-zinc-200"></div>
            <div className="pl-4">Cracks Forming in the Ground</div>
          </div>
          <div className="flex">
            <div className="flex-none rounded-full h-8 w-8 border-1 border-solid border-zinc-200"></div>
            <div className="pl-4">Ground Depressions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warnings;
