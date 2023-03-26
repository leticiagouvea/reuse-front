import styled from "styled-components";
import REs from "../../assets/img/REs.png";
import { colors } from "../../assets/style/constants";

export default function PurposeContainer() {
  return (
    <InfoContainer>
      <h1>Nosso intuito</h1>
      <div className="infos">
        <p>
          A re-use busca uma nova forma de consumir moda, que atenda às suas
          necessidades, sem comprometer as gerações futuras a nível ambiental,
          social e econômico. A moda sustentável é um processo de mudança nas
          formas de pensar, produzir, vestir e desfrutar moda, que valoriza a
          diversidade, prosperidade e o bem-estar das pessoas e do meio
          ambiente. Isso significa uma radical desaprendizagem da moda como a
          conhecemos, desenraizando a lógica do crescimento infinito,
          superprodução e consumo excessivo e, em vez disso, encontrando
          maneiras novas e mais conscientes de desfrutar e dar valor à moda.
          Acreditamos na circularidade da moda, e por isso, nosso intuito é
          evitar o descarte em excesso e o consumo desenfreado, dando
          continuidade ao ciclo de vida das peças do seu guarda-roupa que não
          lhe representam mais, mas podem representar outras pessoas. Re-usar é
          cuidar.
        </p>
        <img src={REs} alt="Re-Use" />
      </div>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 100%;
  padding: 20px 150px;
  margin: 0 auto;
  background: linear-gradient(180deg, #f6f3e4 60%, ${colors.grayTone} 100%);

  h1 {
    margin: 20px 0px;
    font-family: "Delicious Handrawn", cursive;
    font-size: 28px;
    color: ${colors.darkGreen};
  }

  .infos {
    max-height: 220px;
    display: flex;
    align-items: center;

    p {
      max-height: 220px;
      margin-right: 40px;
      font-size: 20px;
      text-align: justify;
      overflow-y: scroll;
    }

    img {
      width: 300px;
    }

    @media (max-width: 925px) {
      max-height: 500px;
      flex-direction: column;

      img {
        width: 270px;
        height: 150px;
        object-fit: cover;
      }

      p {
        margin: 0px 0px 20px 0px;
      }
    }
  }

  @media (max-width: 1145px) {
    padding: 0px 60px;
  }

  @media (max-width: 925px) {
    padding: 0px 50px;
  }
`;
