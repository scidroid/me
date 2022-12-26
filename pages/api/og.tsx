/* eslint-disable jsx-a11y/alt-text */

/* eslint-disable @next/next/no-img-element */
import { NextRequest } from "next/server";

import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge"
};

const regularFont = fetch(
  new URL(`${process.env.NEXT_PUBLIC_URL}/fonts/Inter-Regular.ttf`)
).then(res => res.arrayBuffer());

const boldFont = fetch(
  new URL(`${process.env.NEXT_PUBLIC_URL}/fonts/Inter-Bold.ttf`)
).then(res => res.arrayBuffer());

const handler = async (req: NextRequest) => {
  const [regular, bold] = await Promise.all([regularFont, boldFont]);

  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "Juan Almanza";
  const subtitle =
    title === "Juan Almanza" ? "Front-End Developer" : "Juan Almanza";

  return new ImageResponse(
    (
      <div tw="flex bg-white w-full h-full items-center justify-center p-8 bg-green-200">
        <div tw="flex items-center justify-center w-full h-full rounded-xl bg-white">
          <img
            tw="rounded-full w-72 mr-12"
            src={`${process.env.NEXT_PUBLIC_URL}/avatar.png`}
          />
          <div tw="flex flex-col">
            <h1 tw="font-bold text-6xl max-w-140">{title}</h1>
            <p tw="text-4xl">{subtitle}</p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Inter",
          data: regular,
          weight: 400
        },
        {
          name: "Inter",
          data: bold,
          weight: 700
        }
      ]
    }
  );
};

export default handler;
