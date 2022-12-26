import { NextApiRequest, NextApiResponse } from "next";

import client from "lib/sanity";

client.config({ token: process.env.SANITY_WRITE_TOKEN });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id, name, comment } = req.body;
  const data = await client.create({
    _type: "comment",
    post: {
      _type: "reference",
      _ref: _id
    },
    name,
    comment
  });

  res.status(200).json({ comment: data });
};

export default handler;
