import axios from "axios";
import { BASE_URL } from "../../constants";

export const AxiosPost = async (props) => {
  const { endPoint, payload, token } = props;
  const formatToken = `Bearer ${token}`;
  try {
    const res = await axios({
      url: BASE_URL + endPoint,
      method: "POST",
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
