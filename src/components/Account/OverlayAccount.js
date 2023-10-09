import styled from "styled-components";

export function OverlayAccount({ showAccount, setShowAccount }) {
  return (
    <OverlayAccountArea showAccount={showAccount} onClick={() => setShowAccount(true)} />
  );
}

export const OverlayAccountArea = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => props.showAccount ? "none" : "initial"};
`;