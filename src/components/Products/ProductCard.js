import styled from "styled-components";
import { colors } from "../../assets/style/constants";
import { MdPersonPin } from "react-icons/md";
import "hover.css";

export default function ProductCard() {
  return (
    <ProductContainer>
      <div className="info-product">
        <div className="effect"></div>
        <img src="https://www.equus.com.br/images/thumbs/0009673_jaqueta-jeans-com-barra-desfiada-e-desgastes_600.jpeg" alt="Product" />
        <h2>Jaqueta Jeans</h2>
      </div>

      <div className="username">
        <MdPersonPin className="user-icon" />
        <span>by <strong>letgouvea</strong></span>
      </div>
      <button className="lightgreen hvr-wobble-horizontal">Ver detalhes</button>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  width: 200px;
  height: 250px;
  margin: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.beigeTone};
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
  border-radius: 10px;

  &:hover {
    .info-product {
      img {
        width: 300px;
        height: 300px;
        transition-duration: 0.5s;
      }
      .effect {
        opacity: 0.5;
      }
    }
  }

  button {
    width: 180px;
  }

  .info-product {
    width: 100%;
    height: 180px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;

    img {
      width: 200px;
      height: 180px;
      object-fit: cover;
      transition-duration: 0.5s;
    }

    .effect {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000000;
      opacity: 0.3;
      transition: all 0.5s ease-out;
    }

    h2 {
      width: 90%;
      margin-bottom: 5px;
      position: absolute;
      z-index: 1;
      font-family: "Delicious Handrawn", cursive;
      font-size: 20px;
      text-align: center;
      line-height: 1.2;
      color: ${colors.beigeTone};
      text-transform: lowercase;
    }
  }

  .username {
    width: 180px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 150px;
      margin: 8px 0px;
      font-weight: 300;
      word-wrap: break-word;
    }

    .user-icon {
      font-size: 22px;
      margin-right: 5px;
    }
  }

  @media (max-width: 600px) {
    margin: 10px;
  }
`;
