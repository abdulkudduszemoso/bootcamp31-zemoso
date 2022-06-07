import { orderBaseURL } from "./index";

export const getAddressService = async (url: string) => {
  const response = await orderBaseURL.get(url);
  return response.data;
};
