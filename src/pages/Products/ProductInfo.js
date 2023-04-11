import { useContext } from "react";
import styled from "styled-components";
import "hover.css";
import { colors } from "../../assets/styles/constants";
import { MdPersonPin, MdLocationOn } from "react-icons/md";
import { TiInfo, TiArrowRepeat } from "react-icons/ti";
import UserContext from "../../context/UserContext";
import {
  Header,
  Footer,
  SelectReplace
} from "../../components";

export function ProductInfo() {
  const { showWindowReplace, setShowWindowReplace } = useContext(UserContext);

  return (
    <>
      <Header />
      <Title>Jaqueta Jeans</Title>
      <HorizontalLine />
      <ContainerProduct>
        <img src="https://www.equus.com.br/images/thumbs/0009673_jaqueta-jeans-com-barra-desfiada-e-desgastes_600.jpeg" alt="Product" />

        <Details>
          <div className="infos">
            <MdPersonPin className="icon" />
            <h2>Por <strong>letgouvea</strong></h2>
          </div>

          <div className="infos">
            <MdLocationOn className="icon" />
            <div className="location">
              <h2>Rio de Janeiro </h2>
              <h2 className="separator">-</h2>
              <h2>RJ</h2>
            </div>
          </div>

          <div className="description">
            <div className="infos">
              <TiInfo className="icon" />
              <h2><strong>Descrição do produto:</strong></h2>
            </div>
            
            <p>
              Jaqueta Jeans da Renner. Tamanho P. Condição: 9/10. Foi pouco
              usada. Gosto muito dessa jaqueta, mas não cabe mais em mim.
            </p>
          </div>

          <button
            className="lightgreen hvr-icon-spin"
            onClick={() => setShowWindowReplace(!showWindowReplace)}
          >
            PROPOR TROCA
            <TiArrowRepeat className="replace-icon hvr-icon" />
          </button>
        </Details>
      </ContainerProduct>
      <SelectReplace showWindowReplace={showWindowReplace} />
      <Footer />
    </>
  );
}

const Title = styled.h1`
  margin: 200px auto 20px auto;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: ${colors.darkGreen};

  @media (max-width: 550px) {
    margin: 180px auto 20px auto;
  }
`;

const HorizontalLine = styled.div`
  width: 300px;
  margin: 0 auto;
  border-bottom: 2px dashed ${colors.darkGreen};

  @media (max-width: 550px) {
    width: 250px;
  }
`;

const ContainerProduct = styled.div`
  width: 500px;
  padding: 20px;
  margin: 20px auto 90px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.beigeTone};
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);

  img {
    width: 250px;
    height: 250px;
    margin: 0px 20px 0px 0px;
    object-fit: cover;
    border-radius: 10px;
  }

  @media (max-width: 550px) {
    flex-direction: column;
    margin: 20px auto 60px auto;
    width: 300px;

    img {
      margin: 0px 0px 20px 0px;
    }
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333333;
  font-weight: 300;
  font-size: 16px;

  .icon {
    font-size: 22px;
    margin-right: 10px;
  }

  .infos {
    height: 30px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;

    .location {
      display: flex;

      .separator {
        margin: 0px 3px;
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;

    p {
      width: 200px;
      height: auto;
      max-height: 140px;
      font-size: 15px;
      line-height: 1.2;
      word-wrap: break-word;
      overflow-y: scroll;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 30%);
    transition: all 0.3s ease-out;

    .replace-icon {
      font-size: 20px;
      margin-left: 5px;
    }
  }

  @media (max-width: 550px) {
    width: 250px;
    justify-content: center;

    .description {
      p {
        width: 100%;
      }
    }
  }
`;
