import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Logo from "../../src/assets/img/Logo.png";
import { TbHomeEco, TbZoomReplace } from "react-icons/tb";
import { MdOutlineNotificationsActive, MdOutlineAddToPhotos } from "react-icons/md";
import { BsPersonLinesFill } from "react-icons/bs";
import UserContext from "../context/UserContext";
import ProposalsArea from "./Proposals/ProposalsArea";
import { colors, customTooltipStyle, customTooltipAccountStyle } from "../assets/style/constants";
import Account from "./Account";

export default function Header() {
  const { showProposals, setShowProposals } = useContext(UserContext);
  const { showAccount, setShowAccount } = useContext(UserContext);

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
            <Link to="/products">
              <TbZoomReplace
                className="header-icons"
                data-tooltip-id="header-tooltip"
                data-tooltip-content="Buscar trocas"
              />
            </Link>
          </div>
          <div>
            <MdOutlineAddToPhotos
              className="header-icons"
              data-tooltip-id="header-tooltip"
              data-tooltip-content="Adicionar produto"
            />
            <MdOutlineNotificationsActive
              className="header-icons"
              data-tooltip-id="header-tooltip"
              data-tooltip-content="Propostas"
              onClick={() => setShowProposals(!showProposals)}
            />
          </div>
        </Menu>

        <BsPersonLinesFill
          className="account-icon"
          data-tooltip-id="account-tooltip"
          data-tooltip-content="Sua conta"
          onClick={() => setShowAccount(!showAccount)}
        />

        <Tooltip
          id="header-tooltip"
          place="bottom"
          style={customTooltipStyle}
        />
        <Tooltip
          id="account-tooltip"
          place="left"
          style={customTooltipAccountStyle}
        />
      </HeaderContainer>

      <Account showAccount={showAccount} />

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
  z-index: 3;
  box-shadow: 2px 2px 6px rgb(0 0 0 / 50%);

  img {
    width: 125px;
    margin-top: 10px;
    object-fit: cover;
  }

  .account-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${colors.lightGreen};
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    .account-icon {
      font-size: 22px;
    }
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
    width: 70px;
    display: flex;
    justify-content: space-between;
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

  @media (max-width: 400px) {
    div {
      width: 60px;
    }
    .header-icons {
      font-size: 22px;
    }
  }
`;
