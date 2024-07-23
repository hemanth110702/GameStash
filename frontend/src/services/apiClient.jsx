import axios from "axios";

const baseURLs = {
  development: "http://localhost:5000/",
  production: "",
};

const baseURL =
  process.env.NODE_ENV === "production"
    ? baseURLs.production
    : baseURLs.development;

export default axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe9fdee4c43d43d5859a9c15629cb8a0",
  },
});
 */