import { useState } from "react";
import option1 from "../assets/option1.jpeg";
import option2 from "../assets/option2.jpeg";
import option3 from "../assets/option3.jpeg";
import upArrow from "../assets/upArrow.svg";
import downArrow from "../assets/downArrow.svg";

const FeaturedOptions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: "Explore Fly Fishing",
      image: option1,
      heading: "Explore Fly Fishing",
      description:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    },
    {
      title: "Fly Fishing Experiences",
      image: option2,
      heading: "Fly Fishing Experiences",
      description:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    },
    {
      title: "Gear Up and Catch More",
      image: option3,
      heading: "Gear Up and Catch More",
      description:
        "In metus vulputate eu scelerisque felis imperdiet. Nunc scelerisque viverra mauris in aliquam sem. S",
    },
  ];

  return (
    <section className="px-6 md:py-20 py-10 bg-[#F1ECE1]">
      <div className="md:max-w-[1024px] mx-auto">
        {/* Section Title */}
        <h2 className="section-heading mb-6">Featured options</h2>

        {/* FeaturedOptions Items */}
        <div className="md:block hidden">
          {accordionItems.map((item, index) => (
            <div key={index}>
              {/* FeaturedOptions Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center py-2 text-left font-normal leading-[30px] text-[20px] cursor-pointer border-b border-[#969491]"
              >
                {item.title}
                <img src={openIndex == index ? upArrow : downArrow} />
              </button>

              {/* FeaturedOptions Content */}
              {openIndex === index && item.image && (
                <div className="flex flex-row overflow-hidden transition-all duration-300">
                  <div className="w-100 h-[220px]">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="max-w-[624px] p-6 flex flex-col gap-2">
                    <h3 className="text-[32px] leading-[36px] font-bold">
                      {item.heading}
                    </h3>
                    <p className="text-[#65625E] text-xl leading-[30px]">
                      {item.description}
                    </p>
                    <button className="w-max h-[29px] btn-subtle">
                      Learn more
                    </button>
                  </div>
                </div>
              )}
              {openIndex !== index ? (
                <hr className="text-[#969491] bg-[#969491]" />
              ) : null}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6 md:hidden ">
          {accordionItems.map(({ image, description, title }) => (
            <div
              key={title}
              className="relative flex flex-col h-full gap-4 p-6"
            >
              <div
                className="absolute z-0 top-0 left-0 right-0 bottom-0 bg-center bg-cover"
                style={{
                  backgroundImage: `url(${image})`,
                  opacity: 0.25,
                  pointerEvents: "none",
                }}
              ></div>
              <div className="mx-auto md:w-[240px] md:h-max flex flex-col gap-1">
                <h3 className="text-[20px] font-semibold text-[#000000]">
                  {title}
                </h3>
                <p className="text-[#65625E] text-sm">{description}</p>
              </div>
              <div className="relative md:w-[240px]">
                <button className="w-max h-[40px] z-10 btn-subtle">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOptions;
