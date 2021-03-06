// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { WalletInfo } from "../../constants/types";
import { WALLET_DATA } from '../../constants';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WalletInfo>
) {
  global.walletData = global.walletData || WALLET_DATA
  res.status(200).json(global.walletData)
}
