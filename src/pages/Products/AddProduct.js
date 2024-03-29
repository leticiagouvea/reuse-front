import { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import { colors } from "../../assets/styles/constants";
import { Header, Footer } from "../../components";
import { postProduct } from "../../services/productApi";

export function AddProduct() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const buffer = reader.result;      
      setImage(buffer);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      description,
      image
    };

    try {
      await postProduct(body);
      toast.success("Produto adicionado com sucesso!");
      resetForm();
    } catch (error) {
      toast.error("Algo deu errado, tente novamente mais tarde.");
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setImage(null);
    setDescription("");
    setName("");
  };

  return (
    <>
      <Header />
      <AddProductContainer>
        <h1>ADICIONAR PRODUTO</h1>

        <form onSubmit={handleSubmit}>
          <label>Insira uma imagem:</label>
          <Dropzone onDrop={onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div className="dropzone-box" {...getRootProps()}>
                <input {...getInputProps()} />
                {selectedFile ? (
                  <img src={URL.createObjectURL(selectedFile)} alt="product" />
                ) : (
                  <p>Clique aqui para selecionar a imagem</p>
                )}
              </div>
            )}
          </Dropzone>
          <label>Escolha um nome para o produto:</label>
          <input
            placeholder="Digite aqui o nome do produto"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Descrição do produto:</label>
          <textarea
            placeholder="Adicione informações importantes, como: detalhes de tamanho, modelo, marca ou loja, e condições da peça..."
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button className="lightgreen hvr-float-shadow"> PUBLICAR </button>
        </form>
      </AddProductContainer>
      <Footer />
    </>
  );
}

const AddProductContainer = styled.div`
  width: 300px;
  margin: 180px auto 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 25px;
    padding: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${colors.earthyTone};
    border-top: 1px solid ${colors.earthyTone};
    border-bottom: 1px solid ${colors.earthyTone};
  }

  .dropzone-box {
    width: 300px;
    height: 70px;
    padding: 20px;
    margin: 5px 0px 20px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed ${colors.earthyTone};
    border-radius: 10px;
    background-color: ${colors.beigeTone};
    color: #333333;
    text-align: center;
    font-weight: 300;
    cursor: pointer;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  label {
    width: 300px;
    font-size: 18px;
    margin-bottom: 8px;
  }

  input::placeholder,
  textarea::placeholder {
    color: #333333;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.2;
  }

  button {
    width: 150px;
    height: 30px;
    margin-top: 10px;
  }
`;
