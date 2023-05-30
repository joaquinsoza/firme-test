import axios from "axios";

export const fetchData = async () => {
  //TO-DO Add types
  const res = await axios.get<any>(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
  return res.data;
};
