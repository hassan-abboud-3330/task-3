import PageOverview from "../../components/PageOverview";
import Visions from "./components/Visions/Visions";
import Awards from "./components/Awards/Awards";
import History from "./components/History/History";
import Teachers from "./components/Teachers/Teachers";


const About = () => {
  return (
    <main>
      <PageOverview
        intro="Overview"
        title="Welcome to Little Learners Academy"
        content="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.
"
      />
      <Visions />
      <Awards />
      <History />
      <Teachers />
    </main>
  )
}

export default About;