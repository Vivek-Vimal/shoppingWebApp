import axios from "axios";
import { BASE_URL } from "../../constants";

export const axiosGet = async (props) => {
  const { endPoint } = props;
  try {
    const res = await axios({
      method: "get",
      url: `${BASE_URL + endPoint}`,
    });
    return res;
  } catch (err) {
    return err;
  }
};
