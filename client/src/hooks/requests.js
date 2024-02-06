import axios from "axios";

const API_URL = "http://localhost:8000";

//products requests

async function httpGetAllProducts() {
  try {
    const response = await axios.get(`${API_URL}/products/all`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpGetProductById(id) {
  try {
    const response = await axios.get(`${API_URL}/products/id/${id}`);

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

//cart requests

async function httpGetCartProducts() {
  try {
    const response = await axios.get(`${API_URL}/cart/all`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpAddProductToCart(id, amount) {
  try {
    const response = await axios.post(`${API_URL}/cart/add/${id}`, { amount });

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpUpdateCartProductAmount(id, amount) {
  try {
    const response = await axios.post(`${API_URL}/cart/update/${id}`, {
      amount,
    });

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpRemoveProductFromCart(id) {
  try {
    const response = await axios.delete(`${API_URL}/cart/remove/${id}`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

//favorites requests

async function httpGetAllFavorites() {
  try {
    const response = await axios.get(`${API_URL}/favorites/all`);
    console.log(response);
    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpGetFavoriteById(id) {
  try {
    const response = await axios.get(`${API_URL}/favorites/id/${id}`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpAddProductToFavorites(id) {
  try {
    const response = await axios.post(`${API_URL}/favorites/add/${id}`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

async function httpRemoveProductFromFavorites(id) {
  try {
    const response = await axios.delete(`${API_URL}/favorites/remove/${id}`);

    return response;
  } catch (error) {
    console.log("Request error:", error);
    return [];
  }
}

export {
  httpGetAllProducts,
  httpGetProductById,
  httpGetSpecificProducts,
  httpGetSpecificCategory,
  httpGetCartProducts,
  httpAddProductToCart,
  httpUpdateCartProductAmount,
  httpRemoveProductFromCart,
  httpGetAllFavorites,
  httpGetFavoriteById,
  httpAddProductToFavorites,
  httpRemoveProductFromFavorites,
};
