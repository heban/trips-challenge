// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { TripsData } from 'interfaces/TripsData'
import { trips } from 'mocks/trips'

export default function handler(req: NextApiRequest, res: NextApiResponse<TripsData[]>) {
  // We use mock for challenge purpose, but we could fetch the data from external source
  res.status(200).json(trips)
}
