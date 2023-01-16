import axios from "axios";
import { ApiResponse } from "models/api_response";
import { Category } from "models/category";
import { ContactInfo } from "models/contact_info";
import { FreePOSContact } from "models/freepos_contact";
import { Product } from "models/porduct";
import { QuestionnaireContact } from "models/questionnaire_contact";
import { RequestDemoContact } from "models/request_demo_contact";

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

export const submitQuestionnaireContact = async (data: QuestionnaireContact) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/questionnaire", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};

export const submitForFreePOS = async (data: FreePOSContact) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/freeposform", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};

export const submitForDemoPOS = async (data: RequestDemoContact) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/requestdemo", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};

export const submitContact = async (data: ContactInfo) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/contact_info", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      if (error.response.status !== 409) throw error;
    });
};
