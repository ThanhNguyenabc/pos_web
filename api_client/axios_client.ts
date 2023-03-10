import axios from "axios";
import { ApiResponse } from "models/api_response";
import { Blog } from "models/blog";
import { BreadMeContact } from "models/breadme_contact";
import { Category } from "models/category";
import { ContactInfo } from "models/contact_info";
import { FreePOSContact } from "models/freepos_contact";
import { Product } from "models/product.model";
import { QuestionnaireContact } from "models/questionnaire_contact";
import { RequestDemoContact } from "models/request_demo_contact";
import { Specification } from "models/specification";

const AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/api`,
  timeout: 10000,
});

export default AxiosInstance;

export const getListCategory = async () =>
  await AxiosInstance.get<ApiResponse<Array<Category>>>("/category");

export const getPOSByCategory = async ({
  type,
  limit,
}: {
  type: string;
  limit?: number;
}) => {
  return await AxiosInstance.get<ApiResponse<Array<Product>>>("/products", {
    params: {
      type,
      limit,
    },
  })
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log("error = ", error);
      return [];
    });
};

export const getPOSDetail = async (id: string) => {
  try {
    let response = await AxiosInstance.post<ApiResponse<Product>>("/products", {
      posId: id,
    });

    return response.data.data;
  } catch (error) {
    console.log("error = ", error);
  }
  return null;
};

export const getSpecification = async (productId: string) => {
  try {
    let response = await AxiosInstance.post<ApiResponse<Specification>>(
      "/specification",
      {
        posId: productId,
      }
    );

    return response.data.data;
  } catch (error) {
    console.log("error =", error);
  }
  return null;
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

export const subscribeBlog = async (data: ContactInfo) => {
  return await AxiosInstance.post<ApiResponse<boolean>>("/subscribe_mail", data)
    .then((res) => {
      return res.data.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};

export const getBlogPosts = async () => {
  return await AxiosInstance.get<Array<Blog>>("/posts", {
    baseURL: process.env.NEXT_PUBLIC_WORDPRESS_HOST,
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};

export const getBlogDetail = async (id: string) => {
  return await AxiosInstance.get<Blog>(`/posts/${id}`, {
    baseURL: process.env.NEXT_PUBLIC_WORDPRESS_HOST,
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};
