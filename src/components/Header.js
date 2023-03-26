import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Logo from "../../src/assets/img/Logo.png";
import { TbHomeEco } from "react-icons/tb";
import { TbZoomReplace } from "react-icons/tb";
import { RiChatSmile2Line } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import UserContext from "../context/UserContext";
import ProposalsArea from "./Proposals/ProposalsArea";
import { colors, customTooltipStyle } from "../assets/style/constants";

export default function Header() {
  const { showProposals, setShowProposals } = useContext(UserContext);

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="Re-Use" />

        <Menu>
          <div>
            <Link to="/">
              <TbHomeEco
                className="header-icons"
                data-tooltip-id="header-tooltip"
                data-tooltip-content="Início"
              />
            </Link>
            <TbZoomReplace
              className="header-icons"
              data-tooltip-id="header-tooltip"
              data-tooltip-content="Buscar trocas"
            />
          </div>
          <div>
            <MdOutlineNotificationsActive
              className="header-icons"
              data-tooltip-id="header-tooltip"
              data-tooltip-content="Propostas"
              onClick={() => setShowProposals(!showProposals)}
            />
            <RiChatSmile2Line
              className="header-icons"
              data-tooltip-id="header-tooltip"
              data-tooltip-content="Sobre nós"
            />
          </div>
        </Menu>

        <Tooltip
          id="header-tooltip"
          place="bottom"
          style={customTooltipStyle}
        />

        <Account>
          <Link to="/sign-in">
            <span>LOGIN</span>
          </Link>
          <RxDividerVertical />
          <Link to="/sign-up">
            <span>CADASTRO</span>
          </Link>
        </Account>
      </HeaderContainer>

      <ProposalsArea
        showProposals={showProposals}
        setShowProposals={setShowProposals}
        onClick={() => setShowProposals(false)}
      />
    </>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 140px;
  background-color: ${colors.darkGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 2px 2px 6px rgb(0 0 0 / 50%);

  img {
    width: 125px;
    margin-top: 10px;
    object-fit: cover;
  }
`;

const Account = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${colors.lightGreen};
  font-size: 15px;

  span {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 400px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  position: absolute;
  bottom: 20px;

  div {
    display: flex;
    justify-content: space-between;
    width: 70px;
  }

  .header-icons {
    font-size: 25px;
    color: ${colors.mustardTone};
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #000000;
      text-shadow: 2px 2px 6px rgb(0 0 0 / 50%);
    }
  }
`;
