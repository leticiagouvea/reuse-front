import api from "./api";
import { createHeaders } from "./createHeaders";

export const postProduct = async (body) => {
  const config = createHeaders();
  const response = await api.post("/products", body, config);

  return response.data;
};

export const getProducts = async () => {
  const response = await api.get("/products");

  return response.data;
};
