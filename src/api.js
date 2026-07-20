const BASE_URL = "https://rest.coincap.io/v3";
const API_KEY = "ae81c5180f06623ae7a60f4760843ace77b0cd35401a1f25eda7e60b48e9558f";

function request(endpoint) {
  const url = `${BASE_URL}${endpoint}${
    endpoint.includes("?") ? "&" : "?"
  }apiKey=${API_KEY}`;

  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAssets() {
  return request("/assets?limit=20");
}

function getAsset(coin) {
  return request(`/assets/${coin}`);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return request(
    `/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
}

function getMarkets(coin) {
  return request(`/assets/${coin}/markets?limit=5`);
}

function getExchange(id) {
  return request(`/exchanges/${id}`);
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory
};
