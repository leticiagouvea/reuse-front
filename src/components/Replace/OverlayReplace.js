import styled from "styled-components";

export function OverlayReplace({ showWindowReplace, setShowWindowReplace }) {
  return (
    <OverlayWindowReplace 
      showWindowReplace={showWindowReplace} 
      onClick={() => setShowWindowReplace(false)} 
    />
  );
}

const OverlayWindowReplace = styled.div`
  width: 100%;
  height: 100%;
  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(71, 116, 97, 0.5);
  display: ${props => props.showWindowReplace ? "initial" : "none"};
`;