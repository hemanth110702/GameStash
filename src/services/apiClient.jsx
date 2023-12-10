import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe9fdee4c43d43d5859a9c15629cb8a0",
  },
});