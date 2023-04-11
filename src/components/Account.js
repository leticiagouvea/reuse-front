import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosLeaf } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { RiLoginCircleFill, RiAccountCircleFill } from "react-icons/ri";
import { colors } from "../assets/style/constants";
import { toast } from "react-toastify";

export default function Account({ showAccount }) {
  const token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();

  return (
    <AccountContainer showAccount={showAccount}>
      {!token ? (
        <Access>
          <div className="account-options">
            <RiLoginCircleFill className="icon" />
            <p onClick={() => navigate("/sign-in")}>Acesse sua conta</p>
          </div>

          <div className="account-options">
            <IoIosLeaf className="icon" />
            <p onClick={() => navigate("/sign-up")}>Cadastre-se</p>
          </div>
        </Access>
      ) : (
        <Access>
          <div className="account-options">
            <RiAccountCircleFill className="icon" />
            <p>Seu perfil</p>
          </div>

          <div className="account-options">
            <IoLogOut className="icon" />
            <p
              onClick={() => {
                localStorage.clear();
                toast.warning("Você foi desconectado.");
                navigate("/");
              }}
            >
              Sair da conta
            </p>
          </div>
        </Access>
      )}
    </AccountContainer>
  );
}

const AccountContainer = styled.div`
  width: 180px;
  padding: 20px 0px 10px 15px;
  position: fixed;
  top: 135px;
  right: 0;
  background-color: ${colors.beigeTone};
  box-shadow: 0px 0px 5px rgb(0 0 0 / 30%);
  border-radius: 0px 0px 0px 15px;
  color: #333333;
  font-weight: 600;
  z-index: 2;
  transform: ${(props) => props.showAccount ? "translateY(-200px)" : "translateY(0)"};
  transition: all 0.5s ease-out;
`;

const Access = styled.div`
  .account-options {
    height: 30px;
    display: flex;
    align-items: center;

    .icon {
      width: 22px;
      margin-right: 5px;
      font-size: 20px;
      color: ${colors.darkGreen};
    }

    P {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
