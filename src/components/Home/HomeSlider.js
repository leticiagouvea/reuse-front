import { useEffect, useState } from "react";
import styled from "styled-components";

export default function HomeSlider({ slides }) {
  const [index, setIndex] = useState(0);
  const img = slides[index];
  const isFirstSlide = index === 0;

  function changeSlide(index) {
    setIndex(index);
  }

  function Previous() {
    const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
    changeSlide(newIndex);
  }

  function Next() {
    const newIndex = (index + 1) % slides.length;
    changeSlide(newIndex);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (index + 1) % slides.length;
      changeSlide(newIndex);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [index, slides.length]);

  return (
    <SliderContainer>
      <Arrow pointer={"left"} onClick={Previous}>❰</Arrow>
      <Arrow pointer={"right"} onClick={Next}>❱</Arrow>
      <BackgroundContainer img={img} />
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  width: 100%;
  max-height: 320px;
  margin: 140px 0px 10px 0px;
  position: relative;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => props.pointer}: 32px;
  transform: translate(0, -50%);
  font-size: 45px;
  color: rgba(210, 176, 63, 0.7);
  z-index: 1;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
    transition: all 0.5s;
  }
`;

const BackgroundContainer = styled.div`
  width: 100%;
  max-height: 320px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
  aspect-ratio: 1920 / 900;
  transition: 0.5s ease-out;
`;
