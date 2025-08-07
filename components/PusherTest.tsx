// components/PusherTest.tsx
"use client";

import { useEffect, useState } from "react";
import { pusherClient } from "../lib/pusher";
import { toast } from "sonner";

export default function PusherTest() {
  const [message, setMessage] = useState("");
  const [incomingMessage, setIncomingMessage] = useState("");

  useEffect(() => {
    const channel = pusherClient.subscribe("my-channel");

    channel.bind("my-event", (data: any) => {
      toast.info(`Msg: ${data.message}`);
      setIncomingMessage(data.message);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  const sendMessage = async () => {
    await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    setMessage("");
  };

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="border px-2 py-1"
      />
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-3 py-1"
      >
        Send
      </button>

      <div>
        <strong>Incoming:</strong> {incomingMessage}
      </div>
    </div>
  );
}
