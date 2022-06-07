import { orderBaseURL } from "./";

export const postOrder = async (url: string, data: any) => {
  const response = await orderBaseURL.post(url, data);
  return response.data;
};
