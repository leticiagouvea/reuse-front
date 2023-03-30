import styled from "styled-components";
import { colors } from "../../assets/style/constants";
import { IoIosSend } from "react-icons/io";
import { MdPersonPin, MdLocationOn } from "react-icons/md";
import { TiArrowSync } from "react-icons/ti";

export default function ProductsReplace() {
  return (
    <ProductsInfo>
      <Product>
        <h2>Você deverá receber:</h2>
        <h3>Tênis All Star Couro</h3>
        <img
          src="https://cf.shopee.com.br/file/3b3c91399774af880cd00f0495c57631"
          alt="Product"
        />

        <div className="infos">
          <MdPersonPin className="info-icon" />
          <h4>
            De <strong>letgouvea</strong> para você
          </h4>
        </div>

        <div className="infos">
          <IoIosSend className="info-icon" />
          <h4>
            Enviado de: <br />
            <strong>Recife - PE</strong>
          </h4>
        </div>

        <div className="infos">
          <MdLocationOn className="info-icon" />
          <h4>
            Receber em: <br />
            <strong>Rio de Janeiro - RJ</strong>
          </h4>
        </div>
      </Product>

      <TiArrowSync className="replace-icon" />

      <Product>
        <h2>Você deverá enviar:</h2>
        <h3>Jaqueta Jeans da Renner</h3>
        <img
          src="https://www.equus.com.br/images/thumbs/0009673_jaqueta-jeans-com-barra-desfiada-e-desgastes_600.jpeg"
          alt="Product"
        />

        <div className="infos">
          <MdPersonPin className="info-icon" />
          <h4>
            De <strong>você</strong> para letgouvea
          </h4>
        </div>

        <div className="infos">
          <MdLocationOn className="info-icon" />
          <h4>
            Enviar de: <br />
            <strong>Rio de Janeiro - RJ</strong>
          </h4>
        </div>

        <div className="infos">
          <IoIosSend className="info-icon" />
          <h4>
            Para: <br />
            <strong>Recife - PE</strong>
          </h4>
        </div>
      </Product>
    </ProductsInfo>
  );
}

const ProductsInfo = styled.div`
  width: 600px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .replace-icon {
    font-size: 32px;
    color: ${colors.darkGreen};
  }

  @media (max-width: 610px) {
    width: 100%;
    flex-direction: column;

    .replace-icon {
      margin: 20px 0px;
    }
  }
`;

const Product = styled.div`
  width: 250px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${colors.beigeTone};
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 15px;
    font-weight: 300;
    text-align: center;
  }

  h3 {
    height: auto;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: center;
  }

  img {
    width: 100%;
    height: 210px;
    margin: 0px 20px 10px 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgb(0 0 0 / 20%);
    object-fit: cover;
  }

  .infos {
    height: 35px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;

    .info-icon {
      width: 30px;
      margin-right: 7px;
      font-size: 22px;
    }

    h4 {
      width: 100%;
      font-size: 15px;
      font-weight: 300;
    }
  }
`;
