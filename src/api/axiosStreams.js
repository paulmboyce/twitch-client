import axios from "axios";

const axiosStream = axios.create({
	baseURL: "http://localhost:3001",
});

export { axiosStream };
