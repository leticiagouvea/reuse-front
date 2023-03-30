import styled from "styled-components";
import "hover.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { colors } from "../assets/style/constants";
import ProductsReplace from "../components/Replace/ProductsReplace";
import { TbBrandWhatsapp } from "react-icons/tb";

export default function Replace() {
  return (
    <>
      <Header />
        <ReplaceDetails>
          <h1>DETALHES DA TROCA</h1>
          <ProductsReplace />
          <span>
            <strong>letgouvea </strong>está esperando você entrar em contato para combinar a entrega
          </span>
          <button class="lightgreen hvr-icon-wobble-horizontal">
            COMBINAR ENTREGA
            <TbBrandWhatsapp className="hvr-icon" />
          </button>
        </ReplaceDetails>
      <Footer />
    </>
  );
}

const ReplaceDetails = styled.div`
  margin: 180px auto 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${colors.earthyTone};
    border-top: 1px solid ${colors.earthyTone};
    border-bottom: 1px solid ${colors.earthyTone};
  }

  span {
    width: 250px;
    text-align: center;
    font-weight: 300;
    line-height: 1.2;
    margin: 15px 0px 25px 0px;
  }

  button {
    width: 190px;
    height: 35px;
    display: flex;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 30%);
  }

  .hvr-icon {
    font-size: 18px;
    margin-left: 8px;
  }
`;
