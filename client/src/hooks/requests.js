import axios from "axios";

const API_URL = "http://localhost:8000";

async function httpGetAllProducts() {
  try {
    const response = await axios.get(`${API_URL}/products/all`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpGetSpecificProducts(productType) {
  try {
    const response = await axios.get(`${API_URL}/products/type/${productType}`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpGetSpecificCategory(category) {
  try {
    const response = await axios.get(`${API_URL}/products/${category}`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

export { httpGetAllProducts, httpGetSpecificProducts, httpGetSpecificCategory };
