import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosLeaf } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { RiLoginCircleFill, RiAccountCircleFill } from "react-icons/ri";
import { colors } from "../assets/style/constants";

export default function Account({ showAccount }) {
  return (
    <AccountContainer showAccount={showAccount}>
      <Access>
        <div className="account-options">
          <RiLoginCircleFill className="icon" />
          <Link to="/sign-in">
            <p>Acesse sua conta</p>
          </Link>
        </div>
        <div className="account-options">
          <IoIosLeaf className="icon" />
          <Link to="/sign-up">
            <p>Cadastre-se</p>
          </Link>
        </div>
      </Access>

      {/* <Access>
        <div className="account-options">
          <RiAccountCircleFill className="icon" />
          <p>Seu perfil</p>
        </div>
        <div className="account-options">
          <IoLogOut className="icon" />
          <p>Sair da conta</p>
        </div>
      </Access> */}
    </AccountContainer>
  );
}

const AccountContainer = styled.div`
  width: 172px;
  padding: 20px 0px 10px 15px;
  position: fixed;
  top: 135px;
  right: 0;
  background-color: ${colors.beigeTone};
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 0px 15px;
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
