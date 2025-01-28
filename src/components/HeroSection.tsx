import heroImg from "../assets/hero.jpeg"

const HeroSection = () => {
  return (
    <section className="mt-10 md:px-6 md:py-20 bg-white text-white md:h-[466px]">
      
      <div className="flex flex-col-reverse md:flex-row items-center justify-between md:max-w-[1024px] md:h-[308px] md:gap-6 mx-auto">
      {/* Left Text Content */}
      <div className="w-full py-10 px-6 md:py-6 md:px-0 md:w-[600px] text-left flex flex-col gap-4">
        <h1 className="text-[40px] leading-[45px] md:text-[56px] font-semibold md:leading-[63px] text-left text-[#1C1812]">
          Central Texas <br/> Fly Fishing
        </h1>
        <p className="text-[20px] leading-[30px] font-normal text-[#65625E]">
          At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
        </p>
        <button className="px-3 leading-[24px] text-[16px] py-2 w-[111px] h-[40px] bg-[#514432] text-white rounded-sm cursor-pointer">
          Get started
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-[400px] flex justify-center">
        <img
          src={heroImg} 
          alt="Fishing Scene"
          className="w-full object-cover max-h-[500px] md:max-h-[300px]"
        />
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
