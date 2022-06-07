import { postOrder } from "../../service/postOrder";
import { postReport } from '../../service/postReport'

export const postOrders = (data: any) => {
  postOrder("/orders", data)
    .then(async (res) => {
      return await res;
    })
    .catch((err) => {
      throw err;
    });
};

export const postReports = (data: any) => {
  postReport("/reports", data)
  .then(async (res) => {
      return await res;
  })
  .catch((err) => {
    throw err;
  })
}