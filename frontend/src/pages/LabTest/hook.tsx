import { useEffect, useState } from "react";
import { getLabsService } from "../../service/getLabs";

export const getAllLabs = () => {
  const [labs, setLabs] = useState([]);
  useEffect(() => {
    getLabsService("/labs")
      .then((res) => {
        setLabs(res);
      })
      .catch((err) => {
        throw err;
      });
  }, []);
  return labs;
};
