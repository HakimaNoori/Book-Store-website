import AllBooks from "./components/AllBooks/AllBooks";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Banner from "./components/Banner/Banner";
import BestBooks from "./components/BestBooks/BestBooks";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Testimonial from "./components/Testimonial/Testimonial";

const App = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <BestBooks />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer/>
    </div>
    </>
  );
};

export default App;