import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { TiSocialInstagram } from "react-icons/ti";
import { MdFacebook } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const customTooltipStyle = {
    backgroundColor: "#d2b03f",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "bold",
    padding: "10px",
  };

  return (
    <>
      <FooterContainer>
        <h1>RE-USE | 2023 ©</h1>
        <Link to="/">
          <h2>SAIBA MAIS</h2>
        </Link>
        <div>
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
  background: linear-gradient(180deg, #c0bda1 40%,  #b5b194 100%);
  color: #477461;
  font-family: 'League Spartan', sans-serif;
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
      color: #477461;
      cursor: pointer;
      transition: all 0.5s;
      &:hover {
        color: #000000;
        text-shadow: 2px 2px 6px rgb(0 0 0 / 50%);
      }
    }
  }

  @media (max-width: 650px) {
    h2 {
      display: none;
    }
  }
`;