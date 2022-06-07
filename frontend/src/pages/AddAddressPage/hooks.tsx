import { postAddress } from "../../service/postAddress";

export const addAddress = (data: any) => {
  return postAddress("orders/address", data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};
