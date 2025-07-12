/*const url = 'https://api.coincap.io/v2'*/
const url = 'https://rest.coincap.io/v3/assets?apiKey=522da37b8e2ea4b68ca971aa1f29ff227618fe9379a581f7bfa045ec86d22a68'
function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data)
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json())
    .then((res) => res.data)
}

function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data)
}

function getMarkets (coin){
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data)
}

function getExchange(id){
  return fetch(`${url}/exchanges/${id}`)
  .then( res => res.json())
  .then( res => res.data)
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory,
}
