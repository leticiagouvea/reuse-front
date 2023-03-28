import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { TiSocialInstagram } from "react-icons/ti";
import { MdFacebook, MdEmail } from "react-icons/md";
import { RiChatSmile2Fill } from "react-icons/ri";
import { colors, customTooltipStyle } from "../assets/style/constants";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <h1>RE-USE | 2023 ©</h1>
        <Link to="/">
          <h2>SAIBA MAIS</h2>
        </Link>
        <div>
          <RiChatSmile2Fill
            className="footer-icons about-us"
            data-tooltip-id="footer-tooltip"
            data-tooltip-content="Sobre nós"
          />
          <TiSocialInstagram
            className="footer-icons"
            data-tooltip-id="footer-tooltip"
            data-tooltip-content="Siga nosso Instagram"
          />
          <MdFacebook
            className="footer-icons"
            data-tooltip-id="footer-tooltip"
            data-tooltip-content="Acompanhe nosso Facebook"
          />
          <MdEmail
            className="footer-icons"
            data-tooltip-id="footer-tooltip"
            data-tooltip-content="Entre em contato por e-mail"
          />
        </div>
      </FooterContainer>
      <Tooltip id="footer-tooltip" place="top" style={customTooltipStyle} />
    </>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(180deg, ${colors.grayTone} 40%, #b5b194 100%);
  color: ${colors.darkGreen};
  font-family: "League Spartan", sans-serif;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1,
  h2,
  div {
    width: 180px;
    display: flex;
    justify-content: center;
  }

  h2 {
    transition: all 0.5s;
    &:hover {
      color: #000000;
    }
  }

  div {
    justify-content: space-evenly;

    .footer-icons {
      font-size: 25px;
      color: ${colors.darkGreen};
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        color: #000000;
        text-shadow: 2px 2px 6px rgb(0 0 0 / 50%);
      }
    }
    .about-us {
      display: none;
    }

    @media (max-width: 500px) {
      .footer-icons {
        font-size: 22px;
      }
      .about-us {
        display: initial;
      }
    }
  }

  @media (max-width: 500px) {
    div {
      width: 160px;
      margin-right: 10px;
    }

    h2 {
      display: none;
    }
  }
`;
