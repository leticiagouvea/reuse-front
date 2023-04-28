import styled from "styled-components";
import { AiOutlineEyeInvisible } from "react-icons/ai";
/* import Proposal from "./Proposal"; */
import { colors } from "../../assets/styles/constants";

export function ProposalsArea({ showProposals, setShowProposals }) {
  const token = JSON.parse(localStorage.getItem("token"));

  return (
    <ProposalsContainer showProposals={showProposals}>
      <div className="show-proposals">
        <h1>PROPOSTAS DE TROCA</h1>
        <AiOutlineEyeInvisible
          className="hide-icon"
          onClick={() => setShowProposals(false)}
        />
      </div>

      {!token ? (
        <p>Você precisa fazer login para visualizar suas propostas</p>
      ) : (
        <p>Nenhuma proposta para você no momento</p>
      )}

      {/* <Proposal />
      <Proposal />
      <Proposal />
      <Proposal /> */}
    </ProposalsContainer>
  );
}

const ProposalsContainer = styled.div`
  width: 400px;
  height: 100%;
  padding: 30px;
  background-color: rgb(187, 183, 155, 0.8);
  box-shadow: 2px 20px 10px rgb(0 0 0 / 70%);
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  font-size: 16px;
  transform: ${(props) => props.showProposals ? "translateX(0)" : "translateX(800px)"};
  transition: all 0.5s ease-out;
  overflow-y: scroll;
  &::-webkit-scrollbar-thumb {
    background: ${colors.darkGreen};
    border-radius: 6px;
  }

  p {
    width: 70%;
    font-size: 20px;
    font-weight: 300;
  }

  .show-proposals {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 18px;
      font-weight: 600;
      border-bottom: 1px solid #000000;
    }

    .hide-icon {
      font-size: 25px;
      cursor: pointer;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    background-color: #cdcab1;
  }
`;
