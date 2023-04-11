import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "hover.css";
import { TbArrowsLeftRight } from "react-icons/tb";
import { postSignIn } from "../../services";
import { AuthContainer } from "./style";
import { Header, Footer } from "../../components";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    const body = {
      email,
      password
    };

    try {
      const data = await postSignIn(body);
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("username", JSON.stringify(data.user.username));

      resetForm();
      toast.success("Login feito com sucesso! Seja bem-vindo.");
      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        resetForm();
        return toast.error("Senha ou e-mail incorretos, tente novamente.");
      }
      resetForm();
      return toast.error("Algo deu errado, tente novamente mais tarde.");
    }
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Header />
      <AuthContainer>
        <TbArrowsLeftRight className="icon" />
        <h1>uma nova forma de fazer e pensar moda.</h1>
        <h2>ACESSE SUA CONTA</h2>

        <form onSubmit={handleForm}>
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="lightgreen hvr-float-shadow"> LOGIN </button>
          <h3 onClick={() => navigate("/sign-up")}>Não possui uma conta? Cadastre-se!</h3>
        </form>
      </AuthContainer>
      <Footer />
    </>
  );
}
