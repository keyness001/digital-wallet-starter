import useSWR from "swr"
import { API_URL_DEMO, DEFAULT_WALLET_ID } from "../constants"
import { get, put } from "../helpers"


export const useWalletInfo = () => {
  const { data, error, mutate } = useSWR([API_URL_DEMO.getWalletInfo, DEFAULT_WALLET_ID], () => get({
    url: API_URL_DEMO.getWalletInfo,
    data: {
      walletId: DEFAULT_WALLET_ID,
    }
  }))

  const changeAsset = async (currency) => {
    const newData = await put({
      url: API_URL_DEMO.changeAsset,
      data: {
        walletId: DEFAULT_WALLET_ID,
        currency
      }
    })
    mutate(newData)
  }

  const sendAmount = async (currency, amount) => {
    const newData = await put({
      url: API_URL_DEMO.sendAmout,
      data: {
        walletId: DEFAULT_WALLET_ID,
        currency,
        amount
      }
    })
    mutate(newData)
  }
  return { data, error, changeAsset, sendAmount }
}