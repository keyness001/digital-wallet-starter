// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DEFAULT_WALLET_ID } from '../../constants';

type Data = {
  walletId: string,
  token: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    walletId: '7300 3777 3888 3334',
    token: 'demo'
  })
}
