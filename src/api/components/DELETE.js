import axios from "axios";
import { BASE_URL } from "../../constants";

export const axiosDelete = async ({ endPoint, payload, token }) => {
  const formatToken = `Bearer ${token}`;
  try {
    const res = await axios({
      method: "DELETE",
      url: BASE_URL + endPoint,
      data: payload,
      headers: {
        authorization: formatToken,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};
