import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";

export function Loading() {
  return (
    <LoadingBox>
      <RotatingLines
        strokeColor="#afd898"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </LoadingBox>
  );
}

const LoadingBox = styled.div`
  margin-top: 30px;
`;
