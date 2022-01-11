import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export async function getActiveUsers() {
	const endpoint = `${process.env.REACT_APP_API_BASE_URL}`;
	const graphqlQuery = {
		operationName: "fetchUser",
		query: `query fetchUser { users { id name email phone} }`,
	};

	let resp = await axios({
		url: endpoint,
		method: "post",
		data: graphqlQuery,
	});

	return resp.data;
}
