// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}
type Datea = {
    name: string
}

const handler = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    res.status(200).json({ name: 'John Doe' })
}
const getData = (
    req: NextApiRequest,
    res: NextApiResponse<Datea>
) => {
    res.status(200).json({ name: 'John Doe' })
}

export {
    handler, getData,
}