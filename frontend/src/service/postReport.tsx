import { reportBaseURL } from "./";

export const postReport = async (url: string, data: any) => {
    const response = await reportBaseURL.post(url, data);
    
    return response.data;
}
