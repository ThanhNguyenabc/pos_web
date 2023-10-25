import { ApiResponse } from "models/api_response";
import { RemoteAppConfig } from "models/app_configs";
import { Blog } from "models/blog";
import { Category } from "models/category";
import { DataSubmission } from "models/data_submission";
import { Product } from "models/product.model";
import { Specification } from "models/specification";
import { SuggestPOSParams } from "models/suggest_pos_request_param";
import { Testimonial } from "models/testimonial.model";

const API_URL = `/api`;

interface Request {
  baseURL?: string;
  url: string;
  method?: "GET" | "POST" | "DELETE";
  data?: any;
  params?: Record<string, any>;
}
const fetcher = async <T>({
  url,
  method = "GET",
  data,
  params,
  baseURL,
}: Request) => {
  let requestUrl = `${baseURL ?? API_URL}${url}`;
  if (method === "GET" && params) {
    requestUrl = `${requestUrl}?${new URLSearchParams(params).toString()}`;
  }

  return fetch(requestUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method,
  })
    .then((res) => res.json())
    .then((res) => res as T);
};

export const getListCategory = async () => {
  try {
    const result = await fetcher<ApiResponse<Array<Category>>>({
      url: "/category",
    });
    return result.data;
  } catch (error) {
    return [];
  }
};

export const getListPOS = async ({
  type,
  limit = 0,
}: {
  type: string;
  limit?: number;
}) => {
  try {
    const result = await fetcher<ApiResponse<Array<Product>>>({
      url: "/products",
      params: {
        type,
        limit,
      },
    });

    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return [];
  }
};

export const getPOSDetail = async (id: string) => {
  try {
    const result = await fetcher<ApiResponse<Product>>({
      url: "/product_detail",
      method: "POST",
      data: { posId: id },
    });

    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return null;
  }
};

export const getSpecification = async (productId: string) => {
  try {
    const result = await fetcher<ApiResponse<Specification>>({
      url: "/specification",
      method: "POST",
      data: { posId: productId },
    });

    return result.data;
  } catch (error) {
    console.log("error =", error);
  }
  return null;
};

export const submitQuestionnaireContact = async (data: DataSubmission) => {
  try {
    const result = await fetcher<ApiResponse<boolean>>({
      url: "/questionnaire",
      method: "POST",
      data,
    });

    return result.data;
  } catch (error) {
    console.log("error = ", error);
  }
  return [];
};

export const getSuggestPOS = async (params: SuggestPOSParams) => {
  try {
    const result = await fetcher<ApiResponse<Array<Product>>>({
      url: "/questionnaire",
      params,
    });

    return result.data;
  } catch (error) {
    console.log("error = ", error);
  }
  return [];
};

export const submitForFreePOS = async (data: DataSubmission) => {
  try {
    const result = await fetcher<ApiResponse<boolean>>({
      url: "/freeposform",
      method: "POST",
      data,
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};

export const submitForDemoPOS = async (data: DataSubmission) => {
  try {
    const result = await fetcher<ApiResponse<boolean>>({
      url: "/requestdemo",
      method: "POST",
      data,
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};

export const submitContact = async (data: DataSubmission) => {
  try {
    const result = await fetcher<ApiResponse<boolean>>({
      url: "/contact_info",
      method: "POST",
      data,
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};

export const submitBreadme = async (data: DataSubmission) => {
  try {
    const result = await fetcher<ApiResponse<boolean>>({
      url: "/breadme",
      method: "POST",
      data,
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};

export const applyPartner = async (data: DataSubmission) => {
  try {
    const result = await fetcher<ApiResponse<boolean>>({
      url: "/applypartner",
      method: "POST",
      data,
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};

export const subscribeBlog = async (data: DataSubmission) => {
  try {
    const result = await fetcher<ApiResponse<boolean>>({
      url: "/subscribe_mail",
      method: "POST",
      data,
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};

export const getBlogPosts = async () => {
  try {
    const result = await fetcher<Array<Blog>>({
      url: "/posts?per_page=100",
      baseURL: process.env.NEXT_PUBLIC_WORDPRESS_HOST,
    });
    return result;
  } catch (error) {
    console.log("error = ", error);
    return [];
  }
};

export const getBlogDetail = async (id: string) => {
  try {
    const result = await fetcher<Blog>({
      url: `/posts/${id}`,
      baseURL: process.env.NEXT_PUBLIC_WORDPRESS_HOST,
    });
    return result;
  } catch (error) {
    console.log("error = ", error);
    return null;
  }
};

export const getAppConfigs = async () => {
  try {
    const result = await fetcher<ApiResponse<RemoteAppConfig>>({
      url: "/configs",
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};

export const fetchTestimonials = async () => {
  try {
    const result = await fetcher<ApiResponse<Array<Testimonial>>>({
      url: "/testimonial",
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};

export const fetchProductIcons = async () => {
  try {
    const result = await fetcher<ApiResponse<Array<Product>>>({
      url: "/product_icons",
    });
    return result.data;
  } catch (error) {
    console.log("error = ", error);
    return false;
  }
};
