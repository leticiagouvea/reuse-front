import Banner1 from "../../assets/images/Banner1.png";
import Banner2 from "../../assets/images/Banner2.png";
import {
  Header,
  HomeSlider,
  HomeElements,
  PurposeContainer,
  Footer
} from "../../components";

export function Home() {
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
