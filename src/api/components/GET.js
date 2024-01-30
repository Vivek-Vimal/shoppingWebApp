import axios from "axios";
import { BASE_URL } from "../../constants";

export const AxiosGet = async (props) => {
  const { endPoint, token } = props;

  const formatToken = `Bearer ${token}`;

  try {
    const res = await axios({
      method: "get",
      url: `${BASE_URL + endPoint}`,
      headers: {
        authorization: formatToken,
      },
    });
    return res;
  } catch (err) {
    return err;
  }
};
