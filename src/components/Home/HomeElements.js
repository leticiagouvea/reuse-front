import styled from "styled-components";
import ReuseBox from "../../assets/img/ReuseBox.png";
import Clothes from "../../assets/img/Clothes.png";
import "animate.css";

export default function HomeElements() {
  return (
    <ElementsContainer>
      <div className="left animate__animated animate__bounce">
        <img src={ReuseBox} alt="Re-Use" />
        <h1>
          Circulando roupas, <br />
          ressignificando histórias.
        </h1>
      </div>

      <VerticalLine />
      <HorizontalLine />

      <div className="right animate__animated animate__bounce">
        <img src={Clothes} alt="Re-Use" />
        <div>
          <h2>
            Não compre, troque. <br />
            Não descarte, troque. <br />
            Faça da segunda mão, <br />a sua primeira opção.
          </h2>
          <button className="lightgreen hvr-pulse-shrink">Comece aqui »</button>
        </div>
      </div>
    </ElementsContainer>
  );
}

const ElementsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .left, .right {
    width: 40%;
    margin: 5px 0px;
    display: flex;
    align-items: center;
  }

  .left {
    justify-content: flex-end;
  }
  
  .right {
    justify-content: flex-start;
  }

  img {
    width: 180px;
    height: 200px;
    object-fit: cover;
  }

  h1 {
    font-family: "Delicious Handrawn", cursive;
    font-size: 28px;
    line-height: 1.1;
  }

  h2 {
    font-size: 20px;
    line-height: 1.3;
    font-weight: 500;
    margin-bottom: 14px;
  }

  .hvr-pulse-shrink {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .hvr-pulse-shrink:hover,
  .hvr-pulse-shrink:focus,
  .hvr-pulse-shrink:active {
    -webkit-animation-name: hvr-pulse-shrink;
    animation-name: hvr-pulse-shrink;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
  }
  @-webkit-keyframes hvr-pulse-shrink {
    to {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  @keyframes hvr-pulse-shrink {
    to {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }

  @media (max-width: 925px) {
    flex-direction: column-reverse;

    .left,
    .right {
      width: 100%;
      justify-content: center;
    }

    img {
      margin-right: 20px;
    }
  }

  @media (max-width: 500px) {
    .right {
      margin-bottom: 20px;
    }

    img {
      width: 90px;
      height: 160px;
    }

    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 17px;
    }
  }
`;

const VerticalLine = styled.div`
  height: 150px;
  border-left: 2px dashed #477461;

  @media (max-width: 925px) {
    display: none;
  }
`;

const HorizontalLine = styled.div`
  display: none;
  width: 300px;
  border-bottom: 2px dashed #477461;

  @media (max-width: 925px) {
    display: initial;
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;
