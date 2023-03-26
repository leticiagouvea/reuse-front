import styled from "styled-components";

export default function OverlayProposals({ showProposals, setShowProposals }) {
  return (
    <Overlay showProposals={showProposals} onClick={() => setShowProposals(false)} />
  );
}

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => props.showProposals ? "initial" : "none"};
`;