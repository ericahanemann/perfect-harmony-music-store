import axios from "axios";

const API_URL = "http://localhost:8000";

async function httpGetSpecificProducts(productType) {
  try {
    const response = await axios.get(`${API_URL}/${productType}`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

export { httpGetSpecificProducts };
