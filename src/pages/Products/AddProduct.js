import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { colors } from "../../assets/style/constants";

export default function AddProduct() {
  return (
    <>
      <Header />
        <AddProductContainer>
          <h1>ADICIONE UM PRODUTO</h1>

          <form>
            <label>Escolha um nome para o produto:</label>
            <input
              placeholder="Insira aqui o nome do produto"
              type="text"
              required
            />
            <label>Descrição do produto:</label>
            <textarea
              placeholder="Adicione informações importantes, como: detalhes de tamanho, modelo, marca ou loja, e condições da peça..."
              type="text"
              required
            />
            <button className="lightgreen hvr-float-shadow"> PUBLICAR </button>
        </form>
        </AddProductContainer>
      <Footer />
    </>
  );
}

const AddProductContainer = styled.div`
  margin: 180px auto 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 20px;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${colors.earthyTone};
    border-top: 1px solid ${colors.earthyTone};
    border-bottom: 1px solid ${colors.earthyTone};
  }

  label {
    width: 300px;
    font-size: 18px;
    margin-bottom: 8px;
  }

  input::placeholder, 
  textarea::placeholder {
    color: #333333;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
  }

  button {
    margin-top: 10px;
  }
`;