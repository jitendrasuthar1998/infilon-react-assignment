import story1 from "../assets/story1.jpeg";
import story2 from "../assets/story2.jpeg";
import story3 from "../assets/story3.jpeg";
import story4 from "../assets/story4.jpeg";
import StoryCard from "./StoryCard";

const stories = [
  {
    title: "John’s Story",
    description:
      "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh.",
    image: story1,
  },
  {
    title: "The Journey",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc.",
    image: story2,
  },
  {
    title: "Catch Day",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque.",
    image: story3,
  },
  {
    title: "Trout Tales",
    description:
      "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed.",
    image: story4,
  },
];

const MemberStories = () => {
  return (
    <section className="bg-white text-white py-10 px-6 md:px-16">
      <div className="md:max-w-[1024px] mx-auto">
        <h2 className="text-[40px] leading-[45px] font-bold text-left sm:text-center lg:text-left text-[#1C1812] mb-10">
          Member Stories
        </h2>

        {/* Grid Layout */}
        <div className="flex flex-row flex-wrap justify-center items-center md:max-w-[1024px] gap-12">
          {stories.map((story, index) => (
           <StoryCard story={story} key={index} isLastStory={index == stories.length - 1}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberStories;
