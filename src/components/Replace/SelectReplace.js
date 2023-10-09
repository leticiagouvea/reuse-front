import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../assets/styles/constants";

export function SelectReplace({ showWindowReplace }) {
  const [selected, setSelected] = useState(false);

  return (
    <CentralizeWindow>
      <WindowContainer showWindowReplace={showWindowReplace}>
        {/* <h1>Você não possui um produto publicado para realizar troca</h1>
        <button className="graytone">Publique agora</button> */}

        <ProductReplace>
          <h2>Selecione o produto a ser trocado:</h2>
          <SelectProduct selected={selected} onClick={() => setSelected(!selected)}>
            <div className="img-product">
              <img src="https://www.equus.com.br/images/thumbs/0009673_jaqueta-jeans-com-barra-desfiada-e-desgastes_600.jpeg" alt="" />
            </div>
            <div className="img-product">
              <img src="https://www.equus.com.br/images/thumbs/0009673_jaqueta-jeans-com-barra-desfiada-e-desgastes_600.jpeg" alt="" />
            </div>
            <div className="img-product">
              <img src="https://www.equus.com.br/images/thumbs/0009673_jaqueta-jeans-com-barra-desfiada-e-desgastes_600.jpeg" alt="" />
            </div>
          </SelectProduct>
          <button className="mustardtone">Enviar proposta</button>
        </ProductReplace>
      </WindowContainer>
    </CentralizeWindow>
  );
}

export const CentralizeWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const WindowContainer = styled.div`
  width: 320px;
  height: 250px;
  padding: 10px;
  background-color: ${colors.beigeTone};
  box-shadow: 0px 0px 8px rgb(0 0 0 / 40%);
  border-radius: 20px;
  display: ${(props) => (props.showWindowReplace ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 200px;
  z-index: 10;

  h1, h2 {
    margin-bottom: 10px;
    font-size: 18px;
    text-align: center;
    line-height: 1.2;
  }

  h1 {
    width: 250px;
    margin-bottom: 20px;
  }
`;

const ProductReplace = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  button {
    width: 150px;
    height: 30px;
  }
`;

const SelectProduct = styled.div`
  width: 100%;
  height: 110px;
  padding-left: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  overflow-x: scroll;

  .img-product {
    width: 80px;
    margin-right: 30px;
    
    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 50%;
      border: ${(props) => (props.selected ? `3px solid ${colors.darkGreen}` : `3px solid ${colors.mustardTone}` )};
      box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
      cursor: pointer;
    }
  }
`;
