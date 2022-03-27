// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { WalletInfo } from "../../constants/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WalletInfo>
) {
  global.walletData = {...global.walletData, currency: req.body.currency};
  res.status(200).json(global.walletData)
}
