export const DEFAULT_WALLET_ID = '7300 3777 3888 3334';
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const API_URL_DEMO = {
  login: '/api/login/',
  getWalletInfo: '/api/getWalletInfo/',
  getExchangeRate: '/api/getExhangeRate/'
}

const getQueryString = (params) => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

const request = (params) => {
  const method = params.method || 'GET';
  const qs = '';
  let body;
  const headers = params.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  if (['GET', 'DELETE'].indexOf(method) > -1)
    qs = '?' + getQueryString(params.data);
  else // POST or PUT
    body = JSON.stringify(params.data);

  var url = params.url + qs;

  return fetch(url, { method, headers, body });
}

export const get = (params) => request(Object.assign({ method: 'GET' }, params));
export const post = (params) => request(Object.assign({ method: 'POST' }, params));
export const put = (params) => request(Object.assign({ method: 'PUT' }, params));
