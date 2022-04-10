import * as api from "../config/api";

// const API = process.env.PUBLIC_API;
const API = "http://34.238.121.143:8000";

export function checkAuth(token) {
  return api.get(`${API}/api/auth/me`, null, {
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
  });
}

export function loginService(body) {
  return api.post(`${API}/api/auth`, body, null, {
    "Access-Control-Allow-Origin": "*",
  });
}

export function getProduct(id) {
  return api.get(`${API}/api/products/${id}`);
}

export function register(body) {
  return api.post(
    `${API}/api/users`,
    null,
    { "Content-Type": "text/plain", Accept: "*/*" },
    body
  );
}
