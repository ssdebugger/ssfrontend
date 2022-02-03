import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/gettopoffers'
    )
    const data = await response.json()
    res.status(200).json(data)
}
