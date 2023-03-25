import styled from "styled-components";
import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Logo from "../../src/assets/img/Logo.png";
import { TbHomeEco } from "react-icons/tb";
import { TbZoomReplace } from "react-icons/tb";
import { RiChatSmile2Line } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";

export default function Header() {
  const customTooltipStyle = {
    backgroundColor: "#d2b03f",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "10px",
  };

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="Re-Use" />
        <Menu>
          <div>
            <TbHomeEco
              className="header-icons"
              data-tooltip-id="header-tooltip"
              data-tooltip-content="Início"
            />
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
            />
            <RiChatSmile2Line
              className="header-icons"
              data-tooltip-id="header-tooltip"
              data-tooltip-content="Sobre nós"
            />
          </div>
        </Menu>
        <Tooltip id="header-tooltip" place="bottom" style={customTooltipStyle} />
        <div className="account">
          <span>LOGIN</span>
          <RxDividerVertical />
          <span>CADASTRO</span>
        </div>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 140px;
  background-color: #477461;
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

  .account {
    width: 300px;
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 20px;
    color: #AFD898;
    font-size: 15px;

    span {
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 400px) {
    .account {
      font-size: 12px;
      font-weight: 500;
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
    display: flex;
    justify-content: space-between;
    width: 70px;
  }

  .header-icons {
    font-size: 25px;
    color: #d2b03f;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      color: #000000;
      text-shadow: 2px 2px 6px rgb(0 0 0 / 50%);
    }
  }
`;
