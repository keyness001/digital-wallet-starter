export const DEFAULT_WALLET_ID = '7300 3777 3888 3334';

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const API_URL_DEMO = {
  login: '/api/login/',
  getWalletInfo: '/api/getWalletInfo/',
  getExchangeRate: '/api/getExhangeRate/',
  changeAsset: '/api/changeAsset',
  sendAmout: '/api/sendAmount'
}

export const routePages = {
  home: '/',
  wallet: '/wallet',
  send: '/send'
}

export const WALLET_DATA = {
  walletId: '7300 3777 3888 3334',
  currency: 'USD',
  assets: {
    'USD' : {
      value: 1000,
      exChangeRate: 22863.50
    },
    'EUR' : {
      value: 1000,
      exChangeRate: 25112.28
    },
    'YEN' : {
      value: 1000,
      exChangeRate: 187.21
    },
  }
}
