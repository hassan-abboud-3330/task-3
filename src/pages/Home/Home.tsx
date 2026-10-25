import Hero from "./Hero";
import Benefits from "./Benefits/Benefits";
import Testimonials from "./Testimonials/Testimonials";
import Faq from "./Faq/Faq";
import NavigationCards from "./NavegationCards/NavigationCards";

const Home = () => {
  return (
    <main>
      <Hero />
      <Benefits />
      <Testimonials />
      <Faq />
      <NavigationCards />
    </main>
  )
}

export default Home;

