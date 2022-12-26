import { NextApiRequest, NextApiResponse } from "next";

import client from "lib/sanity";

client.config({ token: process.env.SANITY_WRITE_TOKEN });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id } = req.body;
  const data = await client.patch(_id).inc({ likes: 1 }).commit();

  res.status(200).json({ likes: data.likes });
};

export default handler;
