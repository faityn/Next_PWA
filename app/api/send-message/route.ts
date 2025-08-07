import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: "2033453",
  key: "4c98bf3818c8b2f71c1f",
  secret: "cb1ebc49801ffd9a35ce",
  cluster: "ap3",
  useTLS: true,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { message } = body;

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  await pusher.trigger("my-channel", "my-event", {
    message,
  });

  return NextResponse.json({ success: true });
}
