import * as api from "../config/api";

// const API = process.env.PUBLIC_API;
const API = "http://34.238.121.143:8000";

export function getCategories() {
  return api.get(`${API}/api/categories`, {
    limit: 0,
    page: 1,
    category_id: 1,
  });
}

// export function getCategori(categoryId) {
//   return api.get(`${API}/api/products${categoryId}`, {
//     limit: 20,
//     page: 0,
//   });
// }

// export function getCategories(categoryId) {
//   return api.get(`${API}/api/products/${categoryId}`);
// }
