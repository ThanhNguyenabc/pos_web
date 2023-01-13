import axios from "axios";
import { ApiResponse } from "models/api_response";
import { Category } from "models/category";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
export default AxiosInstance;

export const getListCategory = async () =>
  await AxiosInstance.get<ApiResponse<Array<Category>>>("/category");
