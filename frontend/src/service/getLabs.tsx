import { labBaseURL } from "./index";

export const getLabsService = async (url: string) => {
  const response = await labBaseURL.get(url);
  return response.data;
};
