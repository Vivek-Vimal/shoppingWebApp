import axios from "axios";
import { BASE_URL } from "../../constants";

export const axiosPost = async (props) => {
  const { endPoint, payload } = props;
  try {
    const res = await axios({
      url: BASE_URL + endPoint,
      method: "POST",
      data: payload,
    });
    return res;
  } catch (err) {
    return err;
  }
};
