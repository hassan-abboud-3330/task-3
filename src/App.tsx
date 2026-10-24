
import MainLayout from "./layouts/MainLayout"
import Header from "./components/Header/Header";
import Hero from "./components/pages/Home/Hero";
import Benefits from "./components/pages/Home/Benefits/Benefits";
import Faq from "./components/pages/Home/Faq/Faq";

import Footer from "./components/Footer/Footer";
import Testimonials from "./components/pages/Home/Testimonials/Testimonials";
import NavigationCards from "./components/pages/Home/NavegationCards/NavigationCards";
function App() {
  return (
    <MainLayout>
      <Header />
      <Hero />
      <Benefits />
      <Testimonials />
      <Faq />
      <NavigationCards />
      <Footer />
    </MainLayout>
  );
}

export default App;
