import styled from "styled-components";

export default function Window() {
  return (
    <CentralizeWindow>
      <WindowContainer>
      </WindowContainer>
    </CentralizeWindow>
  );
}

export const CentralizeWindow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WindowContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: #f6f3e4;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 40%);
  border-radius: 20px;
  /* display: ${props => props.showWindow ? "flex" : "none"}; */
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 170px;
  left: 50;
  z-index: 10;
  overflow-y: scroll;
`;
