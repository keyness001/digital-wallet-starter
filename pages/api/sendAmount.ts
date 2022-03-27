// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { WalletInfo } from "../../constants/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WalletInfo>
) {
  const {
    currency,
    amount
  } = req.body
  const totalAmount = global.walletData.assets[currency].value
  global.walletData.assets[currency] = { ...global.walletData.assets[currency], value: totalAmount - amount }
  res.status(200).json(global.walletData)
}
