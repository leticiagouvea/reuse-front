import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { TbArrowsLeftRight } from "react-icons/tb";
import "hover.css";
import { AuthContainer } from "./SignUp";

export default function SignIn() {
  return (
    <>
      <Header />
      <AuthContainer>
        <TbArrowsLeftRight className="icon" />
        <h1>uma nova forma de fazer e pensar moda.</h1>
        <h2>ACESSE SUA CONTA</h2>

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

          <button className="lightgreen hvr-float-shadow"> LOGIN </button>
        </form>
      </AuthContainer>
      <Footer />
    </>
  );
}
