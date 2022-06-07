import { orderBaseURL } from "./index";

export const postAddress = async (url: string, data: any) => {
  const response = await orderBaseURL.post(url, data);
  return response.data;
};
