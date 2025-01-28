import FeaturedOptions from "./components/FeaturedOptions"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import MemberStories from "./components/MemberStories"

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FeaturedOptions/>
      <MemberStories/>
      <Footer/>
    </div>
  )
}

export default App