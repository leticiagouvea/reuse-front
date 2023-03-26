import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TbArrowsLeftRight } from "react-icons/tb";
import "hover.css";
import { colors } from "../../assets/style/constants";

export default function SignUp() {
  return (
    <>
      <Header />
      <AuthContainer>
        <TbArrowsLeftRight className="icon" />
        <h1>uma nova forma de fazer e pensar moda.</h1>
        <h2>CADASTRE-SE</h2>

        <form>
          <input
            placeholder="Nome de usuário"
            type="text"
            required
          />
          <input
            placeholder="Senha"
            type="password"
            required
          />
          <input
            placeholder="Nome completo"
            type="text"
            required
          />
          <input
            placeholder="CPF"
            type="number"
            required
          />
          <input
            placeholder="Endereço completo"
            type="text"
            required
          />
          <input
            placeholder="Celular"
            type="celphone"
            required
          />

          <button className="lightgreen hvr-float-shadow"> CADASTRAR </button>
        </form>
      </AuthContainer>
      <Footer />
    </>
  );
}

export const AuthContainer = styled.div`
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: 30px;
    margin-bottom: 10px;
    color: ${colors.darkGreen};
  }

  h1 {
    width: 270px;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: ${colors.darkGreen};
  }

  h2 {
    margin-bottom: 14px;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${colors.earthyTone};
    border-top: 1px solid ${colors.earthyTone};
    border-bottom: 1px solid ${colors.earthyTone};
  }

  button {
    margin: 10px 0px 50px 0px;
  }
`;
