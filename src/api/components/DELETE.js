import axios from "axios";
import { BASE_URL } from "../../constants";

export const axiosDelete = async ({ endPoint, payload }) => {
  try {
    const res = await axios({
      method: "DELETE",
      url: BASE_URL + endPoint,
      data: payload,
    });
    return res;
  } catch (err) {
    return err;
  }
};
