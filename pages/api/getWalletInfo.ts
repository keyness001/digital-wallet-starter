// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Asset = {
  currency: string
  value: number,
  exChangeRate: number
}

type Data = {
  walletId: string,
  currency: string,
  assets: Asset[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    walletId: '7300 3777 3888 3334',
    currency: 'USD',
    assets: [
      {
        currency: 'USD',
        value: 1000,
        exChangeRate: 2286350
      },
      {
        currency: 'EUR',
        value: 1000,
        exChangeRate: 2511228
      },
      {
        currency: 'EUR',
        value: 1000,
        exChangeRate: 18721
      }
    ]
  })
}
