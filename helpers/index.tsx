import { Asset } from "../constants/types";

interface Params {
  [key: string]: any  
}
const getQueryString = (params: Params) => {
  const esc = encodeURIComponent;
  return Object.keys(params)
    .map(k => esc(k) + '=' + esc(params[k]))
    .join('&');
}

const request = (params: Params) => {
  const method = params.method || 'GET';
  let qs = '';
  let body;
  const headers = params.headers || {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  if (['GET', 'DELETE'].indexOf(method) > -1) {
    qs = '?' + getQueryString(params.data);
  } else {
    body = JSON.stringify(params.data);
  }

  let url = params.url + qs;
  console.log(url)
  return fetch(url, { method, headers, body }).then(res => res.json());
}

export const get = (params: Params) => request(Object.assign({ method: 'GET' }, params));
export const post = (params: Params) => request(Object.assign({ method: 'POST' }, params));
export const put = (params: Params) => request(Object.assign({ method: 'PUT' }, params));

export const exChangeToVND = (asset: Asset) => {
  const { value, exChangeRate } = asset
  return (value * exChangeRate).toLocaleString();
}

export const copyToClipboardWithCommand = (content: string) => {
  if (navigator.clipboard && navigator.permissions) {
    navigator.clipboard.writeText(content).then(() => alert('Copied'));
  } else if (document.queryCommandSupported("copy")) {
    const el = document.createElement("textarea");
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert('Copied');
  }
};