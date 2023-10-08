import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { MdPersonPin } from "react-icons/md";
import { getProducts } from "../../services/productApi";
import { colors } from "../../assets/styles/constants";
import { Loading } from "../../components";

export function ProductCard() {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getProductsFunc = useCallback(async () => {
    try {
      const response = await getProducts();

      setProducts(response);
      setRefresh(false);
    } catch (error) {
      console.log(error);
    }
  }, [refresh]);

  useEffect(() => {
    getProductsFunc();
  }, [refresh]);

  const convertByteToUrl = (byteArray) => {
    const image = new Uint8Array(byteArray);
    const blob = new Blob([image], { type: "image/jpeg" });
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
  };

  return (
    <>
      {products?.length === 0 ? (
        <Loading />
      ) : (
        <>
          {products?.map((value, index) => (
            <ProductContainer key={index}>
              <div className="info-product">
                <div className="effect"></div>
                <img src={convertByteToUrl(value.image.data)} alt="Product" />
                <h2>{value.name}</h2>
              </div>

              <div className="username">
                <MdPersonPin className="user-icon" />
                <span>
                  by <strong>{value.users.username}</strong>
                </span>
              </div>
              <button className="lightgreen">Ver detalhes</button>
            </ProductContainer>
          ))}
        </>
      )}
    </>
  );
}

const ProductContainer = styled.div`
  width: 200px;
  height: 250px;
  margin: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.beigeTone};
  box-shadow: 2px 2px 5px rgb(0 0 0 / 20%);
  border-radius: 10px;

  &:hover {
    .info-product {
      img {
        width: 350px;
        height: 350px;
        transition-duration: 0.5s;
      }

      .effect {
        background-color: rgb(0, 0, 0, 50%);
      }
    }
  }

  button {
    width: 180px;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 20%);
  }

  .info-product {
    width: 100%;
    height: 180px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition-duration: 0.5s;
    }

    .effect {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgb(0, 0, 0, 20%);
      transition: all 0.5s ease-out;
    }

    h2 {
      width: 90%;
      margin-bottom: 5px;
      position: absolute;
      z-index: 1;
      font-family: "Delicious Handrawn", cursive;
      font-size: 20px;
      text-align: center;
      text-transform: lowercase;
      text-shadow: 0px 0px 8px rgb(0 0 0 / 50%);
      line-height: 1.2;
      color: ${colors.beigeTone};
    }
  }

  .username {
    width: 180px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      width: 150px;
      margin: 8px 0px;
      font-weight: 300;
      word-wrap: break-word;
    }

    .user-icon {
      font-size: 22px;
      margin-right: 5px;
    }
  }

  @media (max-width: 600px) {
    margin: 10px;
  }
`;
