import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "hover.css";
import { TbArrowsLeftRight } from "react-icons/tb";
import { postSignUp } from "../../services";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AuthContainer } from "./style";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cellphone, setCellphone] = useState("");

  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.warning("Senhas não conferem, tente novamente.");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    if (password.length < 6) {
      toast.warning("Sua senha precisa ter no mínimo 6 caracteres.");
      setPassword("");
      setConfirmPassword("");
      return;
    }

    const body = {
      email,
      password,
      username,
      city,
      state,
      cellphone
    };

    try {
      await postSignUp(body);
      resetForm();
      toast.success("Cadastro feito com sucesso! Faça login para continuar.");
      navigate("/sign-in");
    } catch (error) {
      if (error.response.status === 409) {
        setEmail("");
        setUsername("");
        return toast.error("Esse e-mail ou nome de usuário já existe, tente novamente.");
      }
      return toast.error("Algo deu errado, tente novamente mais tarde.");
    }
  }

  function resetForm() {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
    setCity("");
    setState("");
    setCellphone("");
  }

  return (
    <>
      <Header />
      <AuthContainer>
        <TbArrowsLeftRight className="icon" />
        <h1>uma nova forma de fazer e pensar moda.</h1>
        <h2>CADASTRE-SE</h2>

        <form onSubmit={handleForm}>
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Nome de usuário"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="location">
            <input className="city"
              placeholder="Cidade"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <input className="state"
              placeholder="Estado"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <input
            placeholder="Celular"
            type="number"
            value={cellphone}
            onChange={(e) => setCellphone(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            placeholder="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className="lightgreen hvr-float-shadow"> CADASTRAR </button>
          <h3 onClick={() => navigate("/sign-in")}>Já possui uma conta? Faça login!</h3>
        </form>
      </AuthContainer>
      <Footer />
    </>
  );
}
