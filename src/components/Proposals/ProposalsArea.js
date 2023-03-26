import styled from "styled-components";
import { AiOutlineEyeInvisible } from "react-icons/ai";

export default function ProposalsArea({ showProposals, setShowProposals }) {
  return (
    <ProposalsContainer showProposals={showProposals}>
      <div>
        <h1>PROPOSTAS DE TROCA</h1>
        <AiOutlineEyeInvisible
          className="icon"
          onClick={() => setShowProposals(false)}
        />
      </div>
      <p>Você precisa estar logado para ver suas propostas</p>
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
  transform: ${(props) =>
  props.showProposals ? "translateX(0)" : "translateX(800px)"};
  transition: all 0.5s ease-out;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h1 {
      font-size: 18px;
      font-weight: 500;
      border-bottom: 1px solid #000000;
    }

    .icon {
      font-size: 25px;
      cursor: pointer;
    }
  }

  p {
    width: 70%;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 300;
  }

  @media (max-width: 500px) {
    width: 100%;
    background-color: #CDCAB1;
  }
`;
