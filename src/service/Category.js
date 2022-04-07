import * as api from "../config/api";

// const API = process.env.PUBLIC_API;
const API = "http://34.238.121.143:8000";

export function getCategories() {
  return api.get(`${API}/api/categories`, {
    limit: 0,
    page: 1,
  });
}
