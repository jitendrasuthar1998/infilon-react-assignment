interface StoryCardProps {
  story: {
    title: string;
    description: string;
    image: string;
  };
  isLastStory: boolean;
}

function truncateDescription(
  description: string,
  maxLines = 3,
  charsPerLine = 20
) {
  const maxChars = maxLines * charsPerLine;
  if (description.length > maxChars) {
    return description.slice(0, maxChars) + "...";
  }
  return description;
}

const StoryCard = ({ story, isLastStory }: StoryCardProps) => {
  const { title, description, image } = story;
  return (
    <>
      <div className="hidden md:flex md:flex-row overflow-hidden md:w-[488px] h-50">
        {/* Story Image */}
        <div className="w-50 h-50">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Story Content */}
        <div className="w-[288px] flex flex-col gap-4 px-6">
          <div className="mx-auto w-[240px] h-max flex flex-col gap-1">
            <h3 className="text-[32px] font-normal font-gluten text-[#000000]">
              {title}
            </h3>
            <p className="text-[#65625E] text-sm">{description}</p>
          </div>
          <div className="mx-auto w-[240px]">
            <button className="px-2 py-1 w-22 bg-[#DFDEDD] text-[#1C1812] rounded-md hover:bg-[#5d4d40] text-sm leading-[21px] cursor-pointer">
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* card for smaller screen */}
      <div className="md:hidden flex flex-col gap-8">
        <div className="h-[1px] w-full bg-[#C6C5C3]"></div>
        <div className="flex flex-col md:hidden gap-2.5">
          <h3 className="text-[32px] leading-[40px] font-normal font-gluten text-[#000000]">
            {title}
          </h3>
          <div className="max-w-[392px] flex flex-row gap-4">
            {/* Story Image */}
            <div className="h-25 w-25">
              <img
                src={image}
                alt={title}
                className="min-h-25 max-h-25 max-w-25 min-w-25"
              />
            </div>
            <div className="max-w-[276px]">
              <p className="text-[#65625E] text-sm leading-[24px]">
                {truncateDescription(description)}
              </p>
            </div>
          </div>
          <div className="md:mx-auto md:w-[240px]">
            <button className="px-2 py-1 w-22 bg-[#DFDEDD] text-[#1C1812] rounded-md hover:bg-[#5d4d40] text-sm leading-[21px] cursor-pointer">
              Read more
            </button>
          </div>
        </div>
        {isLastStory ? <div className="h-[1px] w-full bg-[#C6C5C3]"></div> : null }
      </div>
    </>
  );
};

export default StoryCard;
