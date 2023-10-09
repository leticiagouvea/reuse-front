import styled from "styled-components";
import { colors } from "../../assets/styles/constants";

export const AuthContainer = styled.div`
  margin: 180px 0px 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    font-size: 30px;
    margin-bottom: 10px;
    color: ${colors.darkGreen};
  }

  h1 {
    width: 270px;
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: ${colors.darkGreen};
  }

  h2 {
    margin-bottom: 14px;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${colors.earthyTone};
    border-top: 1px solid ${colors.earthyTone};
    border-bottom: 1px solid ${colors.earthyTone};
  }

  h3 {
    border-bottom: 1px solid ${colors.grayTone};
    padding: 5px 0px;
    color: #333333;
    font-weight: 500;
    cursor: pointer;
  }

  button {
    width: 150px;
    height: 30px;
    margin: 10px 0px 30px 0px;
  }

  .location {
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    
    .city {
      min-width: 180px;
      margin-right: 10px;
    }

    .state {
      min-width: 20px;
    }
  }
`;
