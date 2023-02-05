import axios from "axios";
import { ApiResponse } from "models/api_response";
import { BreadMeContact } from "models/breadme_contact";
import { Category } from "models/category";
import { ContactInfo } from "models/contact_info";
import { FreePOSContact } from "models/freepos_contact";
import { Product } from "models/product.model";
import { QuestionnaireContact } from "models/questionnaire_contact";
import { RequestDemoContact } from "models/request_demo_contact";
import { Specification } from "models/specification";

const AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api`,
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
      console.log("error = ", error);
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
      console.log("error = ", error);
    });
};

export const getSpecification = async (productId: string) => {
  return await AxiosInstance.post<ApiResponse<Specification>>(
    "/specification",
    {
      posId: productId,
    }
  )
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};

export const submitQuestionnaireContact = async (
  data: QuestionnaireContact
) => {
  try {
    const response = await AxiosInstance.post<ApiResponse<Array<Product>>>(
      "/questionnaire",
      data
    );
    return response.data.data;
  } catch (error) {
    console.log("error = ", error);
  }
  return [];
};

export const submitForFreePOS = async (data: FreePOSContact) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/freeposform", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};

export const submitForDemoPOS = async (data: RequestDemoContact) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/requestdemo", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};

export const submitContact = async (data: ContactInfo) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/contact_info", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};

export const submitBreadme = async (data: BreadMeContact) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/breadme", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};

export const applyPartner = async (data: ContactInfo) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/applypartner", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};
