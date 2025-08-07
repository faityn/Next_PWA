// pages/api/send-message.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: "2033453",
  key: "c1937d44f34d53dad837",
  secret: "d43880bb47f44633b6e3",
  cluster: "ap3",
  useTLS: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { message } = req.body;

  await pusher.trigger("my-channel", "my-event", {
    message,
  });

  res.status(200).json({ success: true });
}
