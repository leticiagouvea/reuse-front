import Header from "../components/Header";
import HomeSlider from "../components/Home/HomeSlider";
import Banner1 from "../assets/img/Banner1.png";
import Banner2 from "../assets/img/Banner2.png";
import HomeElements from "../components/Home/HomeElements";
import PurposeContainer from "../components/Home/PurposeContainer";
import Footer from "../components/Footer";

export default function Home() {
  const slides = [Banner1, Banner2];

  return (
    <>
      <Header />
      <HomeSlider slides={slides} />
      <HomeElements />
      <PurposeContainer />
      <Footer />
    </>
  );
}
