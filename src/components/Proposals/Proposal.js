import { useState } from "react";
import styled from "styled-components";
import { TbArrowsLeftRight } from "react-icons/tb";
import { colors } from "../../assets/styles/constants";
import { BiCheck } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleReject = () => {
    setRejected(true);
  };

  return (
    <>
      <ProposalCard rejected={rejected}>
        <span>
          <strong>letfgouvea</strong> lhe enviou uma proposta de troca:
        </span>

        <div className="products-replace">
          <img src="https://www.equus.com.br/images/thumbs/0009673_jaqueta-jeans-com-barra-desfiada-e-desgastes_600.jpeg" alt="Replace" />
          <TbArrowsLeftRight className="replace-icon" />
          <img src="https://cf.shopee.com.br/file/3b3c91399774af880cd00f0495c57631" alt="Replace" />
        </div>

        {!accepted && !rejected ? (
          <ProposalButtons>
            <button className="earthytone" onClick={handleReject}>recusar</button>
            <button className="darkgreen" onClick={handleAccept}>aceitar</button>
            <button className="mustardtone">ver produto</button>
          </ProposalButtons>
        ) : accepted ? (
          <ProposalAccepted>
            <div className="div">
              <h2>
                <strong>Troca encaminhada</strong>
              </h2>
              <BiCheck className="accepted-icon" />
            </div>
            <h3>Você aceitou essa troca</h3>
          </ProposalAccepted>
        ) : (
          <ProposalRejected>
            <h3>Você recusou essa troca</h3>
            <CgCloseO className="reject-icon" />
          </ProposalRejected>
        )}
      </ProposalCard>
    </>
  );
}

const ProposalCard = styled.div`
  width: 100%;
  height: 230px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${colors.backgroundColor};
  font-size: 18px;
  font-weight: 300;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: ${props => props.rejected ? "not-allowed" : "default"};
  opacity: ${props => props.rejected ? "0.5" : "1.0"};

  .products-replace {
    height: 80px;
    margin: 15px 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
    }

    .replace-icon {
      font-size: 30px;
      color: #477461;
    }
  }
`;

const ProposalButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    width: 30%;
    margin-top: 10px;
    color: ${colors.beigeTone};
    line-height: 0.6;
  }
`;

const ProposalAccepted = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .div {
    width: 180px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  
    .accepted-icon {
      font-size: 20px;
      color: ${colors.darkGreen};
    }
  }

  h3 {
    margin-top: 5px;
    font-size: 16px;
  }
`;

const ProposalRejected = styled(ProposalAccepted)`
  font-weight: 400;

  .reject-icon {
    margin-top: 5px;
    color: ${colors.earthyTone};
    font-size: 20px;
  }
`;
