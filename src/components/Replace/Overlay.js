import styled from "styled-components";

export default function Overlay() {
  return (
    <OverlayWindow />
  );
}

const OverlayWindow = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(71, 116, 97, 0.8);
  /* display: ${props => props.showWindow ? "initial" : "none"}; */
`;