import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: "2033453",
  key: "c1937d44f34d53dad837",
  secret: "d43880bb47f44633b6e3",
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
