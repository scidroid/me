import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug } = req.query as { slug: string };

    if (req.method === "POST") {
      const addRes = await prisma.views.upsert({
        where: { slug },
        create: {
          slug
        },
        update: {
          count: {
            increment: 1
          }
        }
      });

      return res.status(200).json({
        count: addRes.count
      });
    }

    if (req.method === "GET") {
      const views = await prisma.views.findUnique({
        where: {
          slug
        }
      });

      if (!views) {
        return res.status(404).json({ message: "Not found" });
      }

      return res.status(200).json({ total: views.count });
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
};

export default handler;
