import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "animate.css";
import "hover.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import { colors } from "../../assets/styles/constants";
import ReuseBox from "../../assets/images/ReuseBox.png";
import Clothes from "../../assets/images/Clothes.png";

export function HomeElements() {
  const navigate = useNavigate();

  return (
    <ElementsContainer className="animate__animated animate__bounceIn">
      <div className="left">
        <img src={ReuseBox} alt="Re-Use" />
        
        <h1>
          Circulando roupas, <br />
          ressignificando histórias.
        </h1>
      </div>

      <VerticalLine />
      <HorizontalLine />

      <div className="right">
        <img src={Clothes} alt="Re-Use" />
        <div>
          <h2>
            Não compre, troque. <br />
            Não descarte, troque. <br />
            Faça da segunda mão, <br />
            a sua primeira opção.
          </h2>

          <button
            className="lightgreen hvr-pulse-shrink"
            onClick={() => navigate("/products")}
          >
            Ir às trocas
            <RxDoubleArrowRight className="arrow-icon" />
          </button>
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

  .left,
  .right {
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

  button {
    display: flex;
    align-items: center;
  }

  .arrow-icon {
    font-size: 12px;
    margin-left: 5px;
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
  border-left: 2px dashed ${colors.darkGreen};

  @media (max-width: 925px) {
    display: none;
  }
`;

const HorizontalLine = styled.div`
  display: none;
  width: 300px;
  border-bottom: 2px dashed ${colors.darkGreen};

  @media (max-width: 925px) {
    display: initial;
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;
