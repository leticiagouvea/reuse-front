import styled from "styled-components";
import { colors } from "../../assets/style/constants";
import Header from "../../components/Header";
import ProductCard from "../../components/Products/ProductCard";

export function Products() {
  return (
    <ContainerPage>
      <Header />
      <Title>ENCONTRAR TROCAS</Title>
      <ProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductsContainer>
    </ContainerPage>
  );
}

const ContainerPage = styled.div`
  width: 80%;
  margin: 180px auto 50px auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  width: 200px;
  margin: 0 auto 20px auto;
  padding: 10px 0px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.earthyTone};
  border-top: 1px solid ${colors.earthyTone};
  border-bottom: 1px solid ${colors.earthyTone};
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
