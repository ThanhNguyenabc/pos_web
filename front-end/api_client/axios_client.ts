import axios from "axios";
import { ApiResponse } from "models/api_response";
import { Category } from "models/category";
import { Product } from "models/porduct";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default AxiosInstance;

export const getListCategory = async () =>
  await AxiosInstance.get<ApiResponse<Array<Category>>>("/category");

export const getPOSByCategory = async (type: string) => {
  return await AxiosInstance.post<ApiResponse<Array<Product>>>("/products", {
    type,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};

export const getPOSDetail = async (id: string) => {
  return await AxiosInstance.post<ApiResponse<Product>>("/productDetail", {
    posId: id,
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};
