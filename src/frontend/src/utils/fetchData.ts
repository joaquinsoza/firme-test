import axios from "axios";

export const fetchData = async () => {
  const res = await axios.get<any>("http://localhost:3000/fetch");
  return res.data;
};
