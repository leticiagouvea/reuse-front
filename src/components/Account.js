import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosLeaf } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { RiLoginCircleFill } from "react-icons/ri";
import { colors } from "../assets/style/constants";

export default function Account({ showAccount }) {
  return (
    <AccountContainer showAccount={showAccount}>
      <Access>
        <div>
          <RiLoginCircleFill className="icon" />
          <Link to="/sign-in">
            <p>Acesse sua conta</p>
          </Link>
        </div>
        <div>
          <IoIosLeaf className="icon" />
          <Link to="/sign-up">
            <p>Cadastre-se</p>
          </Link>
        </div>
      </Access>

      {/* <Logout>
        <div>
          <IoIosLeaf className="icon" />
          <span><strong>letgouvea</strong></span>
        </div>
        <div>
          <IoLogOut className="icon" />
          <p>sair da conta</p>
        </div>
      </Logout> */}
    </AccountContainer>
  );
}

const AccountContainer = styled.div`
  width: 200px;
  height: auto;
  padding: 20px 0px 10px 15px;
  position: fixed;
  top: 140px;
  right: 0;
  background-color: ${colors.beigeTone};
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 0px 15px;
  z-index: 2;
  transform: ${(props) => props.showAccount ? "translateY(-200px)" : "translateY(0)"};
  transition: all 0.5s ease-out;
`;

const Logout = styled.div`
  div {
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .icon {
      width: 20px;
      font-size: 20px;
      color: ${colors.darkGreen};
      margin-right: 5px;
    }

    span {
      width: 140px;
      height: auto;
      word-wrap: break-word;
    }

    P {
      cursor: pointer;
    }
  }
`;

const Access = styled(Logout)`
`;
