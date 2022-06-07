import { useEffect, useState } from "react";
import { getAddressService } from "../../service/getAddress";

export const getAllAddress = () => {
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    getAddressService("orders/address")
      .then((res) => {
        setAddresses(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return addresses;
};
