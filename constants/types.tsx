
interface IAsset {
  [key: string]: Asset
}

export type Asset = {
  value: number,
  exChangeRate: number
}

export type WalletInfo = {
  walletId: string,
  currency: string,
  assets: IAsset
}