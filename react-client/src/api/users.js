import axios from "axios";

const ENDPOINT = `${process.env.REACT_APP_API_BASE_URL}`;

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export async function getActiveUsers() {
  const graphqlQuery = {
    operationName: "fetchUser",
    query: `query fetchUser { users { id name email phone} }`,
  };

  let resp = await axios({
    url: ENDPOINT,
    method: "post",
    data: graphqlQuery,
  });

  return resp.data;
}
