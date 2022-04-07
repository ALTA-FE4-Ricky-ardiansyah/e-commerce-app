import * as api from "../config/api";

// const API = process.env.PUBLIC_API;
const API = "http://34.238.121.143:8000";

export function getProducts() {
  return api.get(`${API}/api/products`, {
    limit: 20,
    page: 0,
  });
}

export function getProduct(id) {
  return api.get(`${API}/api/products/${id}`);
}
