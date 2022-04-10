import * as api from "../config/api";

// const API = process.env.PUBLIC_API;
const API = "http://34.238.121.143:8000";

export function checkAuth(token) {
  return api.get(`${API}/api/auth/me`, null, {
    Authorization: `Bearer ${token}`,
  });
}

export function loginService(body) {
  return api.post(
    `${API}/api/auth`,
    null,
    {
      "content-type": "application/x-www-form-urlencoded",
    },
    body
  );
}

export function getProduct(id) {
  return api.get(`${API}/api/products/${id}`);
}

export function register(body) {
  return api.post(
    `${API}/api/users`,
    null,
    {
      "content-type": "application/x-www-form-urlencoded",
    },
    body
  );
}

// samean pin mas cek lek aku pindah pindah samean ngerti
