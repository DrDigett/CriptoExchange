const BASE_URL = "https://rest.coincap.io/v3";
const API_KEY = "522da37b8e2ea4b68ca971aa1f29ff227618fe9379a581f7bfa045ec86d22a68";

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
